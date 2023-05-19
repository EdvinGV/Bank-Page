import { useState, useRef, useEffect } from "react";

function AccOptions({ deleteModalData, setDeleteModalData, setDeleteData, account }) {

    
const istrinti = () => {
setDeleteData(account );
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