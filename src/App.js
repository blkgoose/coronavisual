import React, { useState, useLayoutEffect } from 'react'

import Regioni from './graphs/regioni'
import Nazione from './graphs/nazione'
import NazioneAttivi from './graphs/nazione-attivi'

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => setSize([window.innerWidth, window.innerHeight])

    window.addEventListener('resize', updateSize)
    updateSize()

    return () => window.removeEventListener('resize', updateSize)
  }, [])

  return size
}

const App = () => {

  var [w, h] = useWindowSize()

  return (
    <>
      <h1>Regioni</h1>
      <Regioni width={w}/>

      <h1>Nazione delta</h1>
      <Nazione width={w} />

      <h1>Nazione attivi</h1>
      <NazioneAttivi width={w} />
    </>
  )
}

export default App
