
import './App.scss';
import { Bankas } from './Eg-Bankas';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddNewAcc } from './components/AddNewAccount';
import { ListOfAcc } from './components/ListOfAccounts';
import { BalanceOptions } from './components/BalanceOptions';
import { AccOptions } from './components/AccountOptions';
import logo from './bank-logo.png';
function App() {
  return (
    <div >
      <header className="App-header">

      <section className="bank_main">

<div className="logo ">
<img  style={{width:150, margin:20, marginLeft:0}} src={logo} alt="logo"></img>
</div>


<div className='main-window'>

<div className='left_column column'>
  
        <h3 className='title'>Naujos Paskyros Duomenys</h3>
        
        <AddNewAcc/>

<div className='row'>
        <h3 className='title'>Balanso Koregavimas</h3>
        <BalanceOptions/>
</div>

</div>






<div className='right_column column'>
<h3 className='participants'>Sąskaitų Sąrašas</h3>
<ListOfAcc/>
</div>

</div>

</section>





        
       
        
  <Bankas/>





  
      </header>
    </div>
  );
}

export default App;
