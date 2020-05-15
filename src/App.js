import React, { useState, useLayoutEffect } from 'react'

import Regioni from './graphs/regioni'

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
      <Regioni width={w}/>
    </>
  )
}

export default App
