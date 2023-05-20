import { v4 as uuidv4 } from 'uuid';
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
import { crudCreate, crudRead, crudDelete, crudEdit } from './functions/localStoragecrud';
import Messages from './components/Message';
const KEY = 'egbankas'





function App() {
  const [listUpdate, setListUpdate] = useState(Date.now());
  const [createData, setCreateData] = useState(null);
  const [accounts, setAccounts] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [sort, setSort] = useState('default');
  const [messages, setMessages] = useState([]);
  
  //R read
  useEffect(_ => {
    setAccounts(crudRead(KEY).map((c, i) => ({ ...c, row: i, show: true })));
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
      setAccounts(c => [...c].sort((a, b) => a.Pavarde.localeCompare(b.Pavarde))); // Ascending, nuo A iki Z
    } else {
      setAccounts(c => [...c].sort((b, a) => a.Pavarde.localeCompare(b.Pavarde))); // Descending, nuo Z iki A
    }

  }, [sort]);

  const doSort = _ => {
    setSort(s => {
      switch (s) {
        case 'default': return 'asc';
        case 'asc': return 'dsc';
        default: return 'default';
      }
    });
  }
  const msg = (text, type) => {
    const id = uuidv4();
    const message = {
      id,
      text,
      type,
    };
    setMessages((m) => [...m, message]);
    setTimeout((_) => setMessages((m) => m.filter((m) => m.id !== id)), 5000);

  };
  return (
    <div >
      <header className="App-header">

        <section className="bank_main">

          <div className="logo ">
            
            <a href="https://www.cvbankas.lt/mcdonald-s-restorano-darbuotojas-vilniuje-gedimino-pr-vilniuje/1-9527710"><img style={{ width: '300px', marginTop: 20, marginBottom: 20, cursor: 'pointer' }} src={logo} alt="logo"></img></a>
          </div>


          <div className='main-window'>


            <div className='left_column column'>

              <h3 className='title'>Naujos Paskyros Duomenys</h3>

              <AddNewAcc setCreateData={setCreateData} msg={msg} setAccounts={setAccounts} accounts={accounts}   />



            </div>





            <div className='right_column column'>

              <h3 className='participants'>Sąskaitų Sąrašas</h3>
              <ListOfAcc accounts={accounts} setDeleteData={setDeleteData} setEditData={setEditData} setSort={setSort} 
                  msg={msg} sort={sort} doSort={doSort} />

            </div>

          </div>
<Messages messages={messages}/>
        </section>















      </header>
      <Messages messages={messages} />
    </div>
  );
}

export default App;
