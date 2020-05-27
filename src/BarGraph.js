import React from 'react'
import { Area, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LabelList } from 'recharts'

const BarGraph = props => {
  const totalVal =
    props.data
    .map(r => r.value)
    .reduce((A, B) => A + B, 0)

  const data =
    props.data.map(r => {
        r["percentage"] = (r.value / totalVal * 100).toFixed(2)

        return r
    })

  return (
    <ComposedChart
      width={props.width}
      height={props.height}
      data={data}
      barSize={20}
    >
      <XAxis dataKey="name" scale="point" padding={{ left: 2, right: 2 }} />
      <YAxis />
      <Tooltip />
      <CartesianGrid />
      <Bar dataKey="value" barSize={5} fill="#82ca9d" background={{ fill: '#eee' }} />
      <Area dataKey="percentage" fill="#8884d8" unit="%" />
    </ComposedChart>
  )
}

export default BarGraph
