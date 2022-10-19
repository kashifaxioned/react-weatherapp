import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Result from "./component/Result";
import Home from "./component/Home";

export default function App() {
  const [data, setData] = useState();

  const handleData = (response) => {
    setData(response);
  };

  return (
    <Routes>
      <Route path="/" element={<Home getData={handleData} />} />
      <Route path="/result" element={<Result resData={data} />} />
    </Routes>
  );
}
