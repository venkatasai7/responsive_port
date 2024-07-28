import React from 'react'
import Logo from './Logo'
import Description from './Description'
import Timeline from './Timeline'
import Projects from './Projects'
import WordCloud from './WordCloud'
// import Experience from './Experience'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Logo/>
      <Description/>
      <Timeline/>
      <Projects/>
      <Description/>
      <WordCloud/>
      {/* <Experience/> */}
      <Footer/>
    </div>
  )
}

export default Home
