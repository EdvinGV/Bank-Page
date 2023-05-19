import { useState, useRef, useEffect } from "react"


function AddNewAcc({ setCreateData }){

    const nameRef = useRef(null);
    const surnameRef = useRef(null);

    const save = _ => {

        const vardas = nameRef.current.value;
        const pavarde = surnameRef.current.value;
if (vardas.length && pavarde.length !==0){
        setCreateData({
            Vardas: vardas,
            Pavarde: pavarde,
            Balansas: 0
        });
    };
    }

return(
    <div className='row' >
    
<input ref={nameRef} className='ivestis lightgrey ' placeholder='Vardas' type="text" name="" id="evardas" />
<input  ref={surnameRef} className='ivestis grey' placeholder='Pavardė'  type="text" name="" id="epavarde" />
<button onClick={save}  id='esukurti' className='btn sukurti'>Sukurti</button>
</div>
)
}
export {AddNewAcc};