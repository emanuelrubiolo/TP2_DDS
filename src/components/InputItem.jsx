

export default function InputItem({nombre, setNombre})
{
    return(
      
        <input type="text"  placeholder="Ingrese Producto"
        value={nombre}
        onChange={(e) => setNombre (e.target.value)}
        />
      
        
    );
    
}