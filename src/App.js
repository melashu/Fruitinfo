/* eslint-disable */
import { Routes, Route } from "react-router-dom";
import Header from "./coponents/header/Header";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home/Home";
import "./App.scss";
import Footer from "./coponents/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="fruitdetail/:id" element={<Detail />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
