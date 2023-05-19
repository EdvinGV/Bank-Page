import { useState, useRef, useEffect } from "react";

function AccOptions({ deleteModalData, setDeleteModalData, setDeleteData, account, msg }) {

    
const istrinti = () => {
   if (account.Balansas>0){msg ('Sąskaitoje yra lėšų. Ištrinti negalima.' )}else{  
setDeleteData(account )};
};

return (
<>
<button  onClick={istrinti} id="eistrinti" className="btn istrinti">
Ištrinti Paskyrą
</button>
</>
);
}

export { AccOptions };