.DEFAULT_GOAL := default

.PHONY: clean default

clean:
	@rm -rf .data
	@rm -rf dati

.data:
	@git clone https://github.com/pcm-dpc/COVID-19.git $@

public/dati/regioni.csv: .data
	mkdir -p dati
	cat $+/dati-regioni/*.csv > $@.tmp
	head -1 $@.tmp > $@.header
	cat $@.header > $@.base
	grep -vf $@.header $@.tmp >> $@.base
	sed -i 's/\r//g' $@.base
	awk -f regioni.awk $@.base $@.base > $@
	rm -f $@.*

public/dati/province.csv: .data
	mkdir -p dati
	cat $+/dati-province/*.csv > $@
	sed -i 's/\r//g' $@

public/dati/nazione.csv: .data
	mkdir -p dati
	cat $+/dati-andamento-nazionale/*.csv > $@
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
