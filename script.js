let but = document.getElementById("lesgo");
let discofloor = document.getElementById("disco");

but.addEventListener("click", function(){

    but.style.display = "none";

    document.getElementById("banger").play();



    window.setInterval(disco, 500);
    function disco() {

        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);

        let colors = ["red","orange", "yellow", "blue", "indigo", "purple", "pink", "cyan", "lime"];

        discofloor.style.backgroundColor = colors[x];
        discofloor.style.borderColor = colors[y];
        
    }

    window.setInterval(dancers, 500);

    let count = 0;

    function dancers() {

        

        let dancer = document.createElement("img");

        let shiny = Math.random();

        if(shiny <= 0.002) {
            dancer.src = "./shyperespe.gif";
            dancer.alt = "Shiny dancepeon !";
            console.log("Espeon n°" + count + " is a shiny !");
            dancer.style.opacity = 1;
        } else {
            dancer.src = "./hyperespe.gif";
            dancer.alt = "A happy dancepeon";
            dancer.style.opacity = Math.random();
        }

        dancer.style.position = "absolute";
        dancer.style.left = Math.random() * 92 + "%";
        dancer.style.top = Math.random() * 89 + "%";
        dancer.style.transform = "scale(" + Math.random() * 4 +")";

        let flip = Math.random();
        if (flip <= 0.5) {
            dancer.style.transform = "scaleX(-1)";
        }
        discofloor.appendChild(dancer);

        count++;

    }



});