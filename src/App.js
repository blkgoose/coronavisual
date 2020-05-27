import React, { useState, useLayoutEffect } from 'react'
import unique from 'array-unique'

import LineGraph from './LineGraph'
import BarGraph from './BarGraph'

import Papa from 'papaparse'
import Slider from 'rc-slider'
import Select from 'react-select'
import 'rc-slider/assets/index.css'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight])

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

const useData = (file) => {
  const [_data, setData] = useState([])

  if(_data.length === 0)
    Papa.parse(file, {
      download: true,
      header: true,
      complete: (res => {
          const data =
            res.data
            .map(x => {
              x.data = x.data.substring(0, 10)

              return x
            })
            .filter(x => x.data !== '')

          setData(data)
        }
      )
    })

  return _data
}

const App = () => {
  const [regione, setRegione] = useState("Lazio")
  const [dayspan, setDayspan] = useState(30)
  const [screenWidth, screenHeight] = useWindowSize()
  const w = screenWidth - 30

  const timeSpan = (ndays) => {
    const d = new Date()
    d.setDate(d.getDate() - ndays)
    return d.toISOString().split('T')[0]
  }

  const useSoluzione = () => {
    const data = useData('dati/nazione.csv')

    const maxDate = data.map(x => x["data"]).sort().reverse()[0]
    const lastVal = data.filter(x => x.data === maxDate)[0]

    return lastVal ? (1-lastVal.totale_positivi/lastVal.totale_casi)*100 : 0
  }

  const useLastData = (file) => {
    const data = useData(file)

    const maxDate = data.map(x => x["data"]).sort().reverse()[0]
    const lastVal = data.filter(x => x.data === maxDate)

    return lastVal ? lastVal : []
  }

  return (
    <>
      <h1><b>Coronavisual</b></h1>
      <hr/>

      <h3>Soluzione: {useSoluzione().toFixed(2)}%</h3>
      <hr/>

      <div>
        <Slider
          min={1}
          max={365}
          value={dayspan}
          onChange={setDayspan}
        />
        <h4>Dati: ultimi {dayspan} giorni</h4>
      </div>

      <h3>Italia: distribuzione nuovi casi ad oggi</h3>
      <BarGraph
        width={w}
        height={w/2}
        data={
          useLastData('dati/regioni.csv')
          .map(r => { return { name: r.denominazione_regione, value: parseInt(r.nuovi_positivi) }})
          .sort((A, B) => B.value - A.value)
        }
      />


      <h3>Italia: delta</h3>
      <LineGraph
        width={w}
        height={w/2}
        data={
          useData('dati/nazione.csv')
          .filter(x => x.data >= timeSpan(dayspan))
        }
        xField="data"
        lines={
          [
            {field: "nuovi_risolti",  color: "#8884d8", strokeWidth: 2, type: "monotone"},
            {field: "nuovi_positivi", color: "#82ca9d", strokeWidth: 2, type: "monotone"},
          ]
        }
      />

      <h3>Italia: attivi</h3>
      <LineGraph
        width={w}
        height={w/2}
        data={
          useData('dati/nazione.csv')
          .filter(x => x.data >= timeSpan(dayspan))
        }
        xField="data"
        lines={
          [
            {field: "totale_positivi", color: "#ff84d8", strokeWidth: 2, type: "monotone"},
          ]
        }
      />

      <h3>Italia: regioni</h3>
      <Select
        options={
          unique(
            useData('dati/regioni.csv')
            .map(x => x.denominazione_regione)
          )
          .map(x => { return { value: x, label: x }})
        }
        onChange={s => setRegione(s.value)}
        value={{label: regione, value: regione}}
      />
      <LineGraph
        width={w}
        height={w/2}
        data={
          useData('dati/regioni.csv')
          .filter(x => x.data >= timeSpan(dayspan))
          .filter(x => x.denominazione_regione === regione)
        }
        xField="data"
        lines={
          [
            {field: "nuovi_risolti",  color: "#8884d8", strokeWidth: 2, type: "monotone"},
            {field: "nuovi_positivi", color: "#82ca9d", strokeWidth: 2, type: "monotone"},
          ]
        }
      />

    </>
  )
}

export default App
