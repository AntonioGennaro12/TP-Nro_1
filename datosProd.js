/* Definición de los datos de producto a utilizar        */ 
// Verifico si ya existen los arrays en el "sessionStorage"
if (!sessionStorage.getItem('cantSelec')) {
    // Si no existen, defino los arrays con los valores por defecto
    /* Vector que almacena cantidad seleccionada */ 
    const  cantSelec    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
    // Guardo los arrays en el "sessionStorage"
    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
  } 
  else {
    // Si los arrays ya existen, cargarlos desde sessionStorage
    // const cantSelec = JSON.parse(sessionStorage.getItem('cantSelec'));
    cantSelec    = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Valor de default = 0 
    sessionStorage.setItem('cantSelec', JSON.stringify(cantSelec));
  }
