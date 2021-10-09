
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Pagerouter from './pages/Index';
import Signin from './pages/signin';
import Navbar from './components/Navbar/Index'
function App() {
  return (
   
   <BrowserRouter>
<Switch>
{/* <Navbar/> */}
<Route path='/' component={Pagerouter} exact />
<Route path='/signin'  component={Signin} exact   />
</Switch>

{/* <Pagerouter/> */}


    </BrowserRouter>
     
    
  );
}

export default App;
