import React, { useState } from 'react'

export default function Home(props) {

  const [searchVal, setSearchVal] = useState()

  const handleClick = (e) => {
   setSearchVal(e.target.previousSibling.firstChild.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getData(searchVal)
  }

  return (
    <div className='home'>
     <form onSubmit={handleSubmit}>
       <div className='inp_section'>
         <input className='inp-field' type='text' name='search-inp' placeholder='Enter your city' autoComplete='off'/>
         <span className='inp-error'>error</span>
       </div>
       <button onClick={handleClick} type='submit' className='search-btn'>search</button>
     </form>
    </div>
  )
}
