import './App.css';
import AddItem from './components/AddItem.jsx';
import Cart from './components/Cart.jsx';
import { useState } from 'react';

function App() {
  const [listas, setListas] = useState([{ id: 1, name: 'Lista 1', items: [] }]);
  const [activeTab, setActiveTab] = useState(listas[0].id);

  const agregarLista = () => {
    const nuevaLista = {
      id: listas.length + 1,
      name: `Lista ${listas.length + 1}`,
      items: [],
    };
    setListas([...listas, nuevaLista]);
    setActiveTab(nuevaLista.id);
  };

  const eliminarLista = (id) => {
    const nuevasListas = listas.filter((lista) => lista.id !== id);
    setListas(nuevasListas);
    if (nuevasListas.length > 0) {
      setActiveTab(nuevasListas[0].id);
    } else {
      setActiveTab(null);
    }
  };

  const addItem = (listaId, nombre, cantidad) => {
    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? {
              ...lista,
              items: lista.items.some((item) => item.nombre === nombre)
                ? lista.items.map((item) =>
                    item.nombre === nombre
                      ? { ...item, cantidad: item.cantidad + cantidad }
                      : item
                  )
                : [...lista.items, { nombre, cantidad }],
            }
          : lista
      )
    );
  };

  const delItem = (listaId, nombre) => {
    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? { ...lista, items: lista.items.filter((item) => item.nombre !== nombre) }
          : lista
      )
    );
  };

  const updateAmount = (listaId, nombre, nuevaCantidad) => {
    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? {
              ...lista,
              items: lista.items.map((item) =>
                item.nombre === nombre
                  ? { ...item, cantidad: nuevaCantidad }
                  : item
              ),
            }
          : lista
      )
    );
  };

  const updateName = (listaId, nombreViejo, nombreNuevo) => {
    setListas((prevListas) =>
      prevListas.map((lista) =>
        lista.id === listaId
          ? {
              ...lista,
              items: lista.items.map((item) =>
                item.nombre === nombreViejo
                  ? { ...item, nombre: nombreNuevo }
                  : item
              ),
            }
          : lista
      )
    );
  };

  return (
    <div className="App container m-4">
      <button onClick={agregarLista} className="btn btn-primary mb-3 btnC">
        Nueva lista
      </button>

      {listas.length > 0 ? (
        <>
          
          <div className="tabs">
            {listas.map((lista) => (
              <button
                key={lista.id}
                className={`tab ${activeTab === lista.id ? 'active' : ''}` }
                onClick={() => setActiveTab(lista.id)}
              >
                {lista.name}
              </button>
            ))}
          </div>

          
          {listas.map((lista) => (
            <div
              key={lista.id}
              className={`tab-content ${activeTab === lista.id ? 'active' : ''}`}
            >
              <div className="card shadow p-3 mb-5 bg-transparent rounded">
              <div className="row">
                <div className="col-4 pe-5">
                  <AddItem
                    addItem={(nombre, cantidad) => addItem(lista.id, nombre, cantidad)}
                  />
                  <button
                    className="btn btn-danger mt-3 ms-1"
                    onClick={() => eliminarLista(lista.id)}
                  >
                    Eliminar {lista.name}
                  </button>
                </div>
                <div className="col ps-5">
                  <Cart
                    items={lista.items}
                    delItem={(nombre) => delItem(lista.id, nombre)}
                    updateAmount={(nombre, nuevaCantidad) =>
                      updateAmount(lista.id, nombre, nuevaCantidad)
                    }
                    updateName={(nombreViejo, nombreNuevo) =>
                      updateName(lista.id, nombreViejo, nombreNuevo)
                    }
                  />
                  
                </div>
              </div>
            </div>
              </div>
              
          ))}
        </>
      ) : (
        <p>No hay listas disponibles.</p>
      )}
    </div>
  );
}

export default App;
