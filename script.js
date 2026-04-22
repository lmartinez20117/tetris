let canvas;
let ctx;
let FPS = 50;

let peça;

let ampleCanvas = 400;
let altCanvas = 640;

let ampleTaulell = 10;
let altTaulell = 16;

let amplef = 40;
let altf = 40;

let taulell = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
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
            [3, 3, 3, 3],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 3, 3, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
            [0, 3, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [3, 3, 3, 3],
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

    this.colisio = function(angleN, yN, xN){
        let resultt = false
        for(py=0; py<4; py++) {
            for(px=0; px<4; px++){
                if(peçaGrafic[this.tipo][angleN][py][px]>0){
                    if (taulell[yN+py][xN+px]>0){
                        resultat = true;
                    }
                }
            }
        }
        return resultat;

    }
}
    this.x = 4;
    this.y = -4;

    this.retras = 50;
    this.c = 0;

    this.angle = 0;
    this.tipo = 3;
    this.nova = function(){
        this.tipo = Math.floor(Math.random()*8);
        this.x = 4
        this.y = -4
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
                    ctx.fillRect((this.x + px) * amplef, (this.y + py) * altf, amplef, altf)
                }
            }
        }
    }

this.caer = function(){
    if(this.c < this.retras){
        this.c++
    }else{
        if(this.colisio(this.angle, this.y+1, this.x) == false){
            this.y++
        }
        this.c = 0;
    }
    
}

    this.rotar = function(){
        this.angle++
        if(this.angle==4){
            this.angle=0;
        }
    }
    this.abaix = function(){
        this.y++
    }

    this.derecha = function(){
        this.x++
    }
    this.izquierda = function(){
        this.x--
    }
    this.nova()


function taulelldibuixa() {
    for (let y = 4; y < altTaulell+4; y++) {
        for (let x = 1; x < ampleTaulell+1; x++) {
            if (taulell[y][x] != 0) {
          
                    ctx.fillStyle = '#ffa42e';
        

                 ctx.fillRect((x-1) * amplef, (y-4) * altf, amplef, altf)
            }

           
        }
    }
}

function inicialitzaTeclat() {
    document.addEventListener('keydown', function (tecla) {
        if (tecla.key == 'ArrowUp') {
            peça.rotar()
        }
        if (tecla.key == 'ArrowDown') {
            peça.abaix()
        }
        if (tecla.key == 'ArrowLeft') {
            peça.izquierda()
        }
        if (tecla.key == 'ArrowRight') {
            peça.derecha()
        }
    })
}

function inicia() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    canvas.style.width = ampleCanvas;
    canvas.style.height = altCanvas;

    peça = new obPeça();
    

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

}

function borrarCanvas() {
    canvas.width = ampleCanvas
    canvas.height = altCanvas
}