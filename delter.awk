BEGIN {
    FS=","
    OFS=","
    split(vars, var, "~")
    data_f=var[1]
    dec_f=var[2]
    gua_f=var[3]
    sal_f=var[4]
}

FNR==NR {
    d=substr($1, 1, 10)
    data[$data_f]=d
    dec[d"|"$sal_f]=$dec_f
    gua[d"|"$sal_f]=$gua_f
}

FNR!=NR && FNR==1 {
    deceduti=NF+1
    guariti=NF+2
    risolti=NF+3

    $deceduti="nuovi_deceduti"
    $guariti="nuovi_guariti"
    $risolti="nuovi_risolti"
}

FNR!=NR && FNR!=1 {
    ytd_cmd="date -d'"data[$data_f]" -1 day' +%F"
    ytd_cmd | getline ytd
    close(ytd_cmd)

    $deceduti=$dec_f-dec[ytd"|"$sal_f]
    $guariti=$gua_f-gua[ytd"|"$sal_f]
    $risolti=$deceduti+$guariti
}

FNR!=NR { print $0 }
