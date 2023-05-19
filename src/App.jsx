
import './App.scss';
import { Bankas } from './Eg-Bankas';
import './index.css';
import { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddNewAcc } from './components/AddNewAccount';
import { ListOfAcc } from './components/ListOfAccounts';
import { BalanceOptions } from './components/BalanceOptions';
import { AccOptions } from './components/AccountOptions';
import logo from './bank-logo.png';
import { crudCreate,crudRead, crudDelete,editCrud } from './functions/localStoragecrud';
const KEY = 'egbankas'





function App() {
  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [sort, setSort] = useState('default');
  
    //R read
    useEffect(_ => {
      setAccounts(crudRead(KEY));
    }, [listUpdate]);
  
  
    //C create
    useEffect(_ => {
      if (null === createData) {
        return;
      }
      crudCreate(KEY, createData);
      setListUpdate(Date.now());
    }, [createData]);
    
  //U update

  useEffect(_ => {
    if (null === editData) {
        return;
    }
            crudEdit(KEY, editData, editData.id);
            setListUpdate(Date.now());
}, [editData]);

  //D deleate
  useEffect(_ => {
    if (null === deleteData) {
      return;
    }
    crudDelete(KEY, deleteData.id);
    setListUpdate(Date.now());
  }, [deleteData]);
//Rusiavimas
  useEffect(() => {
    if (sort === 'default') {
      setAccounts(c => [...c].sort((a, b) => a.row - b.row)); // rusiavimas
    } else if (sort === 'asc') {
      setAccounts(c => [...c].sort((a, b) => a.Surname.localeCompare(b.Surname))); // Ascending, nuo A iki Z
    } else {
      setAccounts(c => [...c].sort((b, a) => a.Surname.localeCompare(b.Surname))); // Descending, nuo Z iki A
    }

  }, [sort]);

  const doSort = _ => {
    setSort(s => {
      switch (s) {
        case 'default': return 'asc';
        case 'asc': return 'dsc';
        default: return 'default'
      }
    });
  }
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
  
  <AddNewAcc setCreateData={setCreateData} />



</div>





<div className='right_column column'>

<h3 className='participants'>Sąskaitų Sąrašas</h3>
<ListOfAcc  accounts={accounts} setDeleteData={setDeleteData} setEditData={setEditData } 
        />
        
</div>

</div>

</section>





        
       
        
  





  
      </header>
    </div>
  );
}

export default App;
