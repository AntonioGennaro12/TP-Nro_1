/* Definición de los datos de producto a utilizar        */ 
let  cantSelec    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
// Guardo los arrays en el "sessionStorage"
sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));

/* Defino un falg que dice si viene de Inicio */ 
let inicio = true;
sessionStorage.setItem('inicio', JSON.stringify(inicio));


// Verifico si ya existen los arrays en el "sessionStorage"
//if (!sessionStorage.getItem('cantSelec')) {
//    // Si no existen, defino los arrays con los valores por defecto
//    /* Vector que almacena cantidad seleccionada */ 
//    const  cantSelec    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
//    // Guardo los arrays en el "sessionStorage"
//    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
//  } 
//  else {
//    // Si los arrays ya existen, los cargo con los valores de defualt
//    cantSelec = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
//    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
//  }
