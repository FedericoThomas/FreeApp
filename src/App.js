import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}></Route>        
        </Routes>
      
      </BrowserRouter>
        
           
      
      
  
      
    </div>
  );
}

export default App;
