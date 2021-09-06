import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import Cards from './Components/Cards';
import ItemCount from './Components/ItemCount/ItemCount';
import ItemDetailContainer from './Components/ItemDeailContainer/ItemDetailContainer';
function App() {
  const onAdd =(count)=>{
    console.log(`la cantidad es : ${count}`)
    alert(`la cantidad es : ${count}`)    
        
}
  return (
    <div className="App">
   
      <NavbarComp/>
      <Cards/>
     <ItemDetailContainer/>
      <ItemCount initial={1} stock={25} onAdd={onAdd} />
    
    </div>
  );
}

export default App;
