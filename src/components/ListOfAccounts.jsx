import { AccOptions } from "./AccountOptions";

function ListOfAcc(){
    return(<>
    <table class="table">
      <thead>
        <tr className='rightrow'>
          
        <th scope="col">Vardas</th>
          <th scope="col">Pavardė</th>
          <th scope="col">Balansas</th>
          <th scope="col">Opcijos</th>
        </tr>
      </thead>
      <tbody>
        <tr className='rightrow'>
        <td>Mariukas</td>
          <td>Bedarbiukas</td>
          <td>0 Eu</td>
          <td>
    
        <AccOptions/>
            
          </td>
        </tr>
      
      
       
      </tbody>
    </table></>)
}
export {ListOfAcc};