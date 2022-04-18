import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router";
import Home from "./components/Pages/Home/Home";
import NotFound from "./components/Pages/NotFound/NotFound";
import Blog from "./components/Pages/Blog/Blog";
import Login from "./components/Pages/Login/Login";
import CheckOut from "./components/Pages/CheckOut/CheckOut";
import Register from "./components/Pages/Register/Register";
import RouteProtector from "./components/RouteProtector/RouteProtector";
import AboutMe from "./components/Pages/AboutMe/AboutMe";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="w-full h-20"></div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/checkout" element={<RouteProtector><CheckOut/></RouteProtector>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/about" element={<AboutMe/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
