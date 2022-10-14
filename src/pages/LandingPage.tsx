import React     from 'react'
import Carousel  from '../components/Carousel'
import SearchBar from '../components/SearchBar'
import Products   from '../components/Products'

function LandingPage() {
  return (
    <>
      <SearchBar />
      <Carousel />
      <Products />
    </>
  )
}

export default LandingPage;
