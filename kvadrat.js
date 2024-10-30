const knopka = document.querySelector("#knop");

knopka.addEventListener("click", kvadrat);

function kvadrat() {

    if (document.querySelector(".createbox2")) {
        document.querySelector(".createbox2").remove();
        knopka.value = "создать квадрат";
    } else if (document.querySelector(".createbox")) {
        document.querySelector(".createbox").className = "createbox2";
        knopka.value = "удалить квадрат";
    } else {
        const newbox = document.createElement("div");
        newbox.className = "createbox";
        knopka.value = "увеличить квадрат";
        document.body.append(newbox);
    }
}












// function createbox() {
//     const deletebox = document.querySelector(".createbox");
//     const bigbox = document.querySelector("createbox2")
//     if (deletebox) {
//         deletebox.remove();
//         knopka.value = "создать квадрат";  
//     } else {
//         const newbox = document.createElement("div");
//         newbox.className = "createbox";
//         document.body.append(newbox);
//         knopka.value = "увеличить квавдрат";
//     }
//     }






