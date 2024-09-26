import { useState } from "react";

export default function Cart({items, delItem, updateAmount, updateName})
{

    const [itemEdicion, setItemEdicion] = useState(null);
    const [nombreEditado, setNombreEditado] = useState('');

    const iniciarEdicion = (item)=>{
        setItemEdicion(item.nombre);
        setNombreEditado(item.nombre);
    }

    const guardarNombre = (e, item)=>{
        if(e.key === 'Enter' && nombreEditado.trim()){
            updateName(item.nombre, nombreEditado);
            setItemEdicion(null);
        }
    }

    const cancelarEdicion = () =>{
        setItemEdicion(null);
    }

    const sum1 =  (item)=>{
        const nuevaCantidad = item.cantidad + 1;
        updateAmount(item.nombre, nuevaCantidad);
    }
    const res1 =  (item)=>{
        const nuevaCantidad = item.cantidad - 1;
        if(nuevaCantidad >= 1){
            updateAmount(item.nombre, nuevaCantidad);
        }    
    }

    return(
       <div>
           <h2>Carrito</h2>
           <div class="container">
           
           <ul>
            {items.map((item,index) => (
                <li key={index}>
                    <div class="row m-1">

                   

                    {itemEdicion === item.nombre ? (
                        <input type = "text" 
                        value={nombreEditado}
                        onChange={(e)=> setNombreEditado(e.target.value)}
                        onKeyDown={(e)=> guardarNombre(e, item)}
                        onBlur={cancelarEdicion}
                        />
                    ) : (
                        <span
                        onDoubleClick={() => iniciarEdicion(item)}>{item.nombre}
                        </span>
                    )}
                    

                        <div class="col-3 py-1">
                        Cantidad: {item.cantidad}

                        </div>
                        
                            <div class="col-2">
                            <button class="btn btn-outline-primary btn-sm   asd" onClick={() => delItem(item.nombre)}>Eliminar</button>

                            </div>
                            <div class="col-2">
                            <button class="btn btn-outline-primary btn-sm" onClick={() => sum1(item)}>+</button>
                            <button class="btn btn-outline-primary btn-sm a" onClick={() => res1(item)}>-</button>
                            </div>
                            
                        
                    
                            </div>
                </li>
            ))}
           </ul>
           
           </div>
       </div> 
    );
}