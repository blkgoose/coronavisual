import React, { Component } from 'react'
import { LineChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Line } from 'recharts'
import Papa from 'papaparse'

class Graph extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    Papa.parse('dati/nazione.csv', {
      download: true,
      header: true,
      complete: data => this.setState({data: data})
    })
  }

  data = () =>
    this.state.data &&
    this.state.data.data
    .map(r => {
      r.data = r.data.substring(0, 10)
      return r
    })
    .filter(r => r.data >= '2020-05-01')


  render = () =>
      <LineChart
        width={this.props.width - 30}
        height={500}
        data={this.data()}
      >
        <XAxis dataKey="data"/>
        <YAxis type='number'/>

        <CartesianGrid />

        <Legend />
        <Tooltip/>

        <Line type="monotone" dataKey="totale_positivi" stroke="#ff84d8" strokeWidth={2}/>
      </LineChart>
}

const NazioneAttivi = (props) =>
  <Graph width={props.width}/>

export default NazioneAttivi
