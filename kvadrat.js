const knopka = document.querySelector("input");

knopka.onclick = createbox;

function createbox() {
    const deletebox = document.querySelector(".createbox");
    const newbox = document.createElement("div");
    if (deletebox) {
        deletebox.remove();
    } else {
        newbox.className = "createbox";
        document.body.append(newbox);
    }
}

const knopka = document.querySelector("input");


knopka.onclick = createbox;

function createbox() { 

    const newbox = document.createElement("div");
    const deletebox = newbox.querySelector(".createbox")
    
    if (deletebox) {
        newbox.remove();
        } else {
            newbox.className = "createbox";
            document.body.append(newbox);
        }
}