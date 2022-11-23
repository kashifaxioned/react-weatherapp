import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home(props) {

  const [searchVal, setSearchVal] = useState()
  const [resData, setResData] = useState();

  const navigate = useNavigate()

  const handleClick = (e) => {
   setSearchVal(e.target.previousSibling.firstChild.value)
  }

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?APPID=2cc3a1b1ab65f4ad2c40443fde9cc68c&q=${searchVal}&units=metric`;
    axios.get(url).then((data) => setResData(data));
  }, [searchVal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(resData) {
      props.getData(resData)
      navigate('/result')
    } 
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
