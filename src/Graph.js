import React from 'react'
import { LineChart, XAxis, YAxis, Legend, Tooltip, CartesianGrid, Line } from 'recharts'

const Graph = (props) => {
  const max = () => {
    const data = props.data
    const fields = props.lines.map(x => x.field)

    return Math.max(...fields.map(f => Math.max(...data.map(d => d[f]))))
  }

  return (
  <LineChart
    width={props.width}
    height={props.height}
    data={props.data}
  >
    <XAxis dataKey={props.xField}/>
    <YAxis type='number' domain={[0, max()]}/>

    <CartesianGrid />

    <Legend />
    <Tooltip />

    {
      props.lines
      .map(l => <Line key={l.field} type={l.type} dataKey={l.field} stroke={l.color} strokeWidth={l.strokeWidth} />)
    }
  </LineChart>
  )
}

export default Graph
