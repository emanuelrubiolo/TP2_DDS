

export default function InputItem({nombre, setNombre})
{
    return(
      
        <input class="w-100" type="text"  placeholder="Ingrese Producto"
        value={nombre}
        onChange={(e) => setNombre (e.target.value)}
        />
      
        
    );
    
}