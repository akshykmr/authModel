import {Login, Register} from "././components/auth/Function";

import Home from './Group';import { BrowserRouter, Route, Routes } from "react-router-dom";
// import YouTube from "./components/youtube/Youtube";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
