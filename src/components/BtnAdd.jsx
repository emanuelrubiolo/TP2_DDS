

export default function BtnAdd({onClick, disabled})
{
    
    return(
        <div>
            <button class="btn btn-outline-primary w-100" onClick= {onClick} disabled = {disabled} > AGREGAR </button>
        </div>   
    );
    
}