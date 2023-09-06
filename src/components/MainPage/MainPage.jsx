import { React, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Body from '../Body/Body'

const MainPage = () => {
  const [cartShown, setCartShown] = useState(false)

  function handleCartState () {
    setCartShown((cartShown) => !cartShown)
  }

  return (
    <>
      <Navbar handleCartState={handleCartState} />
      <Body cartShown={cartShown} />
    </>
  )
}

export default MainPage
