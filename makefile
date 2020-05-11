.DEFAULT_GOAL := default

.PHONY: clean default

clean:
	@rm -rf .data
	@rm -rf dati

.data:
	@git clone https://github.com/pcm-dpc/COVID-19.git $@

dati/regioni.csv: .data
	mkdir -p dati
	cat $+/dati-regioni/*.csv > $@.tmp
	head -1 $@.tmp > $@.header
	cat $@.header > $@.base
	grep -vf $@.header $@.tmp >> $@.base
	sed -i 's/\r//g' $@.base
	awk -f regioni.awk $@.base $@.base > $@
	rm -f $@.*

dati/province.csv: .data
	mkdir -p dati
	cat $+/dati-province/*.csv > $@

dati/nazione.csv: .data
	mkdir -p dati
	cat $+/dati-andamento-nazionale/*.csv > $@

default: \
    clean \
    dati/regioni.csv \
    dati/nazione.csv \
    dati/province.csv \
