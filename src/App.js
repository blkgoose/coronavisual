import React, { Component } from 'react'
import { LineChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Line } from 'recharts'
import Papa from 'papaparse'

Array.prototype.distinct = function() {
  return Array.from(new Set(this))
}

class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }
    this.regione = null
  }

  componentDidMount() {
    Papa.parse('/dati/regioni.csv', {
      download: true,
      header: true,
      complete: data => this.setState(data)
    })
  }

  render() {
    const data = (regione) =>
      this.state.data &&
      this.state.data
      .filter(r => r.denominazione_regione === regione)
      .filter(r => r.data >= '2020-05-01')

    return (
      <>
        <select onChange={r => this.regione = r}>
          {
            this.state.data ?
              this.state.data.map(r => r.denominazione_regione)
                .distinct()
                .map(e => <option key={e} value={e}>{e}</option>)
            : null
          }
        </select>
        <LineChart
          width={1000}
          height={500}
          data={data(this.state.regione)}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >

          <XAxis dataKey="data"/>
          <YAxis type='number' domain={[0, 250]}/>

          <CartesianGrid />

          <Legend />
          <Tooltip/>

          <Line type="monotone" dataKey="nuovi_risolti" stroke="#8884d8" strokeWidth={2}/>
          <Line type="monotone" dataKey="nuovi_positivi" stroke="#82ca9d" strokeWidth={2}/>
        </LineChart>
      </>
    )
  }
}

const App = () => (
  <>
  <Graph />
  </>
)

export default App
