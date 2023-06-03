import {Routes,Route} from "react-router-dom"
import { Home } from './pages/home/Home';
import { Hotel } from "./pages/hotel/Hotel";
import List  from "./pages/list/List";
import Login from "./pages/login/Login";
function App() {
  return (
  
     <Routes>
       <Route path='/' element={<Home/>} ></Route>
       <Route path='/hotels' element={<List/>} ></Route>
       <Route path='/hotels/:id' element={<Hotel/>} ></Route>
       <Route path='/login' element={<Login/>} ></Route>
     </Routes>

   
  );
}

export default App;
