import React from 'react'
import '../Styles/Text.css'
const Text = (props) => {
  return (
    <div>
    <div className="container">
    <div className='Textcontent'>      
      <h2>
        {props.text}
       </h2>
       </div>
    </div>
      
    </div>
  )
}

export default Text
