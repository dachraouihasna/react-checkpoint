import logo from './logo.svg';
import './App.css';
import { profile, product } from './Data';
import Profile from './compnent/Profile';
import Product from './compnent/ProductCard';
import NavBar from './compnent/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Profile profile={profile} />
      <Product product={product}/>
   </div>
  );
}

export default App;
