import PageFooter from './components/footer/PageFooter.jsx'
import Hero2 from './components/hero/hero2/Hero2.jsx'
import HeroScroller from './components/hero/heroScroller.jsx'
import Search from  './components/search/search.jsx'

const Home = () => {
  return (
    <>
      <Search />
      <HeroScroller />
      <Hero2 />
      <PageFooter />
    </>
  )
}

export default Home
