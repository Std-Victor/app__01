import React, { useState } from 'react';

function FComp() {
    const [notes, setNotes] = useState([{DataBase:19}, {ReactJs : 18}])
    const data = notes.map(n => Object.entries(n))
    return (
      <div>
        <ul>
          {data.map(([[k,v]])=> <li key={k}>{k} : {v}</li>)}
        </ul>
        <ul>
          {notes.map(note => Object.entries(note).map(([k,v])=> <li key={k}>{k}:{v}</li>))}
        </ul>
      </div>
    );
}

export default FComp;
