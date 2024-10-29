const knopka = document.querySelector("input");


knopka.onclick = createbox;

function createbox() { 
    const newbox = document.createElement("div");
    newbox.className = "createbox";
    document.body.append(newbox);
}
