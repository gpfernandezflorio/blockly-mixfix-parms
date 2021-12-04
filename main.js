Main = {
  INIT : '<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="z@`}5,[k,PT--`Zfay^q">cantidad</variable><variable id="(VPr~,plYGmChx)v#)~z">color</variable></variables><block type="procedures_defnoreturn" id="xCcI~{J=Y6XLekmw^e9e" x="76" y="101"><mutation name="Poner (cantidad) bolitas (color) al norte"><tt text="Poner "></tt><tt text=" bolitas "></tt><tt text=" al norte "></tt><arg name="cantidad" varid="z@`}5,[k,PT--`Zfay^q"></arg><arg name="color" varid="(VPr~,plYGmChx)v#)~z"></arg></mutation></block></xml>',
  DEBUG : false,
  debug : function() { if (Main.DEBUG) { debugger; } },
  blockly : undefined,
  idioma : 'es',
  modoVis: 'PARENTESIS', // PARENTESIS ÍCONOS FANTASMAS SUBRAYADO EDITOR
  modoDef: 'PARENTESIS' // PARENTESIS MUTADOR
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
  Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(Main.INIT), Main.blockly);
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

Main.cambiarModoVis = function() {
  Main.modoVis = document.getElementById('modo_vis').value;
  if (Main.blockly) {
    for (let b of Main.blockly.getAllBlocks()) {
      if (b.updateShape_) {
        b.updateShape_();
      }
    }
  }
};

Main.cambiarModoDef = function() {
  Main.modoDef = document.getElementById('modo_def').value;
  if (Main.blockly) {
    for (let b of Main.blockly.getAllBlocks()) {
      if (b.updateShape_) {
        b.updateShape_();
      }
    }
  }
};

// Antes de terminar de cargar la página, llamo a esta función
Main.preCarga();

// Cuando se termina de cargar la página, llamo a inicializar
window.addEventListener('load', Main.inicializar);
