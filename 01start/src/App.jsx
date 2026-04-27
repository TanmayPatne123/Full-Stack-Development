
import Header from './components/header/Header';
import "./App.css"
// import Counter from './components/counter/Counter';
// import ImageComp from './components/Imagetask/ImageComp';
import Navbar from './components/nav/Navbar';
// import Home from './components/home/Home';
// import {Route,Routes} from "react-router-dom"
// import Products from './components/product/Products';
// import Electronics from "./components/product/categories/electronics/Electronics";
// import Jewelery from "./components/product/categories/jewelery/Jewelery";
// import MensClo from './components/product/categories/mensC/MensClo';
// import WomenClo from './components/product/categories/womensC/WomenClo';
// import PageNotFound from './components/pagenotfound/PageNotFound';
// import AllProducts from './components/allproducts/AllProducts';
// import Username from './components/user-names/Username';
// import A from './components/parent-child/A';
// import HomeContextApi from './components/context-api/HomeContextApi';
import Counter from './components/reducer/Counter';
import Name from './redux/compoents/Name';
import Details from './redux/compoents/Details';

function App() 
{
  return (
    <div className="app">
      <Navbar/>
      <Name/>
      <hr></hr>
      <Details/>
      {/* <Counter/> */}
      {/* <A/> */}
      {/* <HomeContextApi/> */}
      {/* <Routes>
      <Route path={"/"} element={<Home/>}/>
      <Route path={"/products"} element={<Products/>}>
      <Route path={"electronics"} element={<Electronics/>}/>
      <Route path={"jewelery"} element={<Jewelery/>}/>
      <Route path={"mensc"} element={<MensClo/>}/>
      <Route path={"womenc"} element={<WomenClo/>}/>
      </Route>
      <Route path={"/allproducts"} element={<AllProducts/>}/>
      <Route path={"/counter"} element={<Counter/>}/>
      <Route path={"/username"} element={<Username/>}/>
      <Route path={"/imageComp"} element={<ImageComp/>}/>
      <Route path={"*"} element={<PageNotFound/>}/>
      </Routes>   */}
    </div>
  );
}  

export default App
