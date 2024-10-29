const knopka = document.querySelector("input");

knopka.onclick = createbox;

function createbox() {
    const deletebox = document.querySelector(".createbox");
    const piizda = document.querySelector(".pizda")
    if (deletebox) {
        deletebox.remove(), piizda.remove();
    } else {
        const newbox = document.createElement("div");
        newbox.className = "createbox";
        document.body.append(newbox); 
        const pizda = document.createElement("div");
        pizda.className = "pizda";
        pizda.innerHTML = "как же я заебался делать этот ебучий квадрат)"
        document.body.append(pizda); 
    }
}
