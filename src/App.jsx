import "./App.css";
import Linechart from "./components/LineChart/Linechart";
import MyNav from "./components/MyNavbar/MyNav";
import Phones from "./components/Phones/Phones";
import Priceoptions from "./components/PriceOptions/Priceoptions";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <MyNav></MyNav>
      {/* <Navbar></Navbar> */}
      <h1>Price Options</h1>
      <Priceoptions></Priceoptions>

      <Linechart></Linechart>
      <Phones></Phones>
    </>
  );
}

export default App;
