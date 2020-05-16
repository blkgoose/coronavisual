.DEFAULT_GOAL := default

.PHONY: clean default

clean:
	@rm -rf .data
	@rm -rf dati

.data/%:
	@git clone https://github.com/pcm-dpc/COVID-19.git .data

define generate =
    mkdir -p $(dir $@)
    cat $+ > $@.tmp
    head -1 $@.tmp > $@.header
    cat $@.header > $@.base
    grep -vf $@.header $@.tmp >> $@.base
    sed -i 's/\r//g' $@.base
    awk -v vars="$(strip $1)~$(strip $2)~$(strip $3)~$(strip $4)" -f delter.awk $@.base $@.base > $@
    rm -f $@.*
endef

docs/dati/regioni.csv: .data/dati-regioni/dpc-covid19-ita-regioni.csv
	$(call generate, 1, 15, 14, 4)

docs/dati/nazione.csv: .data/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv
	$(call generate, 1, 11, 10, 2)

docs/index.html:
	find docs/ -mindepth 1 \( -path "docs/dati" -o -path "docs/dati/*" \) -prune -o -exec rm -rf {} \;
	npm run-script build
	rsync build/ docs/ -r
	rm -rf build
	git add docs/
	git commit -m "chore(build): $(shell date)"

default: \
    clean \
    docs/dati/regioni.csv \
    docs/dati/nazione.csv \
