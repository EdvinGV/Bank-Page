import logo from './bank-logo.png';
function Bankas (){

return (<> 



<section className="bank_main">

<div className="logo ">
<img  style={{width:150, margin:20, marginLeft:0}} src={logo} alt="logo"></img>
</div>


<div className='main-window'>

<div className='left_column column'>
  
        <h3 className='title'>Naujos Paskyros Duomenys</h3>
        
        <div className='row' >
                <input className='ivestis lightgrey ' placeholder='Vardas' type="text" name="" id="evardas" />
                <input className='ivestis grey' placeholder='Pavardė'  type="text" name="" id="epavarde" />
                <button id='esukurti' className='btn sukurti'>Sukurti</button>
        </div>

<div className='row'>
        <h3 className='title'>Balanso Koregavimas</h3>
        <input className='ivestis lightgrey' placeholder='Pinigų Suma (Eur)'  type="text" name="" id="ebalansas" />
        <button id='eprideti' className='btn prideti'>Pridėti</button>
        <button id='eatimti' className='btn atimti'>Atimti</button>
</div>
<h3 className='title'>Paskyros Šalinimas</h3>
<button id='eistrinti' className='btn istrinti'>Pašalinti Pasirinktą Paskyrą</button>

</div>






<div className='right_column column'>
<h3 className='participants'>Sąskaitų Sąrašas</h3>
<table class="table">
  <thead>
    <tr className='rightrow'>
      
    <th scope="col">Vardas</th>
      <th scope="col">Pavardė</th>
      <th scope="col">Balansas</th>
      <th scope="col">Statusas</th>
    </tr>
  </thead>
  <tbody>
    <tr className='rightrow'>
    <td>Mariukas</td>
      <td>Bedarbiukas</td>
      <td>0 Eu</td>
      <td>

      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
        
      </td>
    </tr>
  
    <tr className='rightrow'>
    <td>Mariukas</td>
      <td>Bedarbiukas</td>
      <td>0 Eu</td>
      <td>

      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
</div>
        
      </td>
    </tr>
   
  </tbody>
</table>
</div>
</div>

</section>


</>)
};

export {Bankas}