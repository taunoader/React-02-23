import { useState } from 'react';

function Kontakt() {
    const [aadress, maaraAadress] = useState('Tallinn');
    const [telefon, maaraTelefon] = useState('5512345');
    const [email, maaraEmail] = useState('bla@baa.com');
    const [ingliseKeelne, maaraIngliseKeelne] = useState('ei');

    const ingliseks = () => {
        maaraAadress('London')
        maaraTelefon('1231243242')
        maaraEmail('london@london.com')
        maaraIngliseKeelne('jah')
    }

    return (
        <div>
          <div>{aadress}</div>
          <div>{telefon}</div>
          <div>{email}</div>
          <button onClick={ingliseks}>Muuda inglise keelseks</button>
          { ingliseKeelne === 'jah' && <div>Leht on inglise keelne</div> }
        </div>
      );
}

export default Kontakt;