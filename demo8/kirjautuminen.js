document.addEventListener("DOMContentLoaded", onkoKirjautunut);

function onkoKirjautunut(){
    document.getElementById("kirjaudu_ulos").style.display = "hide";
    if (localStorage.getItem("kirjautunut") === "kylla"){
        document.getElementById("tervetuloa_teksti").textContent += " " + localStorage.getItem("nimi");
        document.getElementById("kirjautumis_lomake").style.display = "none"
    }
}

function kirjaudu(){
    localStorage.setItem("nimi", document.getElementById("nimi").value);
    localStorage.setItem("kirjautunut", "kylla");
    document.getElementById("kirjaudu_ulos").style.display = "show";
}

function ulos(){
    localStorage.setItem("kirjautunut", "ei");
        localStorage.removeItem();
}