import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import Result from "./component/Result";
import Home from "./component/Home";

export default function App() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [resData, setResData] = useState();

  const handleData = (response) => {
    setData(response);
  };

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?APPID=2cc3a1b1ab65f4ad2c40443fde9cc68c&q=${data}&units=metric`;
    axios.get(url).then((data) => setResData(data));
  }, [data]);

  useEffect(() => {
    if (resData) {
      navigate("/result");
    }
  }, [resData]);

  return (
    <Routes>
      <Route path="/" element={<Home getData={handleData} />} />
      <Route path="/result" element={<Result resData={resData} />} />
    </Routes>
  );
}
