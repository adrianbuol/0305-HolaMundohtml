// Constantes Referenciales

// ---

// Variables Generales

// ---

// Referencias HTML

// ---

// Funciones Generales

// ---

// Call-Backs

// ---

// Gestores de Eventos

// ---

// Inicializar Variables
var iniciarVariables = function () {
  // --
};

// Referenciar HTML
var referenciarElementos = function () {
  //  --
};

// Asignar Eventos
var asignarEventos = function () {
  // --
};

// Lanzar Aplicación
var lanzarAplicacion = function () {
  // --
};

// Iniciar Aplicación
var iniciarAplicacion = function () {
  // Inicializar Variables
  iniciarVariables();

  // Referenciar Elementos HTML
  referenciarElementos();

  // Asignar Gestores de Eventos
  asignarEventos();

  // Lanzar Aplicación
  lanzarAplicacion();
};

// Activa el script tras la carga de la página
this.window.addEventListener("load", iniciarAplicacion);