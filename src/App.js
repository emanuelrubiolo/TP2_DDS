import './App.css';
import AddItem from './components/AddItem.jsx';
import Cart from './components/Cart.jsx';
import { useState } from 'react';


function App() {

  const [items, setItems]= useState([]);

  const addItem = (nombre, cantidad) => 
  {
    const existingItem = items.find((item) => item.nombre === nombre);
    
    if(existingItem){
      setItems(
        items.map((item) => 
        item.nombre === nombre
      ? {...item, cantidad: item.cantidad + cantidad}
      : item)
      );
      
    } else {
      setItems([...items, {nombre, cantidad}])
    }

    }

  const delItem = (nombre) =>
  {
    setItems(items.filter((item) => item.nombre !== nombre))
  }

  const updateAmount = (nombre, nuevaCantidad) => {
    const newItems = items.map((item) => 
    item.nombre === nombre
    ? {... item, cantidad: nuevaCantidad}
    : item
  );
  setItems(newItems);
  }

  const updateName = (nombreViejo, nombreNuevo) =>{
    const nuevosItems = items.map((item) =>
    item.nombre===nombreViejo
    ? {...item, nombre: nombreNuevo}
    : item
  )
  setItems(nuevosItems);
  }

  return (
    
    <div className="App">
      <AddItem addItem={addItem}/>
      <Cart items={items} delItem={delItem}
      updateAmount={updateAmount}
      updateName={updateName}/>
    </div>
  );
}

export default App;