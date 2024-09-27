

export default function InputItem({nombre, setNombre})
{
    return(
      
        <input className="w-100 in" type="text"  placeholder="Ingrese Producto"
        value={nombre}
        onChange={(e) => setNombre (e.target.value)}
        />
      
        
    );
    
}