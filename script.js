let but = document.getElementById("lesgo");
let discofloor = document.getElementById("disco");

but.addEventListener("click", function(){

    but.style.display = "none";

    document.getElementById("banger").play();

    window.setInterval(disco, 500);
    function disco() {
        let picker = Math.random() * 10;
        if (picker <= 1) {
            discofloor.style.backgroundColor = "red";
        } else if ( picker <= 2) {
            discofloor.style.backgroundColor = "orange";
        } else if ( picker <= 3) {
            discofloor.style.backgroundColor = "yellow";
        } else if ( picker <= 4) {
            discofloor.style.backgroundColor = "green";
        } else if ( picker <= 5) {
            discofloor.style.backgroundColor = "blue";
        } else if ( picker <= 6) {
            discofloor.style.backgroundColor = "indigo";
        } else if ( picker <= 7) {
            discofloor.style.backgroundColor = "purple";
        } else if ( picker <= 8) {
            discofloor.style.backgroundColor = "pink";
        } else if ( picker <= 9) {
            discofloor.style.backgroundColor = "cyan";
        } else if ( picker <= 10) {
            discofloor.style.backgroundColor = "lime";
        }

        let picker2 = Math.random() * 10;
        if (picker2 <= 1) {
            discofloor.style.borderColor = "red";
        } else if ( picker2 <= 2) {
            discofloor.style.borderColor = "orange";
        } else if ( picker2 <= 3) {
            discofloor.style.borderColor = "yellow";
        } else if ( picker2 <= 4) {
            discofloor.style.borderColor = "green";
        } else if ( picker2 <= 5) {
            discofloor.style.borderColor = "blue";
        } else if ( picker2 <= 6) {
            discofloor.style.borderColor = "indigo";
        } else if ( picker2 <= 7) {
            discofloor.style.borderColor = "purple";
        } else if ( picker2 <= 8) {
            discofloor.style.borderColor = "pink";
        } else if ( picker2 <= 9) {
            discofloor.style.borderColor = "cyan";
        } else if ( picker2 <= 10) {
            discofloor.style.borderColor = "lime";
        }
    }

    window.setInterval(dancers, 1000);

    function dancers() {

        let dancer = document.createElement("img");
        dancer.src = "./hyperespe.gif";
        dancer.style.position = "absolute";
        dancer.style.left = Math.random() * 90 + "%";
        dancer.style.top = Math.random() * 90 + "%";
        dancer.style.transform = "scale(" + Math.random() * 5 +")";

        let flip = Math.random();
        if (flip <= 0.5) {
            dancer.style.transform = "scaleX(-1)";
        }
        dancer.style.opacity = Math.random();
        discofloor.appendChild(dancer);



    }



});