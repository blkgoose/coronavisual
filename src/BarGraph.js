import React, { PureComponent } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts'

const BarGraph = props =>
  <BarChart
    width={props.width}
    height={props.height}
    data={props.data}
    barSize={20}
  >
    <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
    <YAxis />
    <Tooltip />
    <CartesianGrid strokeDasharray="3 3" />
    <Bar dataKey="value" fill="#82ca9d" background={{ fill: '#eee' }} />
  </BarChart>

export default BarGraph
