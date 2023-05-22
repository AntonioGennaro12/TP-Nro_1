// Define puntero al Body
const miBody        = document.querySelector ("body");
// Define punteros a selectores de datos de entrada
const sel1CantProd  = document.querySelector ("#sel1");
const sel2CantPerm  = document.querySelector ("#sel2");
const sel3Colores   = document.querySelector ("#sel3");
// Define puntero a boton de Generación d eCódigo
const genCodigo     = document.querySelector ("#gen-cod");
// Define punteros a parrfos para mostrar datos seleccionados
const selParrCant   = document.querySelector ("#sel-parr1");
const selParrPerm   = document.querySelector ("#sel-parr2");
const selParrClrs   = document.querySelector ("#sel-parr3");
// Define puntero al contenedor global de productos
const contProductos = document.querySelector ("#cont-productos");      

/* define las constantes que apuntan a las imagenes de los diferentes productos*/
const imgP1         = "https://imagenes.eldebate.com/files/vertical_composte_image/files/fp/uploads/2022/07/22/62d9d237c78cd.r_d.399-713.jpeg";
const imgP2         = "https://www.portugalvineyards.com/60999-large_default/barca-velha-red-1983.jpg";
const imgP3         = "https://www.winespiritus.com/9116-large_default/casa-ferreirinha-reserva-especial-1994-vino-tinto.jpg";
const imgP4         = "https://http2.mlstatic.com/D_725836-MLA32399076578_102019-X.jpg";
const imgP5         = "https://www.winespiritus.com/3861-home_default/barca-velha-1964-casa-ferreirinha-vino-tinto.jpg";
const imgP6         = "https://vinosamerica.com/wp-content/uploads/2019/12/Concha-y-Toro-Reservado-Sweet-Red-2018.png";
const imgP7         = "https://www.bodegacolome.com/wp-content/uploads/2019/02/pro_altura-e1608213512444.png";
const imgP8         = "https://vinotecaligier.com/media/catalog/product/cache/1/image/1000x/9df78eab33525d08d6e5fb8d27136e95/b/e/be01711.jpg";
const imgP9         = "https://www.vinaioimports.com/wp-content/uploads/2022/03/SQ-BORGONA-750-ml-e1646947617618.png";
const imgP10        = "https://www.casadeuco.com/wp-content/uploads/2021/08/casa-de-uco-winemarket-1000x1000.jpg";
/* define vector de imagenes */
const imagenesProd  = [imgP1, imgP2, imgP3, imgP4, imgP5, imgP6, imgP7, imgP8, imgP9, imgP10 ];

// define imagen de fondo Contenedor de Productos
const imgProdBackG  = "https://vinomanos.com/wp-content/uploads/2019/01/valle-de-uco.png"

/* Define los colores usados como background en los contendores de productos */ 
const defltColor    = "blanchedalmond"; 
const defltColorSP  = "ninguno";
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
/* Define los arrays de colores para configurar e informar selección en Español */ 
const coloresProd   = [defltColor, defltColor];
const coloresProdSP = [defltColorSP, defltColorSP]; //en Español

// Define variables de uso común
let   cantProdMost  = 1;
let   cantPermitida = 1;
let   coloresMost   = "no";

/*++++ FUNCIONES +++++*/
/**
 * Cambia la apriencia del Botón de Generacíon de Código
 */
function chgBotGen() {
    genCodigo.style.backgroundColor ="brown";
    genCodigo.style.color = "white";
}

/**
 * Restablece la apriencia del Botón de Generación de Código
 */
function rstBotGen() {
    genCodigo.style.backgroundColor ="wheat";
    genCodigo.style.color = "darkred";
}

/**
 * Selecciona Cantidad de Producotos a Mostrar
 */
function eligeCantProd() {
    cantProdMost = sel1CantProd.value;
    chgBotGen();
}

/**
 * Selecciona Cantidad Permitida para compra de productos
 */
function eligeCantPermit() {
    cantPermitida = sel2CantPerm.value;
    chgBotGen();
}

/**
 * Muestra los datos seleccionados
 */
function muestraSeleccion (){
    selParrCant.textContent = "La Cantidad de Productos a mostrar es:..................... "+cantProdMost;
    selParrPerm.textContent = "La Cantidad de productos permitida por compra es:... "+cantPermitida;
    if(coloresProdSP[0]!= defltColorSP) {
        selParrClrs.textContent = "Los Colores seleccionados a usar son:................ "+coloresProdSP[0]+", "+coloresProdSP[1];  
    }
    else {
        selParrClrs.textContent = "Los Colores seleccionados a usar son:.................. "+coloresProdSP[0];  
    }
}

/**
 * Eleige los colores de fondo de los productoa
 */
function eligeColores() {
    coloresMost = sel3Colores.value;
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
    chgBotGen();
}

/**
 * Genera el contenedor d eproducto (todo menos las opciones de máx cantidad de productos)
 * @param {number*} contador 
 * @param {string} imagen 
 * @param {*string} bkcolor 
 */
function generaContProd (contador, imagen, bkcolor) {
    contProductos.innerHTML += `
            <div class="cont-prodx" style="background-color: ${bkcolor};">
                <h2>Producto ${contador+1}</h2>
                <div class="cont-imgprod">
                    <img class="img-prodx" src=${imagen} alt="">
                </div>
                <div class="selP">
                    <label for="med-pagox">Seleccione forms de Pago</label>
                    <select name="Forma de pago" id="med-pagox">
                        <option value="efec">Efectivo</option>
                        <option value="debi">Débito</option>
                        <option value="cred">Crédito</option>
                    </select>
                </div> 
                <div class="selP">
                    <label for="cant-prodx">Seleccione la Cantidad</label>
                    <select id="sel-cantperm" name="Cantidad de Productos" >                        
                    </select>
                </div> 
                <button class="bot-prodx" onclick="comprarProductox(event)">Comprar ${(contador+1)}</button>
            </div> 
        `;
}

/**
 * Genera listado de opciones de compra máxima permitida.
 * @param {number} cantperm 
 */
function genOpCantProd  (cantperm) {
    /* Define un identificador para direccionar al selector de Opciones de cantidad*/
    const selCanPerm  = document.querySelector ("#sel-cantperm");
    /* genera los elementos <option> necesarios según lo elegido */ 
    for (let cont=1; cont <= cantperm; cont++) {
            selCanPerm.innerHTML += `
                <option value="${cont}">${cont}</option>
            `;  
        selCanPerm.id = "" ; /*Borra el identificador del selector recientemente creado.*/          
    } 
}

/**
 * Genera Código HTML para mostrar los producotos seleccionados
 */
function generaCodigo(){
    rstBotGen();
    contProductos.innerHTML = "";   // borra todo el contenedor
    contProductos.style.backgroundImage = "url("+imgProdBackG+")";
    muestraSeleccion ();            // carga los dtos seleccionados
    // genera los productos
    for (let cont=0; cont < cantProdMost; cont++) {
        let img   = imagenesProd[cont];
        let color = coloresProd[(cont%2)];
        generaContProd (cont, img, color);
        genOpCantProd  (cantPermitida);
    }
}

/**
 * Preparado para procesar la compra de los productos
 * @param {string} event 
 */
function comprarProductox(event){
    let boton = event.target;
    //console.log("Presionó el botón '"+boton.textContent+"'");
    boton.textContent = "COMPRADO!!!";
    boton.style.color = "red";
}

