import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Result from "./component/Result";
import Home from "./component/Home";

export default function App() {
  const navigate = useNavigate()
  const [data, setData] = useState()
  const [resData, setResData] = useState();

  const handleData = (response) => {
    setData(response)
  }
  
  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?APPID=2369b29f592b846dcf8f05a1f3416d55&q=${data}&units=metric`;
    axios.get(url).then((data) => setResData(data));
  }, [data]);

  useEffect(() => {
    if(resData) { navigate('/result') }
  }, [data])

  return (
      <Routes>
        <Route path='/' element={<Home getData={handleData}/>}/>
        <Route path='/result' element={<Result resData={resData}/>}/>
      </Routes>
  );
}
