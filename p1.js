
function setup() {
    var canvas = document.getElementById('myCanvas');
    var slider = document.getElementById('slider');
    var slider2 = document.getElementById('slider2');
    slider.value = 0;
    slider2.value = 0;

    function draw() {
        var context = canvas.getContext('2d');
        canvas.width = canvas.width;
        var x = slider.value;
        var y = slider2.value;

        // Draw square
        function drawSquare() {
            context.beginPath();
            context.rect(x,50,150,150);
            context.fillStyle = "#459578";
            context.fill();

            context.save();
            context.translate(200,200);

            context.beginPath();
            context.rect(x,50,150,150);
            context.fillStyle= "rgba(181, 193, 245,.7)";
            context.fill();

        }
        // Draw word
        function drawWord() {
            context.strokeStyle = "black";
            context.lineWidth = "5";

            context.beginPath();
            // N
            context.moveTo(120,103);context.lineTo(120,30);context.lineTo(150,95);context.lineTo(150,25);
            // E
            context.moveTo(165,40);context.lineTo(165,100);context.lineTo(185,100);
                context.moveTo(165,70);context.lineTo(177,70);context.moveTo(163,42);context.lineTo(185,42);
            // A
            context.moveTo(190,105);context.lineTo(208,45);context.lineTo(225,105);
                context.moveTo(192,75);context.lineTo(225,75);
            // T
            context.moveTo(247,104);context.lineTo(247,32);
                context.moveTo(225,37);context.lineTo(270,37);
            context.stroke();

            if (x >= 100 && x <200 ) {
                context.save();
                context.translate(-300,-100);
                context.lineWidth = "4";
                context.beginPath();
                // D
                context.moveTo(103,100);context.lineTo(130,100);context.lineTo(140,106);context.lineTo(140,150);context.lineTo(130,155);context.lineTo(105,155);context.lineTo(105,100);
                // R
                context.moveTo(150,100);context.lineTo(150,155);context.moveTo(150,102);context.lineTo(175,102);context.lineTo(175,125);context.lineTo(154,125);context.lineTo(178,155);
                // I
                context.moveTo(190,97);context.lineTo(190,157);
                // P
                context.moveTo(205,97);context.lineTo(205,157);context.moveTo(205,99);context.lineTo(230,99);context.lineTo(230,122);context.lineTo(205,122);

                context.stroke();
                context.restore();
            }

            if (x >= 220) {
                context.save();
                context.translate(0,-300);
                context.lineWidth = "4";
                context.beginPath();
                // D
                context.moveTo(103,100);context.lineTo(130,100);context.lineTo(140,106);context.lineTo(140,150);context.lineTo(130,155);context.lineTo(105,155);context.lineTo(105,100);
                // R
                context.moveTo(150,100);context.lineTo(150,155);context.moveTo(150,102);context.lineTo(175,102);context.lineTo(175,125);context.lineTo(154,125);context.lineTo(178,155);
                // O
                context.moveTo(190,103);context.lineTo(190,155);context.lineTo(192,157);context.lineTo(210,157);context.lineTo(212,155);context.lineTo(212,107);context.lineTo(210,103);context.lineTo(192,103);context.lineTo(190,105);
                // P
                context.moveTo(225,97);context.lineTo(225,157);context.moveTo(225,99);context.lineTo(248,99);context.lineTo(248,122);context.lineTo(225,122);

                context.stroke();
            }


        }

        // Draw triangles
        function drawTriangles() {
            context.beginPath();

            context.save();
            context.translate(-100, -100);

            context.moveTo(0, 0);
            context.lineTo(125, 0);
            context.lineTo(0, 125);
            context.fillStyle = "rgba(159, 236, 245)";
            context.fill();
        
            // Stroked triangle
            context.beginPath();
            context.lineWidth = "2";
            context.moveTo(125, 125);
            context.lineTo(125, 25);
            context.lineTo(25, 125);
            context.closePath();
            context.stroke();

            // Inner triangle
            context.beginPath();
            context.lineWidth = "3";
            context.strokeStyle = "#326da8";
            context.moveTo(110,110);
            context.lineTo(110,60);
            context.lineTo(60,110);
            context.closePath();
            context.stroke();

            context.restore();
        }

        function drawCircles() {
            context.restore();
            context.translate(325,250);

            var i;
            var lineWidth = 8;
            var color1 = "rgb(255, 232, 117)";
            var color2 = "rgb(163,214,245)";

            for (i = 0; i < 6; ++i) {
                context.beginPath();
                if (i % 2 == 0) {
                    context.strokeStyle = color1;
                }
                else {
                    context.strokeStyle = color2;
                }
                context.lineWidth = lineWidth - i;
                context.arc(200, -125, 50 * i/2, 0, 2 * Math.PI);
                context.stroke();
            }
        }
        function drawDrops() {
            context.save();
            context.translate(0,-150)
            var xpos = [-30, 30, 300, 100, -50, -150, 320, 180, 400];
            var ypos = [0,0,0,0,0,0,0,0,0];
            for (i = 0; i < 10; i++) {
                context.beginPath();
                if (i % 2 == 0) {
                    context.fillStyle = "rgba(252, 56, 75, .7)";
                }
                else {
                    context.fillStyle = "rgba(247, 67, 145, .7)";
                }
                context.moveTo(xpos[i] - 20, y+ypos[i]);
                context.lineTo(xpos[i], y+ypos[i] - 50);
                context.lineTo(xpos[i] + 20, y+ypos[i]);
                context.arc(xpos[i], y+ypos[i], 20, 0, Math.PI);
                context.closePath();
                context.fill();
            }
            context.restore();
        }

        drawSquare();
        drawTriangles();
        drawDrops();
        drawCircles();
        drawWord();
        
        context.restore();
    }


    slider.addEventListener("input", draw);
    slider2.addEventListener("input", draw)
    draw();
}

window.onload = setup;
