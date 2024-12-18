function laheta(){
    let nimi = document.getElementById("nimi").value;
    let sposti = document.getElementById("sposti").value;
    let puhnumero = document.getElementById("puhnumero").value;


    document.getElementById("vastaus").innerHTML="Kiitos viestistä, " + nimi + "<br> Sähköpostisi: " + sposti + "<br> Puhelinnumerosi: " + puhnumero;
}