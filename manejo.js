// Define puntero al Body
const miBody        = document.querySelector ("body");
// Define punteros a selectores de datos de entrada
const sel1CantProd  = document.querySelector ("#sel1");
const sel2CantPerm  = document.querySelector ("#sel2");
const sel3Colores   = document.querySelector ("#sel3");

// Define punteros a las opciones de Color
const opColores12   = document.querySelector ("#color-12");
const opColores34   = document.querySelector ("#color-34");
const opColores56   = document.querySelector ("#color-56");

// Define puntero a boton de Generación de Código
const genCodigo     = document.querySelector ("#gen-cod");

// Define puntero a bloque (div) que muestra la selección realizada 
const bloqueSelec   = document.querySelector ("#la-selec");

// Define punteros a parrfos para mostrar datos seleccionados
const selParrCant   = document.querySelector ("#sel-parr1");
const selParrPerm   = document.querySelector ("#sel-parr2");
const selParrClrs   = document.querySelector ("#sel-parr3");

// Define puntero al contenedor global de productos
const contProductos = document.querySelector ("#cont-productos");      
// Contador de compras en carrito
const contadorCarritoUno = document.querySelector ("#cont-carrito-1");
const contadorCarritoDos = document.querySelector ("#cont-carrito-2");

/* Define los nombres de los productos disponibles */
const prodN1        = "BR Cohn Cabernet Sauvignon Silver Label 750ml, USA, Applejack";
const prodN2        = "Toso Barbera D'asti Ruby Red - Wine - Amatos Liquor Mart Shop";
const prodN3        = "It. Wein Lunatico Primitivo Puglia-Italy IGP 750 ml - CULINDO";
const prodN4        = "Vinho Argentino D.V. Catena Malbec Ed.lim.- Malbec 2012 750ml";
const prodN5        = "Vino Chileno Tinto Gran Reserva Carmenére CLUB DES SOMMELIERS";
const prodN6        = "Los boldos chateau gran reserva merlot - La buena Cepa, Chile";
const prodN7        = "Costers del Priorat (Priorato, España) Clos Viló 2013 - Tinto";
const prodN8        = "Chez Grisoni - Marquês de Borba Vinhas Velhas Alentejo - DOC "; 
const prodN9        = "Vendita online Montecucco Rosso DOC 750ml, Cantina DE TRIACHI";
const prodN10       = "200 Monges Tinto Reserva (20 meses en Barrica) - La Vinoteca ";
/* define vector de productos */
const nombresProd  = [prodN1, prodN2, prodN3, prodN4, prodN5, prodN6, prodN7, prodN8, prodN9, prodN10 ];

/* define las imagenes de los diferentes productos*/
const imgP1         = "https://applejack.com/site/images/BR-Cohn-Cabernet-Sauvignon-Silver-Label-750-ml_1.png";
const imgP2         = "https://www.amatos.com.au/images/products/lg_5439.jpg";
const imgP3         = "https://culindo.de/wp-content/uploads/2020/11/Folie1-313-2048x2048.png";
const imgP4         = "https://universovigil.com/ventas/95-thickbox_default/dv-catena-syrah-syrah.jpg";
const imgP5         = "https://static.paodeacucar.com/img/uploads/1/926/13006926.jpg";
const imgP6         = "https://dojiw2m9tvv09.cloudfront.net/23289/product/X_q9dhew4dtwglyrprozzr9w_pb_600x6001873.png?49";
const imgP7         = "https://2.bp.blogspot.com/-oXDkvAMnhos/WBC4b6h_zZI/AAAAAAAAB-w/zMYXm0xoxCAfAIyTaBYXvWGoGlfogc42ACLcB/s1600/clos-vilo.png";
const imgP8         = "https://www.chezgrisoni.ch/pub/media/catalog/product/cache/7f8186049d66718fe46d3c8a7f2521da/4/0/400847-marques-de-borba-vinhas-velhas-75-cl.png";
const imgP9         = "https://www.saporitipiciitaliani.it/282-large_default/montecucco-rosso-doc-750-ml-cantina-de-triachi.jpg";
const imgP10        = "https://la-vinoteca.es/118-thickbox_default/200-monges-reserva.jpg";
/* define vector de imagenes */
const imagenesProd  = [imgP1, imgP2, imgP3, imgP4, imgP5, imgP6, imgP7, imgP8, imgP9, imgP10 ];
/* Precios de Porducotos */
const precProd1     = 3500;
const precProd2     = 4300;
const precProd3     = 5200;
const precProd4     = 3800;
const precProd5     = 3700;
const precProd6     = 4300;
const precProd7     = 3300;
const precProd8     = 4700;
const precProd9     = 3900;
const precProd10    = 3600;
/* define vector de precios */
const precioProd    = [precProd1, precProd2, precProd3, precProd4, precProd5, precProd6, precProd7, precProd8, precProd9, precProd10];
//
// /* Vector que almacena cantidad seleccionada */ 
// const  cantSelec    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
// Los cargo desde el session storage
var cantSelec = JSON.parse(sessionStorage.getItem('cantSelec'));
// 
// define imagen de fondo de Body y Contenedor de Productos
const imgBodyBackg  = "https://blog.winesofargentina.com/wp-content/uploads/2017/02/Las-compuertas-Mendoza-1024x683.jpg";
const imgProdBackg  ="https://img.freepik.com/fotos-premium/bodega-barriles-vino-bodega-espana_223582-823.jpg?w=1060";

/* Define los colores usados como background en los contendores de productos */ 
const defltColor    = "blanchedalmond"; 
const defltColorSP  = "ninguno";
const colorNro1     = "brown";
const colorNro1SP   = "marron";
const colorNro2     = "yellow";
const colorNro2SP   = "amarillo";
const colorNro3     = "green"; 
const colorNro3SP   = "verde";
const colorNro4     = "violet";
const colorNro4SP   = "violeta";
const colorNro5     = "blue";
const colorNro5SP   = "azul";
const colorNro6     = "lightgray";
const colorNro6SP   = "gris";
/* Define los arrays de colores para configurar e informar selección en Español */ 
const coloresProd   = [defltColor, defltColor];
const coloresProdSP = [defltColorSP, defltColorSP]; //en Español

/* Definiciones para manejo de Carrito */
const ContenCarrito = document.querySelector("#contenedor-carrito");

// Define variables de uso común
let   cantProdMost  = 1;
let   cantPermitida = 1;
let   coloresMost   = "no";
let   contaCarro    = 0;

/* INICIALIZACIONES VARIAS */
opColores12.textContent = colorNro1SP+"-"+colorNro2SP;
opColores34.textContent = colorNro3SP+"-"+colorNro4SP;
opColores56.textContent = colorNro5SP+"-"+colorNro6SP;

/*++++ FUNCIONES +++++*/
/**
 * Cambia la apriencia del Botón de Generacíon de Código
 */
function chgBotGen() {
    // Aplica imagen de fondo del body 
    miBody.style.backgroundImage = "url("+imgBodyBackg+")";
    genCodigo.style.backgroundColor ="rgb(190, 190, 140)";
    genCodigo.style.color = "white";
}

/**
 * Restablece la apriencia del Botón de Generación de Código
 */
function rstBotGen() {
    genCodigo.style.backgroundColor ="wheat";
    genCodigo.style.color = "grey";
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
    bloqueSelec.style.display = "block"; /* muestra el bloque de la selección */
    selParrCant.textContent = "La Cantidad de Productos a mostrar es:..................... "+cantProdMost;
    selParrPerm.textContent = "La Cantidad de productos permitida por compra es:.. "+cantPermitida;
    if(coloresProdSP[0]!= defltColorSP) {
        selParrClrs.textContent = "Los Colores de fondo a utilizar son:.............. "+coloresProdSP[0]+" y "+coloresProdSP[1];  
    }
    else {
        selParrClrs.textContent = "Los Colores de fondo a utilizar son:............. "+coloresProdSP[0];  
    }   
}

/**
 * asigna los colores seleccionados a los vectores de colores tant para mostrar como para los textos 
 * @param {string} col1 
 * @param {string} col2 
 * @param {string} col1SP 
 * @param {string} col2SP 
 */
function asignaColores (col1, col2, col1SP, col2SP)
    {
        coloresProd     [0] = col1;
        coloresProd     [1] = col2;
        coloresProdSP   [0] = col1SP;
        coloresProdSP   [1] = col2SP;
    }

/**
 * Eleige los colores de fondo de los productoa
 */
function eligeColores() {
    coloresMost = sel3Colores.value;
    switch (coloresMost){
        case "no":
            asignaColores(defltColor, defltColor, defltColorSP, defltColorSP);
            break;
        case "1-2":
           asignaColores(colorNro1, colorNro2, colorNro1SP, colorNro2SP);
           break;
        case "3-4":
            asignaColores(colorNro3, colorNro4, colorNro3SP, colorNro4SP);
            break;
        case "5-6":
            asignaColores(colorNro5, colorNro6, colorNro5SP, colorNro6SP);
            break; 
    }
    chgBotGen();
}
/**
 * Genera el selector de forma de pago dentro del contenedor de producto
 * @param {string} colortexto 
 * @returns 
 */
function genSelP (colortexto) { 
    return (`
    <div class="selP" style="color: ${colortexto}";>
        <label for="med-pagox">SELECCIONE LA FORMA DE PAGO</label>
        <select name="Forma de pago" id="med-pagox">
            <option value="efec">EFECTIVO</option>
            <option value="debi">DEBITO</option>
            <option value="cred">CREDITO</option>
        </select>
    </div> `);           
}
/**
 * Genera el selector de Cantidad a Comprar forma de pago dentro del contenedor de producto
 * @param {string} colortexto 
 * @param {number} idx 
 * @returns 
 */
function genSelC (colortexto, idx) {
    return (`
    <div class="selP" style="color: ${colortexto}";>
        <label for="cant-prodx">SELECCIONE LA CANTIDAD</label>
        <select id="sel-cantperm" onchange="eligeCant(event,${(idx)})" name="Cantidad de Productos" >                        
        </select>
    </div> `);
}
/**
 * Genera el contenedor d eproducto (todo menos las opciones de máx cantidad de productos)
 * @param {number} index 
 * @param {string} nombre 
 * @param {number} precio 
 * @param {string} imagen 
 * @param {string} bkcolor 
 */
function generaContProd (index, nombre, precio, imagen, bkcolor) {
    let colTxt = "white";
    if ((index%2)||(bkcolor == defltColor)) {colTxt = "blue";};
    contProductos.innerHTML += `
        <div class="card" style="width: 17rem; background-color:${bkcolor};">
            <div class="cont-imgprod">
                <img src=${imagen} class="card-img-top img-prodx" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title" style="color:${colTxt}">${nombre} (Prec. Unit. $${precio}.-)</h5>
                ${genSelP(colTxt)}
                ${genSelC(colTxt, index)}
                <!-- <p class="card-text"></p> -->
                <a href="#" class=" <!-- btn btn-primary --> bot-prodx" onclick="comprarProductox(event,${(index)})">COMPRAR</a>
            </div>
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
    for (let cont=0; cont <= cantperm; cont++) {
            selCanPerm.innerHTML += `
                <option value="${cont}">${cont}</option>
            `;  
        selCanPerm.id = "" ; /*Borra el identificador del selector recientemente creado.*/          
    } 
}

// reinicializa la cantidad seleccionada y guardo en el "sessionStorage"
function rstCantSelec() {
    cantSelec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
}

/**
 * Genera Código HTML para mostrar los producotos seleccionados
 */
function generaCodigo(){
    rstBotGen();
    contProductos.innerHTML = "";   // borra todo el contenedor
    contProductos.style.backgroundImage = "url("+imgProdBackg+")";
    muestraSeleccion ();            // carga los datos seleccionados
    contProductos.style.display = "flex"; /* habilita el contenedor de salida*/ 
    // reinicializa la cantidad seleccionada y guardo en el "sessionStorage"
    rstCantSelec();
    // genera los productos
    for (let cont=0; cont < cantProdMost; cont++) {
        let nomb  = nombresProd [cont];
        let prec  = precioProd [cont];
        let img   = imagenesProd[cont];
        let color = coloresProd[(cont%2)];
        generaContProd (cont, nomb, prec, img, color);
        genOpCantProd  (cantPermitida);
    }
}

/* AGREGADOS POR FUERA DE LO PEDIDO */
/**
 * Preparado para procesar la compra de los productos
 * @param {string} event 
 * @param {number} indice 
 */
function eligeCant(event, idx) {
    let opcion      = event.target;
    cantSelec [idx] = opcion.value;
}

/**
 * Preparado para procesar la compra de los productos
 * @param {string} event 
 * @param {number} indice 
 */
function comprarProductox(event, idx){
    let boton = event.target;
    let prTotal = cantSelec [idx] * precioProd[idx];
    boton.textContent = "COMPRADO! (En Carrito $"+prTotal+".-)";
    boton.style.color = "darkred";
    //contadorCarrito.innerHTML = ``;
    contaCarro += parseInt(cantSelec [idx]);
    contadorCarritoUno.innerHTML = `${contaCarro}`;
    contadorCarritoDos.innerHTML = `${contaCarro}`;
    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
}

/* Manejo del Carrito */
function verCompra() {
    ContenCarrito.innerHTML = "";
    let totalCompra = 0;
    for (let i=0 ; i<10 ; i++) {
        let prTotal = cantSelec [i] * precioProd[i];
        if (parseInt(cantSelec [i]) > 0) {
            ContenCarrito.innerHTML += `
            <div>
            <h4>Prod. ${i+1}: ${nombresProd[i]} - Cant.: ${cantSelec[i]} -
                    Pr. Unit: $${precioProd[i]}.- / Pr. Total: $${prTotal}.-</h4>
            </div> `;
            totalCompra += prTotal;
        }
    }
    ContenCarrito.innerHTML += `
            <h3>Total de la Compra: $${totalCompra}.-<h/3> 
        `;
}

