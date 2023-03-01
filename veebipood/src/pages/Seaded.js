import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// tumesinine - JS liigitusega: const, function
//              v22rtus, millel pole jutum2rke: true, false, null, undefined
//              HTML: tag    img, input, div, button
// sinine - muutuja, mida muudetakse ja kasutatakse HTML-s: kogus, sonum, laigitud, inputLuger, keel, viide
// helesinine - JS sissekirjutatud muutuja (mille kaudu saab funktsioone teha)
//              localStorage (.getItem, .setItem), console (.log) JSON (.stringify, .parse)
//              HTML sissekirjutatud tagi omadused    src='', className='', onClick={}, alt='', type=''
// kollane - k6ik funktsioonid
// oranz - jutum2rkide v22rtused
// valge - igasugused m2rgid
// sulud: loogelised, tavalised, kandilised --- on kollased, lillad, sinised
//        visual studio code-s on sisseehitatud, et samat v2rvi sulg paneb kinni sama v2rvi sulu
//         {{{{{}}}}}
// kollane, lilla, sinine, kollane, lilla, sinine, kollane, lilla, sinine
// tumeroheline - kommentaar

function Seaded() {
    const [keel, uuendaKeel] = useState(localStorage.getItem('keel'));
    const emailViide = useRef();
    const telefonViide = useRef();
    const aadressViide = useRef();
 
    const muudaKeelEst = () => {
        uuendaKeel('est');
        localStorage.setItem('keel','est');
    }

    const muudaKeelEng = () => {
        uuendaKeel('eng');
        localStorage.setItem('keel','eng');
    }

    const muudaKeelRus = () => {
        uuendaKeel('rus');
        localStorage.setItem('keel','rus');
    }

    const salvestaEmail = () => {
        localStorage.setItem('email', emailViide.current.value);
        if (emailViide.current.value.includes('@') === false) {
            toast.error('Kontrolli e-mail');
        } else {
            toast.success("Email salvestatud!")
        }
    }

    // js check if string is number only
    // stackoverflow
    // regex (regular expression --- regulaaravaldis)
    const salvestaTelefon = () => {
       localStorage.setItem('telefon', telefonViide.current.value);
       if (/^\d+$/.test(telefonViide.current.value) === false) {
        toast.error('Telefoni number ei koosne ainult numbritest');
       } else {
        toast.success("Telefon salvestatud!")
       } 
    }

    const salvestaAadress = () => {
        // salvestab 2ra brauseri vahem2llu, ainult sinu arvutis, selles brauseris, sellel veebilehel
        localStorage.setItem('aadress', aadressViide.current.value)
        if (aadressViide.current.value[0] === aadressViide.current.value[0].toLowerCase()) {
            toast.error('Aadress kirjuta suure algustahega');
        } else {
            toast.success("Aadress salvestatud!")
        }
    }

  return (
    <div>
        <label>E-mail</label>
        <input ref={emailViide} type='text' />
        <button onClick={salvestaEmail}>Sisesta</button>
        <br />
        <label>Telefoninumber</label>
        <input ref={telefonViide} type='text' />
        <button onClick={salvestaTelefon}>Sisesta</button>
        <br />
        <label>Aadress</label>
        <input ref={aadressViide} type='text' />
        <button onClick={salvestaAadress}>Sisesta</button>
        <br /><br />
        <button onClick={muudaKeelEst}>Eesti keelseks</button>
        <button onClick={muudaKeelEng}>Inglise keelseks</button>
        <button onClick={muudaKeelRus}>Vene keelseks</button>
        { keel === 'est' && <div>Leht on eesti keelne</div>}
        { keel === 'eng' && <div>Page is in English</div>}
        { keel === 'rus' && <div>Pycckij Rsok</div>}
        <ToastContainer
            position="bottom-right"
            theme="dark"
            />
    </div>
  )
}

export default Seaded;