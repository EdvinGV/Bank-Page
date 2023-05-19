import { AccOptions } from "./AccountOptions";
import { BalanceOptions } from "./BalanceOptions";

function ListOfAcc({accounts, setDeleteData, setEditData, msg}){
    return(<>
    <table className="table">
  <thead>
    <tr className="rightrow">
      <th scope="col">Vardas</th>
      <th scope="col">Pavardė</th>
      <th scope="col">Balansas</th>
      <th id="asmuo" scope="col">Opcijos</th>
    </tr>
  </thead>
  <tbody>
  {accounts && accounts.length ? accounts.filter(c => Object.keys(c).length > 0).map(c => (
      <tr key={c.id} className="rightrow" id="asmuo">
        <td>{c.Vardas}</td>
        <td>{c.Pavarde}</td>
        <td>{c.Balansas}<span> €</span></td>
        <td>
          <BalanceOptions account={c} setEditData={setEditData} msg={msg}  />
          <AccOptions account={c} setDeleteData={setDeleteData} />
        </td>
      </tr>
    )) : null}
  </tbody>
</table>

    </>)
    
}
export {ListOfAcc};