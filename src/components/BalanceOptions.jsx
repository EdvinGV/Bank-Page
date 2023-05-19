import { useRef } from "react";

function BalanceOptions({setEditData, account}){

  const addbalance = useRef(0);
  
    const plus = () => {
      const pinigelis = parseFloat(addbalance.current.value);
        const newbalancePlus = account.Balansas + pinigelis;

          setEditData({...account, Balansas: newbalancePlus});
          addbalance.current.value = null;
      };
     
      const minus = () => { 
        const pinigelis = parseFloat(addbalance.current.value);
        const newbalanceMinus = account.Balansas - pinigelis; 
        if(newbalanceMinus>=0 ){
        setEditData({...account, Balansas: newbalanceMinus});
        addbalance.current.value = null;
      };
      };
      

    return(<>  
     <input ref={addbalance} className=' money lightgrey' placeholder='Pinigų Suma (Eur)'  type="text" name="" id="ebalansas" />
     
     <br></br>
    <button onClick={plus} id='eprideti' className='btn prideti'>Pridėti</button>
    <button onClick={minus} id='eatimti' className='btn atimti'>Atimti</button> <br />
   </>)
}
export {BalanceOptions};