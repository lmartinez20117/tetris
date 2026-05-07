let canvas;
let ctx;
let FPS = 50;

let peça;
let retras = 50;
let contador = 0;
let puntos = 0;

let ampleCanvas = 400;
let altCanvas = 640;

let ampleTaulell = 10;
let altTaulell = 20;

let amplef = 40;
let altf = 40;

const canço = new Audio("./musica/fondo.mp3")
const sonido1 = new Audio("./musica/sonido1.mp3")
const sonido2 =new Audio("./musica/sonido2.mp3")

let taulell = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let peçaGrafic = [
    [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0]
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0]
        ]
    ], [
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 2, 2, 0],
            [0, 2, 2, 0],
            [0, 0, 0, 0],
        ]
    ], [
        [
            [3, 0, 0, 0],
            [3, 3, 3, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 3, 3, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 3, 3, 3],
            [0, 0, 0, 3],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 3, 0],
            [0, 0, 3, 0],
            [0, 3, 3, 0],
        ]
    ], [
        [
            [0, 4, 0, 0],
            [4, 4, 4, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 4, 0, 0],
            [0, 4, 4, 0],
            [0, 4, 0, 0],
        ], [
            [0, 0, 0, 0],
            [4, 4, 4, 0],
            [0, 4, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 4, 0, 0],
            [4, 4, 0, 0],
            [0, 4, 0, 0],
        ],
    ], [
        [
            [0, 5, 5, 0],
            [5, 5, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 5, 0, 0],
            [0, 5, 5, 0],
            [0, 0, 5, 0],
            [0, 0, 0, 0],
        ], [
            [0, 5, 5, 0],
            [0, 0, 5, 5],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 5, 0],
            [0, 5, 5, 0],
            [0, 5, 0, 0],
            [0, 0, 0, 0],
        ],
    ], [
        [
            [0, 0, 0, 0],
            [0, 6, 0, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 6, 6, 0],
            [0, 0, 6, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 0, 6, 0],
            [0, 6, 6, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 6, 6, 0],
            [0, 6, 0, 0],
            [0, 0, 0, 0],
        ],
    ], [
        [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 7, 0],
            [0, 7, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 7, 0],
            [0, 7, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 7, 0],
            [0, 7, 0, 0],
        ], [
            [0, 0, 0, 0],
            [0, 7, 0, 0],
            [7, 7, 7, 0],
            [0, 7, 0, 0],
        ],
    ], [
        [
            [0, 8, 8, 0],
            [0, 8, 8, 0],
            [0, 8, 8, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [8, 8, 8, 8],
            [8, 8, 8, 8],
            [0, 0, 0, 0],
            
        ], [
            [0, 8, 8, 0],
            [0, 8, 8, 0],
            [0, 8, 8, 0],
            [0, 0, 0, 0],
        ], [
            [0, 0, 0, 0],
            [8, 8, 8, 8],
            [8, 8, 8, 8],
            [0, 0, 0, 0],
        ],
    ]
]

let obPeça = function () {

    this.x = 0;
    this.y = 0;


    this.angle = 0;
    this.tipo = 0;

    this.fila = function(){
        let filafeta = false;

        for(py=4;py<altTaulell; py++){
            filafeta = true;
            for(let px=1; px<=ampleTaulell; px++){
                if(taulell[py][px]==0){
                    filafeta=false;
                }
            }
            if(filafeta){
                puntos++
                sonido1.play();
                if(puntos%3==0){
                    retras = retras-5;
                }
                console.log(retras)
                for(let moverfila = py; moverfila > 0; moverfila --){
                    for(let px=1; px <=ampleTaulell; px++){
                        taulell[moverfila][px]=0
                        if(taulell[moverfila-1][px]!=0){
                            taulell[moverfila][px]=taulell[moverfila-1][px]
                        }
                    }
                }
                for(let y = altTaulell; y>0; y--){
                    for(let x=1; x<=ampleTaulell; x++){
                        if(taulell[y][x] == 0){
                            for(let yN=y; yN>0; yN--){
                                taulell[y][x] = taulell [yN-1][x]
                            }
                        }
                    }
                }
            }
        }
    }

    this.nova = function(){
        this.tipo = Math.floor(Math.random()*8);
        this.x = 4
        this.y = 0
    }

    this.gameOver = function(){
        let perdut = false;
        for(px=1; px<=ampleTaulell; px++){
            if(taulell[3][px]!=0){
                perdut = true;
            }
        }
        return perdut;
    }
    this.fixaPeça = function(){
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (peçaGrafic[this.tipo][this.angle][py][px] != 0) {
                    taulell[this.y+py][this.x+px] = peçaGrafic[this.tipo][this.angle][py][px]
                }
            }
        }
    }
    
    this.dibuixa = function () {
        for (let py = 0; py < 4; py++) {
            for (let px = 0; px < 4; px++) {
                if (peçaGrafic[this.tipo][this.angle][py][px] != 0) {
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 1) {
                        ctx.fillStyle = '#9dffff';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 2) {
                        ctx.fillStyle = '#6dacff';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 3) {
                        ctx.fillStyle = '#fc90db';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 4) {
                        ctx.fillStyle = '#ffdb67';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 5) {
                        ctx.fillStyle = '#c0fd7a';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 6) {
                        ctx.fillStyle = '#ff6f6f';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 7) {
                        ctx.fillStyle = '#ff9e43';
                    }
                    if (peçaGrafic[this.tipo][this.angle][py][px] == 8) {
                        ctx.fillStyle = '#cd78ff';
                    }
                    ctx.fillRect((this.x + px-1) * amplef,(this.y + py-4) * altf,amplef,altf)
                }
            }
        }
    }

    this.caer = function(){
        if(contador < retras){
            contador++
        }else{
            if(this.colisio(this.angle,this.y+1,this.x)==false){
                this.y++
                contador=0;
            }else{
                this.fixaPeça();
                this.fila();
                if(this.gameOver()){
                    document.location.reload();
                }
                this.nova();
            }
        }
       
    }

    this.rotar = function(){

        let angleNou = this.angle
        if(angleNou < 3){
            angleNou++
        }else{
            angleNou = 0
        }
        if(this.colisio(angleNou,this.y,this.x)==false){
            this.angle = angleNou
        }
        sonido2.play();

    }

    this.colisio = function(angleN, yN, xN){
        let resultat = false;

        for(py=0; py<4; py++){
            for(px=0; px<4; px++){
                if(peçaGrafic[this.tipo][angleN][py][px]!=0){
                    if(taulell[yN+py][xN+px]!=0){
                        resultat = true;
                    }
                }
            }
        }

        return resultat;
    }

    this.abajo = function(){
        if(this.colisio(this.angle,this.y+1,this.x)==false){
            this.y++
        }
    }

    this.der = function(){
        if(this.colisio(this.angle,this.y,this.x+1)==false){
            this.x++
        }
    }

    this.izq = function(){
        if(this.colisio(this.angle,this.y,this.x-1)==false){
            this.x--
        }
    }
    this.nova()
 
}

function taulelldibuixa() {
    for (let py = 0; py <= altTaulell; py++) {
        for (let px = 0; px <= ampleTaulell; px++) {
            if (taulell[py][px] != 0) {

                    ctx.fillStyle = '#fff45c';
        

                 ctx.fillRect((px-1) * amplef, (py-4) * altf, amplef, altf)
            }

           
        }
    }
}

function inicialitzaTeclat() {
    document.addEventListener('keydown', function (tecla) {
        if (tecla.key == "ArrowUp") {
            peça.rotar()
        }
        if (tecla.key == "ArrowDown") {
            peça.abajo()
        }
        if (tecla.key == "ArrowLeft") {
            peça.izq()
        }
        if (tecla.key == "ArrowRight") {
           peça.der()
        }
    })
}
function pintarPunts() {
    ctx.font = "24px serif"
    ctx.fillStyle = '#000000';
    ctx.fillText("Score: "+puntos, 10, 50);
}

function inicia() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    canvas.style.width = ampleCanvas;
    canvas.style.height = altCanvas;

    peça = new obPeça();

    setTimeout(function(){
        canço.play();
    },2000)
    

    inicialitzaTeclat()

    setInterval(function () {
        principal()
    }, 1000 / FPS)
}

function principal() {
    borrarCanvas()
    taulelldibuixa()
    peça.caer()
    peça.dibuixa()
    pintarPunts();

}

function borrarCanvas() {
    canvas.width = ampleCanvas
    canvas.height = altCanvas
}