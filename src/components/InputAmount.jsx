

export default function InputAmount({setCantidad, cantidad})
{
    return(
        
            <input type = "number"
            value={cantidad}
            onChange={(e)=> setCantidad(Number(e.target.value))}
            min="1" 
            />
       
        
    );
    
}