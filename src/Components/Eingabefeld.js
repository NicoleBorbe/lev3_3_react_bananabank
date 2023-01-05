import { useState } from "react";

const Banking = () => {

    let [eingabe, setEingabe] = useState();
    let [betrag, setBetrag] = useState(0);
    
    const einzahlen = () => {
        betrag += Number(eingabe);
        setBetrag(betrag);
        document.querySelector('#ausgabe').innerHTML = `${betrag}€`;
        document.getElementById("eingabefeld").value = "";
    }
    const auszahlen = () => {
        betrag -= Number(eingabe);
        setBetrag(betrag);
        document.querySelector('#ausgabe').innerHTML = `${betrag}€`;
        document.getElementById("eingabefeld").value = "";
    }
    return (
        <div>
            <form action="" className="konto">
                <h2>Dein Girokonto</h2>
                <h3 id="ausgabe" className="saldo">€</h3>
                <input type="text" name="" id="eingabefeld" placeholder="Gib einen Geldbetrag ein" required onChange={e => setEingabe(e.target.value)} className="geldbetrag" />
                <div>
                    <input type="button" value="Einzahlen" className="einzahlen" onClick={einzahlen} />
                    <input type="button" value="Auszahlen" className="auszahlen" onClick={auszahlen} />
                </div>
            </form>
        </div>
    );
}

export default Banking;