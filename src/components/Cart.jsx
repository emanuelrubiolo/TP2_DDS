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
           <label> carrito </label>
           <ul>
            {items.map((item,index) => (
                <li key={index}>

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
                     - Cantidad: {item.cantidad}
                    <button onClick={() => delItem(item.nombre)}>Eliminar</button>
                    <button onClick={() => sum1(item)}>+</button>
                    <button onClick={() => res1(item)}>-</button>

                </li>
            ))}
           </ul>
       </div> 
    );
}