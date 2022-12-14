import React     from 'react'
import Carousel  from '../components/molecules/Carousel'
import SearchBar from '../components/atoms/SearchBar'
import Products   from '../components/organisms/Products'

function LandingPage() {
  return (
    <div>
      <SearchBar />
      <Carousel />
      <Products />
    </div>
  )
}

export default LandingPage;
