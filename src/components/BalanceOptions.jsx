import { useRef } from "react";

function BalanceOptions({setEditData, account, msg}){

  const addbalance = useRef(0);
    const plus = () => {
      const pinigelis = parseFloat(addbalance.current.value);
        const newbalancePlus = account.Balansas + pinigelis;
if(pinigelis<=0 || isNaN(pinigelis)){
  msg ('Įvesta reikšmė yra netinkama. :)' )
  msg ('*Priimami tik teigiami skaičiai didesni už 0 .' )
      }else if (pinigelis% pinigelis.toFixed(2) !== 0){
        msg ('Minimalus pinigų sumos vienetas 0,01 :)' )
      }else{
        setEditData({...account, Balansas: newbalancePlus});
        addbalance.current.value = null; }
      };
     

      
      const minus = () => { 
        const pinigelis = parseFloat(addbalance.current.value);
        const newbalanceMinus = account.Balansas - pinigelis; 
        if (pinigelis<=0 || isNaN(pinigelis)){
          msg ('Įvesta reikšmė yra netinkama. :)' )
          msg ('*Priimami tik teigiami skaičiai didesni už 0 .' )
        }else if (pinigelis% pinigelis.toFixed(2) !== 0){
          msg ('Minimalus pinigų sumos vienetas 0,01 :)' )
        }else if(newbalanceMinus<0){
        msg ('Balanse nepakanka pinigų, Sorriukas :)' )
      }else if(newbalanceMinus>=0){
        setEditData({...account, Balansas: newbalanceMinus});
        addbalance.current.value = null;
      }
      };
      

    return(<>  
     <input ref={addbalance} className=' money lightgrey' placeholder='Pinigų Suma (Eur)'  type="text" name="" id="ebalansas" />
     
     <br></br>
    <button onClick={plus} id='eprideti' className='btn prideti'>Pridėti</button>
    <button onClick={minus} id='eatimti' className='btn atimti'>Atimti</button> <br />
   </>)
}
export {BalanceOptions};