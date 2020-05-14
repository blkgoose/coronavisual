.DEFAULT_GOAL := default

.PHONY: clean default

clean:
	@rm -rf .data
	@rm -rf dati

.data/%:
	@git clone https://github.com/pcm-dpc/COVID-19.git .data

docs/dati/regioni.csv: .data/dati-regioni/dpc-covid19-ita-regioni.csv
	mkdir -p $(dir $@)
	cat $+ > $@.tmp
	head -1 $@.tmp > $@.header
	cat $@.header > $@.base
	grep -vf $@.header $@.tmp >> $@.base
	sed -i 's/\r//g' $@.base
	awk -f regioni.awk $@.base $@.base > $@
	rm -f $@.*

docs/dati/province.csv: .data/dati-province/dpc-covid19-ita-province.csv
	mkdir -p $(dir $@)
	cat $+ > $@
	sed -i 's/\r//g' $@

public/dati/nazione.csv: .data/dati-andamento-nazionale/dpc-covid19-ita-andamento-nazionale.csv
	mkdir -p $(dir $@)
	cat $+ > $@
	sed -i 's/\r//g' $@

docs/index.html:
	rm -rf docs
	mkdir -p docs
	cd src
	npm run-script build
	mv build/* docs
	rmdir build

default: \
    clean \
    public/dati/regioni.csv \
    public/dati/nazione.csv \
    public/dati/province.csv \
