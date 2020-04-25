BEGIN {
    FS=","
    OFS=","
}

FNR==NR {
    d=substr($1, 1, 10)
    data[$1]=d
    dec[d"|"$4]=$15
    gua[d"|"$4]=$14
}

FNR!=NR && FNR==1 {
    $21="nuovi_deceduti"
    $22="nuovi_guariti"
    $23="nuovi_risolti"
}

FNR!=NR && FNR!=1 {
    ytd_cmd="date -d'"data[$1]" -1 day' +%F"
    ytd_cmd | getline ytd
    close(ytd_cmd)

    $21=$15-dec[ytd"|"$4]
    $22=$14-gua[ytd"|"$4]
    $23=$21+$22
}

FNR!=NR { print $0 }
