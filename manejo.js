const sel1CantProd  = document.querySelector ("#sel1");
const sel2CantPerm  = document.querySelector ("#sel2");
const sel3Colores   = document.querySelector ("#sel3");
const selParrCant   = document.querySelector ("#sel-parr1");
const selParrPerm   = document.querySelector ("#sel-parr2");
const selParrClrs  = document.querySelector ("#sel-parr3");


const imgP1         = "https://imagenes.eldebate.com/files/vertical_composte_image/files/fp/uploads/2022/07/22/62d9d237c78cd.r_d.399-713.jpeg";
const imgP2         = "https://www.portugalvineyards.com/60999-large_default/barca-velha-red-1983.jpg";
const imgP3         = "https://www.winespiritus.com/9116-large_default/casa-ferreirinha-reserva-especial-1994-vino-tinto.jpg";
const imgP4         = "https://http2.mlstatic.com/D_725836-MLA32399076578_102019-X.jpg";
const imgP5         = "https://www.winespiritus.com/3861-home_default/barca-velha-1964-casa-ferreirinha-vino-tinto.jpg";
const imgP6         = "https://vinosamerica.com/wp-content/uploads/2019/12/Concha-y-Toro-Reservado-Sweet-Red-2018.png";
const imgP7         = "https://www.bodegacolome.com/wp-content/uploads/2019/02/pro_altura-e1608213512444.png";
const imgP8         = "https://www.vinaioimports.com/wp-content/uploads/2022/03/SQ-BORGONA-750-ml-e1646947617618.png";
const imgP9         = "https://vinotecaligier.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/b/e/be01711.jpg";
const imgP10        = "https://www.casadeuco.com/wp-content/uploads/2021/08/casa-de-uco-winemarket-1000x1000.jpg";
const imagenesProd  = [imgP1, imgP2, imgP3, imgP4, imgP5, imgP6, imgP7, imgP8, imgP9, imgP10 ];

let   cantProdMost  = 1;
let   cantPermitida = 1;
let   coloresMost   = "no";
const defltColor    = "lightgreen";
const defltColorSP  = "verde claro";
const colorNro1     = "red";
const colorNro1SP  = "rojo";
const colorNro2     = "yellow";
const colorNro2SP  = "amarillo";
const colorNro3     = "green"; 
const colorNro3SP  = "verde";
const colorNro4     = "violet";
const colorNro4SP  = "violeta";
const colorNro5     = "blue";
const colorNro5SP  = "azul";
const colorNro6     = "gray";
const colorNro6SP  = "gris";
const coloresProd   = [defltColor, defltColor];
const coloresProdSP = [defltColorSP, defltColorSP];



function eligeCantProd() {
    cantProdMost = sel1CantProd.value;
    console.log(cantProdMost);

}

function eligeCantPermit() {
    cantPermitida = sel2CantPerm.value; 
    console.log(cantPermitida);
}

function eligeColores() {
    console.log(sel3Colores.value);
    coloresMost = sel3Colores.value;
    console.log(coloresMost);
    switch (coloresMost){
        case "no":
            coloresProd     [0] = defltColor;
            coloresProd     [1] = defltColor;
            coloresProdSP   [0] = defltColorSP;
            coloresProdSP   [1] = defltColorSP;
            break;
        case "1-2":
            coloresProd     [0] = colorNro1;
            coloresProd     [1] = colorNro2;
            coloresProdSP   [0] = colorNro1SP;
            coloresProdSP   [1] = colorNro2SP;
            break;
        case "3-4":
            coloresProd     [0]= colorNro3;
            coloresProd     [1]= colorNro4;
            coloresProdSP   [0] = colorNro3SP;
            coloresProdSP   [1] = colorNro4SP;
            break;
        case "5-6":
            coloresProd     [0] = colorNro5;
            coloresProd     [1] = colorNro6;
            coloresProdSP   [0] = colorNro5SP;
            coloresProdSP   [1] = colorNro6SP;
            break; 
    }
    //console.log(coloresProd);
    console.log(coloresProdSP);
}

function generaCodigo(){
    console.log("Presionó botón Genera Código");
    selParrCant.textContent = "La Cantidad de Productos a mostrar es:..................... "+cantProdMost;
    selParrPerm.textContent = "La Cantidad de productos permitida por compra es:... "+cantPermitida;
    selParrClrs.textContent = "Los Colores seleccionados a usar son:................. "+coloresProdSP[0]+", "+coloresProdSP[1]; 
}

function comprarProductox(){
    console.log("Presionó botón comprar");
}