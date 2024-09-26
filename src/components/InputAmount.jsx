

export default function InputAmount({setCantidad, cantidad})
{
    return(
        
            <input class="w-100" type = "number"
            value={cantidad}
            onChange={(e)=> setCantidad(Number(e.target.value))}
            min="1" 
            />
       
        
    );
    
}