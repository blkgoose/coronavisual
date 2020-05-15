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

docs/dati/province.csv: .data/dati-province/dpc-covid19-ita-province.csv
	mkdir -p $(dir $@)
	cat $+ > $@
	sed -i 's/\r//g' $@

docs/dati/nazione.csv: .data/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv
	$(call generate, 1, 11, 10, 2)

docs/index.html:
	rm -rf docs
	mkdir -p docs
	cd src
	npm run-script build
	mv build/* docs
	rmdir build

default: \
    clean \
    docs/dati/regioni.csv \
    docs/dati/nazione.csv \
    docs/dati/province.csv \
