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
            <InputItem nombre = {nombre} setNombre={setNombre} />
            <BtnAdd onClick = {onAgregarProducto} disabled = {cantidad === 0} /> 
            <InputAmount setCantidad = {setCantidad} cantidad = {cantidad} />
        </div>
    
       
    )
    }