import { useState } from "react"
import InputItem from "./InputItem"
import BtnAdd from "./BtnAdd";
import InputAmount from "./InputAmount";

export default function AddItem({addItem}) 
{
    const[nombre, setNombre] = useState('');
    const[cantidad, setCantidad] = useState(1);
    
    const onAgregarProducto = () => {
        if (nombre.trim())
        {
            addItem(nombre,cantidad);
            setNombre('');
            setCantidad(1);
        }
    }

    return(
        
        <div>
            <div class="container-md p-1">
            <InputItem nombre = {nombre} setNombre={setNombre} />

            </div>
            
            <div class="container-md p-1">
            <InputAmount setCantidad = {setCantidad} cantidad = {cantidad} />

            </div>
            <div class="container-md p-1">
            
            <div>
            <button onClick = {onAgregarProducto} disabled = {cantidad === 0} class="btn btn-outline-primary w-100"  > AGREGAR </button>
            </div>
            </div>
        </div>
    
       
    )
    }

