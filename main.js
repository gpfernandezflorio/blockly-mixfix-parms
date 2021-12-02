Main = {
  blockly : undefined,
  idioma : 'es'
};

// Inicializa todo lo necesario antes de que se termine de cargar la página
Main.preCarga = function() {
  document.write(`<script charset="utf-8" src="blockly/msg/js/${Main.idioma}.js"></script>\n`);
};

// Inicializa todo lo necesario una vez que se termina de cargar la página
Main.inicializar = function() {
  Main.Blockly.agregarBloques();
  window.addEventListener('resize', Main.redimensionar, false);   // Al cambiar el tamaño de la pantalla
  Main.crearBlockly();
  Main.redimensionar();
};

Main.crearBlockly = function() {
  if (Main.blockly) {
    Main.blockly.dispose();
  }
  Main.blockly = Blockly.inject('blockly', {toolbox: Main.toolbox});
};

Main.redimensionar = function() {
  let offsetVertical = 20;
  let altura = window.innerHeight-document.getElementById('barra_navagacion').offsetHeight - offsetVertical;
  document.getElementById('blockly').style.height = `${altura}px`;
  if (Main.blockly) {
    Blockly.hideChaff(true);
    Blockly.svgResize(Main.blockly);
    Blockly.resizeSvgContents(Main.blockly);
  }
};

// Antes de terminar de cargar la página, llamo a esta función
Main.preCarga();

// Cuando se termina de cargar la página, llamo a inicializar
window.addEventListener('load', Main.inicializar);
