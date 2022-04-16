import logo from "./logo.svg";
import "./App.css";
import logoheader from "./img/logoheader.png";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="mt-20">testing heading</h1>
      <Footer></Footer>
    </div>
  );
}

export default App;
