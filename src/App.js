import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Cards from './Components/Cards';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
     <ItemCount/>
      <NavbarComp/>
      <Cards/>
 
    </div>
  );
}

export default App;
