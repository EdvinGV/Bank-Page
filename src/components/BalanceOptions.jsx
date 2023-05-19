function BalanceOptions({setEditData, account}){


    const pinigelis = addbalance.current.value;
    const plus = () => {
        if (typeof pinigelis === 'number') {
          setEditData(account.balance + pinigelis);
        }
      };

      const minus = () => { 
        if (typeof pinigelis === 'number') {
          setEditData(account.balance - pinigelis);
        }
      };

    return(<>  
     <input ref={addbalance} className=' money lightgrey' placeholder='Pinigų Suma (Eur)'  type="text" name="" id="ebalansas" />
     const plus
     <br></br>
    <button onClick={plus} id='eprideti' className='btn prideti'>Pridėti</button>
    <button onClick={minus} id='eatimti' className='btn atimti'>Atimti</button> <br />
   </>)
}
export {BalanceOptions};