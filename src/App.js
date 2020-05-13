import React, { Component } from 'react'
import { LineChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Line } from 'recharts'
import Papa from 'papaparse'
import Select from 'react-select'

const distinct = (v) => Array.from(new Set(v))

class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
      regione: "Lazio"
    }
  }

  componentDidMount() {
    Papa.parse('dati/regioni.csv', {
      download: true,
      header: true,
      complete: data => this.setState({data: data})
    })
  }

  options = () =>
    this.state.data ?
      distinct(
        this.state.data.data
        .filter(r => r.data !== '')
        .map(r => r.denominazione_regione)
      )
      .map(v => { return {value: v, label: v} })
    : []

  render() {
    const data = () =>
      this.state.data &&
      this.state.data.data
      .map(r => {
        r.data = r.data.substring(0, 10)
        return r
      })
      .filter(r => r.denominazione_regione === this.state.regione)
      .filter(r => r.data >= '2020-05-01')

    return (
      <>
        <h2> {this.state.regione} </h2>

        <Select
          options={this.options()}
          value={this.state.regione}
          onChange={s => this.setState({regione: s.value})}
        />

        <LineChart
          width={1000}
          height={500}
          data={data(this.state.regione)}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis dataKey="data"/>
          <YAxis type='number' domain={[0, dataMax => dataMax * 8]}/>

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
