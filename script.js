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

    window.setInterval(dancers, 1000);

    function dancers() {

        let dancer = document.createElement("img");
        dancer.src = "./hyperespe.gif";
        dancer.style.position = "absolute";
        dancer.style.left = Math.random() * 90 + "%";
        dancer.style.top = Math.random() * 87 + "%";
        dancer.style.transform = "scale(" + Math.random() * 5 +")";

        let flip = Math.random();
        if (flip <= 0.5) {
            dancer.style.transform = "scaleX(-1)";
        }
        dancer.style.opacity = Math.random();
        discofloor.appendChild(dancer);



    }



});