import React from 'react'
import Logo from './Logo'
import Description from './Description'
import Timeline from './Timeline'
import Projects from './Projects'
import WordCloud from './WordCloud'
import Experience from './Experience'
import Footer from './Footer'
import Text from './Text'
const Home = () => {
  return (
    <div style={{backgroundColor:'#dfdfdf'}}>
      <Logo/>
      <Description/>
      <Timeline/>
      <Text 
      text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
      />
      <Projects/>
      <Text 
      text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
      />

      <Experience/>
      <Text 
      text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad repellat ipsum, cum repellendus unde illo dicta vitae eaque aut delectus dolore nulla. Illum aspernatur dolorem, reiciendis dolores enim totam itaque.'
      />
      <WordCloud/>
      
      <Footer/>
    </div>
  )
}

export default Home
