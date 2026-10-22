/* ============================================================
   M24 SPORT · HOMEPAGE (inicio de la tienda)
   Archivo JavaScript para Tiendanube · misma piel que la landing
   de la Calza Biker (paleta, tipografias, Shadow DOM, red de
   seguridad).

   COMO SE INSTALA
   ---------------
   Opcion A (recomendada): Configuracion > Codigos externos (o
   "Herramientas > Codigos de seguimiento / scripts") y pega el
   archivo entero dentro de <script> ... </script>.
   Opcion B: subi este archivo a un hosting (o a "Editar codigo" si
   tu plan lo tiene) y cargalo con <script src="...m24-home.js"></script>.

   El script SOLO actua en la pagina de inicio ("/"). En el resto de
   la tienda no hace nada. Si algo falla o tarda mas de 4 segundos,
   se ve la plantilla normal: la tienda nunca queda en blanco.

   PRUEBA SOCIAL: nunca inventa numeros. Todo sale del PANEL de abajo
   (opiniones, calificacion). Las estadisticas (provincias, colores
   mas elegidos, talles) se calculan solas a partir de las opiniones.
   ============================================================ */
(function () {
  "use strict";

  /* ===================== PANEL DE LA HOME ===================== */
  var C = window.M24H_CONFIG || {
    marca: "M24 Sport",

    /* Direccion del producto (la landing de la calza). */
    urlProducto: "/productos/calza-biker/",
    nombreProducto: "Calza Biker de cintura cruzada",

    /* Precios (mismos que el panel de la landing) */
    packs: [
      { cantidad: 3, total: 69990, antes: 149990, etiqueta: "" },
      { cantidad: 6, total: 125982, antes: 299980, etiqueta: "Recomendado" },
      { cantidad: 9, total: 167976, antes: 449970, etiqueta: "Mejor precio" }
    ],

    whatsapp: "",          /* ej: "5493511234567"; vacio = se oculta */
    instagram: "",         /* sin @; vacio = se oculta */
    envios: "Envíos a todo el país",

    cinta: [
      "Elegí el color y el talle de cada calza",
      "6 calzas con 10% extra y 9 con 20% extra",
      "Envíos a todo el país",
      "Tenés 10 días para arrepentirte de tu compra"
    ],

    /* Fotos reutilizadas de la landing */
    fotos: {
      hero: "https://i.ibb.co/2YC99FS3/Three-women-walking-in-park-20261022030158-1.jpg",
      colores: "https://i.ibb.co/tPCTz4tJ/Four-women-posing-with-leggings-20261022024851-1.jpg",
      cintura: "https://i.ibb.co/273tZLGs/Model-showing-leggings-waistband-20261022024803-1.jpg",
      espalda: "https://i.ibb.co/d0zkK8g1/Woman-walking-wearing-purple-leg-20261022024822-1.jpg",
      baja: "https://i.ibb.co/CpLwfXpR/Woman-pulling-up-slipping-leggings-20261022024528-1.jpg",
      recta: "https://i.ibb.co/W1GMNWB/Woman-pinching-waistband-of-legg-20261022024658-1.jpg",
      roce: "https://i.ibb.co/VWHG01pN/Woman-walking-on-city-sidewalk-20261022024720-1.jpg",
      talle: "https://i.ibb.co/QFRhyRk3/Woman-holding-incorrect-size-shorts-20261022024738-1.jpg"
    },

    colores: [
      { nombre: "Negro", hex: "#1E1C1D" }, { nombre: "Gris grafito", hex: "#3A3335" },
      { nombre: "Azul marino", hex: "#1F2150" }, { nombre: "Azul francia", hex: "#2E55C8" },
      { nombre: "Verde agua", hex: "#8FB5AE" }, { nombre: "Violeta", hex: "#A23FA6" },
      { nombre: "Camel", hex: "#A2845E" }, { nombre: "Chocolate", hex: "#67402D" }
    ],
    talles: ["S", "M", "L", "XL", "XXL"],

    /* Calificacion general: solo numeros reales */
    calificacion: { promedio: 4.39, cantidad: 583, fuente: "Google y Facebook" },

    /* Opiniones (las mismas de la landing). verificada: true solo si
       salio de una compra real. */
    opiniones: [
      { nombre: "Camila Villalba", edad: 26, ciudad: "San Luis", estrellas: 5, talle: "M", color: "Gris grafito", titulo: "No se me enrolla cuando entreno", texto: "La usé para hacer piernas y me resultó cómoda para moverme. Lo que más me gustó fue el tiro alto, porque no tuve que estar acomodándome la cintura entre ejercicios.", foto: "https://i.ibb.co/QyR62dk/Woman-standing-in-gym-20261022032021-1.jpg" },
      { nombre: "Brenda Giménez", edad: 32, ciudad: "Tucumán", estrellas: 5, talle: "L", color: "Azul marino", titulo: "El color es incluso más lindo de lo que esperaba", texto: "Elegí el azul marino y me encantó. La usé con un top gris para ir al gimnasio y quedó un conjunto re lindo. Además, es un color que no cuesta nada combinar.", foto: "https://i.ibb.co/Pvg2d2sN/Woman-standing-in-bedroom-20261022032958-1.jpg" },
      { nombre: "Lara Domínguez", edad: 23, ciudad: "Neuquén", estrellas: 5, talle: "S", color: "Azul francia", titulo: "Me gustó cómo queda la cintura", texto: "El detalle cruzado es lo que más destaco. La usé para entrenar y me gustó que tenga un diseño diferente sin necesidad de agregarle estampas ni otros detalles.", foto: "https://i.ibb.co/JFHn0c8y/Woman-wearing-biker-shorts-20261022033012-1.jpg" },
      { nombre: "Nicole Herrera", edad: 29, ciudad: "Salta", estrellas: 5, talle: "M", color: "Verde agua", titulo: "Por fin salí del negro", texto: "Pedí la verde agua y me encantó para variar un poco. La usé con una remera blanca y quedó buenísima. Es un color que levanta mucho el conjunto.", foto: "https://i.ibb.co/1td8qn0C/Woman-wearing-biker-shorts-20261022033025-1.jpg" },
      { nombre: "Maite Figueroa", edad: 35, ciudad: "San Juan", estrellas: 5, talle: "XL", color: "Gris grafito", titulo: "Cómoda para hacer sentadillas", texto: "La probé en una rutina de piernas y pude moverme sin sentir que me tiraba de la cintura. Me gustó mucho el largo, porque no llega a ser una calza larga ni queda demasiado corta.", foto: "https://i.ibb.co/C5YTY2Ms/Woman-posing-in-gym-20261022033047-1.jpg" },
      { nombre: "Ailén Romero", edad: 24, ciudad: "Chaco", estrellas: 5, talle: "M", color: "Azul marino", titulo: "La usé todo el día", texto: "Me la puse para entrenar a la mañana y después seguí con mis cosas. El corte es lindo y el tiro alto me resultó cómodo. No es de esas prendas que te querés sacar apenas terminás.", foto: "https://i.ibb.co/MyyCM3wb/Woman-wearing-biker-shorts-outdoors-20261022033119-1.jpg" },
      { nombre: "Zoe Medina", edad: 27, ciudad: "Río Negro", estrellas: 5, talle: "S", color: "Azul francia", titulo: "El azul Francia se lleva todas las miradas", texto: "Me animé a pedir un color más fuerte y fue una buena elección. La usé con un top negro y me gustó mucho cómo quedó. El detalle de la cintura también suma.", foto: "https://i.ibb.co/b5xrV6JG/Woman-wearing-shorts-in-bedroom-20261022033136-1.jpg" },
      { nombre: "Melina Suárez", edad: 38, ciudad: "Corrientes", estrellas: 5, talle: "L", color: "Gris grafito", titulo: "Me queda bien para caminar", texto: "La compré para tener una biker cómoda y terminé usándola también para salir a caminar. El largo me resulta práctico y el gris grafito combina con prácticamente todo lo que tengo.", foto: "https://i.ibb.co/3yPnsQxR/Woman-walking-wearing-biker-shorts-20261022033149-1.jpg" },
      { nombre: "Juliana Torres", edad: 25, ciudad: "Formosa", estrellas: 5, talle: "M", color: "Azul marino", titulo: "No esperaba que me gustara tanto el diseño", texto: "Al principio me llamó la atención la cintura cruzada, pero puesta me gustó todavía más. La usé con un top del mismo color y quedó un conjunto muy lindo.", foto: "https://i.ibb.co/6RyPmJxZ/Woman-wearing-biker-shorts-20261022033203-1.jpg" },
      { nombre: "Paola Benítez", edad: 34, ciudad: "Misiones", estrellas: 5, talle: "XL", color: "Verde agua", titulo: "La verde agua fue un acierto", texto: "Quería una calza de otro color y elegí esta. La tela y el corte me resultaron cómodos para mi rutina. Me gustó especialmente cómo queda combinada con blanco.", foto: "https://i.ibb.co/W4VcpFqd/Woman-wearing-biker-shorts-20261022033215-1.jpg" },
      { nombre: "Renata Silva", edad: 22, ciudad: "La Rioja", estrellas: 5, talle: "S", color: "Azul francia", titulo: "Ideal para mi rutina de gimnasio", texto: "La usé para entrenar varios grupos musculares y me resultó práctica. El largo biker me gusta más que el de las calzas largas, sobre todo cuando hace calor.", foto: "https://i.ibb.co/0vP7pkF/Woman-wearing-shorts-on-rooftop-20261022033230-1.jpg" },
      { nombre: "Gabriela Correa", edad: 31, ciudad: "Catamarca", estrellas: 5, talle: "M", color: "Gris grafito", titulo: "El gris combina con absolutamente todo", texto: "La usé con una remera oversize para hacer unos mandados y también con un top para entrenar. Me gusta tener prendas que puedo aprovechar en distintas situaciones.", foto: "https://i.ibb.co/nMHCCw3C/Woman-walking-with-shopping-bag-20261022033245-1.jpg" },
      { nombre: "Micaela Ponce", edad: 36, ciudad: "Chubut", estrellas: 5, talle: "XL", color: "Azul marino", titulo: "Me gustó que no sea una calza básica", texto: "El detalle de la V en la cintura hace que tenga otro estilo. La usé con una musculosa lisa y no necesité agregar nada más para que el conjunto quedara lindo.", foto: "https://i.ibb.co/0pjCqVyN/Woman-wearing-biker-shorts-20261022033257-1.jpg" },
      { nombre: "Ludmila Castro", edad: 28, ciudad: "Santiago del Estero", estrellas: 5, talle: "L", color: "Azul francia", titulo: "Cómoda para moverme sin parar", texto: "La usé para una clase funcional y me resultó cómoda durante los ejercicios. Me gustó el largo y que el tiro sea alto. Para entrenar, era justamente el estilo que buscaba.", foto: "https://i.ibb.co/nsNTSFfK/Woman-wearing-biker-shorts-20261022033351-1.jpg" },
      { nombre: "Carla Álvarez", edad: 30, ciudad: "San Luis", estrellas: 5, talle: "M", color: "Gris grafito", titulo: "Ya la combiné con varios conjuntos", texto: "Me gustó elegir el gris porque queda bien con tops de distintos colores. La usé varias veces desde que la compré y el diseño cruzado sigue siendo mi detalle favorito.", foto: "https://i.ibb.co/8gwdTZPX/Woman-wearing-biker-shorts-20261022033403-1.jpg" }
    ]
  };
  /* ============================================================ */

  var VISTA = !!window.M24H_VISTA_PREVIA;
  if (window.M24H_ARRANCO) { return; }
  var ruta = location.pathname.replace(/\/+$/, "");
  if (!VISTA && ruta !== "" && !/^\/(es|pt|en)$/.test(ruta)) { return; }
  window.M24H_ARRANCO = true;

  /* ---------- utilidades ---------- */
  function E(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function D(n) { return "$" + String(Math.round(n || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  function dec(n) { return (Math.round(n * 10) / 10).toFixed(1).replace(".", ","); }
  function miles(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, "."); }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim(); }
  function hexDe(nombre) {
    var c = C.colores.filter(function (k) { return norm(k.nombre) === norm(nombre); })[0];
    return c ? c.hex : "#B9A3AE";
  }
  function wa(t) {
    var n = String(C.whatsapp || "").replace(/\D/g, "");
    return n ? "https://wa.me/" + n + "?text=" + encodeURIComponent(t || "¡Hola! Quiero hacer una consulta.") : "";
  }
  var reducir = !!(window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches);

  var ICO = {
    bolsa: "<path d='M5.5 8h13l-1.1 12.2H6.6L5.5 8z'/><path d='M9 10V6.8a3 3 0 0 1 6 0V10'/>",
    lupa: "<circle cx='10.5' cy='10.5' r='6'/><path d='M15 15l5 5'/>",
    menu: "<path d='M4 7h16M4 12h16M4 17h16'/>",
    check: "<path d='M5 12.5l4.5 4.5L19 7.5'/>",
    camion: "<path d='M2.8 6.8h11.4v9.4H2.8zM14.2 10h4l3 3.2v3h-7'/><circle cx='7' cy='17.6' r='1.8'/><circle cx='17.2' cy='17.6' r='1.8'/>",
    vuelta: "<path d='M4.5 9.5H15a4.8 4.8 0 0 1 0 9.6H9.5'/><path d='M8.2 5.8L4.5 9.5l3.7 3.7'/>",
    candado: "<rect x='5' y='10.5' width='14' height='10' rx='2.2'/><path d='M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7'/>",
    pin: "<path d='M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z'/><circle cx='12' cy='10' r='2.3'/>",
    gota: "<circle cx='12' cy='12' r='8'/><path d='M12 4a8 8 0 0 0 0 16z' fill='currentColor'/>",
    regla: "<rect x='2.5' y='8' width='19' height='8' rx='1.6'/><path d='M6.5 8v3M10 8v4.2M13.5 8v3M17 8v4.2'/>",
    der: "<path d='M9 5.5l6.5 6.5L9 18.5'/>",
    izq: "<path d='M15 5.5L8.5 12l6.5 6.5'/>",
    abajo: "<path d='M6 9.5l6 6 6-6'/>",
    cerrar: "<path d='M6 6l12 12M18 6L6 18'/>",
    cruz: "<path d='M7 7l10 10M17 7L7 17'/>",
    corazon: "<path d='M12 20s-7.5-4.6-7.5-10.1A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.3C19.5 15.4 12 20 12 20z'/>",
    amigas: "<circle cx='8.5' cy='8.5' r='3'/><circle cx='16' cy='9.5' r='2.5'/><path d='M3 19c.6-3.3 2.8-5 5.5-5s4.9 1.7 5.5 5M14.2 14.3c2.8-.5 5.6 1 6.3 4.7'/>",
    whatsapp: "<path d='M12 3.2a8.8 8.8 0 0 0-7.6 13.3L3.2 20.8l4.4-1.2A8.8 8.8 0 1 0 12 3.2z'/>"
  };
  function I(n, cl) {
    return "<svg class='ico " + (cl || "") + "' viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'>" + (ICO[n] || "") + "</svg>";
  }
  var EST = "M12 2.6l2.9 6 6.5.9-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.1 1.1-6.5L2.6 9.5l6.5-.9z";
  function estrellas(v, cl) {
    var s = "<span class='est " + (cl || "") + "' role='img' aria-label='" + dec(v) + " de 5 estrellas'>";
    for (var i = 0; i < 5; i++) {
      var f = Math.max(0, Math.min(1, v - i));
      s += "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='" + EST + "' class='ev'/>" +
        (f > 0 ? "<path d='" + EST + "' class='el' style='clip-path:inset(0 " + Math.round((1 - f) * 100) + "% 0 0)'/>" : "") + "</svg>";
    }
    return s + "</span>";
  }
  function logo(oscuro) {
    var L = window.M24_LOGOS || {};
    var svg = oscuro ? L.oscuro : L.claro;
    return svg || "<span class='logo-txt'>M24 <small>SPORT</small></span>";
  }

  /* ---------- datos calculados (nunca inventados) ---------- */
  var OPS = (C.opiniones || []).filter(function (o) { return o && o.texto; });
  var CAL = C.calificacion && C.calificacion.promedio > 0 ? C.calificacion :
    (OPS.length ? { promedio: OPS.reduce(function (a, o) { return a + (o.estrellas || 5); }, 0) / OPS.length, cantidad: OPS.length } : null);
  function contar(campo) {
    var m = {};
    OPS.forEach(function (o) { var k = o[campo]; if (k) { m[k] = (m[k] || 0) + 1; } });
    return Object.keys(m).map(function (k) { return { k: k, n: m[k] }; }).sort(function (a, b) { return b.n - a.n; });
  }
  var PROV = contar("ciudad"), COLS = contar("color"), TALS = contar("talle");
  var PACKS = (C.packs || []).map(function (p) {
    return { cantidad: p.cantidad, total: p.total, antes: p.antes, cu: Math.round(p.total / p.cantidad),
      off: p.antes > p.total ? Math.floor((1 - p.total / p.antes) * 100) : 0, etiqueta: p.etiqueta };
  });
  var MIN_CU = Math.min.apply(null, PACKS.map(function (p) { return p.cu; }));
  var MAX_OFF = Math.max.apply(null, PACKS.map(function (p) { return p.off; }).concat([0]));
  var EDADES = OPS.map(function (o) { return o.edad; }).filter(Boolean);

  /* ---------- estilos ---------- */
  var CSS = ":host{all:initial;display:block}*,*::before,*::after{box-sizing:border-box}" +
    ".app{--b:#fff;--ci:#2F1A26;--ma:#6E4E5F;--fr:#A8325F;--fro:#8C2550;--al:#F6D3DF;--rm:#F3B5C9;--le:#FFF5F8;--li:#EADCE2;--ls:#F4EBEF;" +
    "--disp:'Anybody','Arial Black',Impact,sans-serif;--txt:'Figtree',system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif;" +
    "font-family:var(--txt);font-size:16px;line-height:1.5;color:var(--ci);background:var(--b);-webkit-font-smoothing:antialiased;overflow-x:clip;min-height:100vh}" +
    "img,svg{display:block;max-width:100%}button,input{font:inherit;color:inherit}button{background:none;border:0;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent}a{color:inherit}p{margin:0}" +
    ":focus-visible{outline:3px solid var(--fr);outline-offset:2px;border-radius:6px}.oc{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}" +
    ".ico{width:22px;height:22px;flex:0 0 auto}" +
    ".h1,.h2,.h3{font-family:var(--disp);font-weight:800;margin:0}" +
    ".h1{font-variation-settings:'wdth' 116;font-size:clamp(34px,9vw,64px);line-height:.98;letter-spacing:-.015em}" +
    ".h2{font-variation-settings:'wdth' 112;font-size:clamp(26px,6.4vw,40px);line-height:1.05;letter-spacing:-.01em;text-wrap:balance}" +
    ".h3{font-variation-settings:'wdth' 108;font-size:19px;line-height:1.2}" +
    ".kick{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:var(--fr);margin-bottom:10px}" +
    ".sub{color:var(--ma);font-size:16px;max-width:56ch;margin-top:10px}" +
    ".cta{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:56px;padding:0 26px;border-radius:14px;background:var(--fr);color:#fff;font-weight:800;font-size:17px;text-decoration:none;box-shadow:0 8px 20px -8px rgba(168,50,95,.55);transition:background .2s,transform .12s}" +
    ".cta:hover{background:var(--fro)}.cta:active{transform:scale(.985)}.cta .ico{width:20px;height:20px}" +
    ".btn2{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 22px;border-radius:999px;border:1.5px solid currentColor;font-weight:700;font-size:15.5px;text-decoration:none}" +
    ".btn2:hover{background:var(--ci);color:#fff;border-color:var(--ci)}" +
    ".est{display:inline-flex;gap:1px;vertical-align:middle}.est svg{width:16px;height:16px}.est.g svg{width:24px;height:24px}.ev{fill:var(--li)}.el{fill:var(--fr)}.est.cl .ev{fill:rgba(255,255,255,.3)}.est.cl .el{fill:#fff}" +
    ".sec{padding:56px 0}.in{max-width:1180px;margin:0 auto;padding:0 16px}.cab-sec{text-align:center;max-width:680px;margin:0 auto 28px}.cab-sec .sub{margin-left:auto;margin-right:auto}" +
    /* cinta y cabecera */
    ".cinta{background:var(--ci);color:#fff;text-align:center;font-size:13px;font-weight:600;padding:8px 16px;min-height:34px;display:flex;align-items:center;justify-content:center}" +
    ".cinta span{transition:opacity .35s,transform .35s}.cinta span.sale{opacity:0;transform:translateY(-4px)}" +
    ".cab{position:sticky;top:0;z-index:40;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border-bottom:1px solid var(--ls)}" +
    ".cab-in{max-width:1180px;margin:0 auto;padding:6px 8px;display:grid;grid-template-columns:1fr auto 1fr;align-items:center;min-height:60px}" +
    ".lado{display:flex;gap:2px}.der{justify-self:end}.logo{display:block}.logo svg{height:40px;width:auto}.logo-txt{font-family:var(--disp);font-weight:900;font-size:26px}" +
    ".cb{position:relative;display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:999px;text-decoration:none}.cb:hover{background:var(--le)}.cb .ico{width:25px;height:25px}" +
    ".nav{display:none;gap:22px;font-weight:700;font-size:15px}.nav a{text-decoration:none}.nav a:hover{color:var(--fr)}" +
    /* hero */
    ".hero{position:relative;min-height:min(92vh,760px);display:flex;align-items:flex-end;color:#fff;overflow:hidden;background:var(--ci)}" +
    ".hero img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;animation:zoom 14s ease-out both}" +
    "@keyframes zoom{from{transform:scale(1.08)}to{transform:scale(1)}}" +
    ".hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(47,26,38,.05) 30%,rgba(47,26,38,.82) 100%)}" +
    ".hero-in{position:relative;z-index:1;width:100%;max-width:1180px;margin:0 auto;padding:0 16px 40px}" +
    ".hero .h1{color:#fff;max-width:13ch}.hero p{font-size:17px;max-width:44ch;margin:14px 0 22px;opacity:.92}" +
    ".hero-chip{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.16);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border-radius:999px;padding:7px 14px 7px 10px;font-size:14px;margin-bottom:16px;text-decoration:none;color:#fff}" +
    ".hero-chip b{font-weight:800}.hero-acc{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.hero .btn2{color:#fff}.hero .btn2:hover{background:#fff;color:var(--ci);border-color:#fff}" +
    ".hero-caras{display:flex;align-items:center;gap:10px;margin-top:22px;font-size:14px}.caras{display:flex}.caras img{position:static;width:34px;height:34px;border-radius:999px;object-fit:cover;border:2px solid #fff;margin-left:-8px;animation:none}.caras img:first-child{margin-left:0}" +
    /* numeros */
    ".nums{background:var(--le);border-bottom:1px solid var(--ls)}.nums ul{list-style:none;margin:0 auto;padding:22px 16px;max-width:1180px;display:grid;grid-template-columns:1fr 1fr;gap:18px 12px}" +
    ".nums li{display:flex;flex-direction:column;align-items:center;text-align:center;gap:2px}.nums b{font-family:var(--disp);font-variation-settings:'wdth' 106;font-weight:800;font-size:30px;line-height:1;color:var(--fr)}.nums span{font-size:13.5px;font-weight:600;color:var(--ma);line-height:1.25}" +
    /* producto */
    ".prod{display:grid;gap:26px;align-items:center}.prod-fotos{display:grid;grid-template-columns:2fr 1fr;gap:10px}.prod-fotos img{width:100%;height:100%;object-fit:cover;border-radius:18px;aspect-ratio:1/1}.prod-fotos .chicas{display:grid;gap:10px}" +
    ".prod-fotos .gr{position:relative}.prod-fotos .gr span{position:absolute;top:12px;left:12px;background:var(--fr);color:#fff;font-weight:800;font-size:13px;padding:8px 11px;border-radius:999px}" +
    ".prod .h2{margin:6px 0 4px}.prod-rat{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--ma);margin-top:6px}.prod-rat b{color:var(--ci)}" +
    ".packs{list-style:none;padding:0;margin:20px 0;display:grid;gap:10px}.pk{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px;padding:14px 16px;border:1.5px solid var(--li);border-radius:16px;text-decoration:none;position:relative;transition:border-color .2s,background .2s}" +
    ".pk:hover{border-color:var(--fr);background:var(--le)}.pk-n{width:46px;height:46px;border-radius:12px;background:var(--al);color:var(--fr);display:flex;align-items:center;justify-content:center;font-family:var(--disp);font-weight:800;font-size:22px}" +
    ".pk-t b{display:block;font-weight:800;font-size:16px}.pk-t span{font-size:13.5px;color:var(--ma)}.pk-p{text-align:right;line-height:1.15}.pk-p b{display:block;font-family:var(--disp);font-weight:800;font-size:19px}.pk-p s{font-size:13px;color:var(--ma)}" +
    ".pk-tab{position:absolute;top:-10px;right:14px;background:var(--ci);color:#fff;font-size:11.5px;font-weight:700;padding:5px 9px;border-radius:7px}" +
    ".off{display:inline-block;background:var(--fr);color:#fff;font-weight:800;font-size:11.5px;padding:3px 6px;border-radius:5px;margin-left:6px;vertical-align:middle}" +
    ".muestras{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 0}.muestras i{width:22px;height:22px;border-radius:999px;border:2px solid #fff;box-shadow:0 0 0 1.5px var(--li)}" +
    /* muro de opiniones */
    ".res-top{display:flex;flex-direction:column;align-items:center;gap:6px;margin-bottom:22px}.res-num{font-family:var(--disp);font-weight:800;font-size:52px;line-height:1}.res-base{font-size:14.5px;color:var(--ma)}.res-base b{color:var(--ci)}" +
    ".filtros{display:flex;gap:8px;overflow-x:auto;padding:2px 16px 4px;margin:0 -16px 18px;scrollbar-width:none;justify-content:flex-start}.filtros::-webkit-scrollbar{display:none}" +
    ".fil{flex:0 0 auto;display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 14px;border-radius:999px;border:1.5px solid var(--li);font-weight:600;font-size:14px;background:#fff;white-space:nowrap}.fil i{width:12px;height:12px;border-radius:999px}" +
    ".fil[aria-pressed='true']{background:var(--ci);border-color:var(--ci);color:#fff}" +
    ".muro{columns:1;column-gap:14px}.rc{break-inside:avoid;margin:0 0 14px;border:1.5px solid var(--ls);border-radius:18px;padding:12px 12px 16px;background:#fff;animation:ap .4s ease both}" +
    "@keyframes ap{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}" +
    ".rc-f{display:block;width:100%;aspect-ratio:1/1;border-radius:12px;overflow:hidden;margin-bottom:12px;cursor:zoom-in;background:var(--le)}.rc-f img{width:100%;height:100%;object-fit:cover;transition:transform .4s}.rc-f:hover img{transform:scale(1.04)}" +
    ".rc-q{display:flex;align-items:center;gap:9px;margin-top:10px}.av{width:34px;height:34px;border-radius:999px;background:var(--al);color:var(--fr);font-weight:800;display:flex;align-items:center;justify-content:center;flex:0 0 auto}" +
    ".rc-q b{display:block;font-size:14.5px;line-height:1.2}.rc-q small{display:block;font-size:12.5px;color:var(--ma)}.rc-t{font-weight:800;font-size:16px;margin:10px 0 4px;line-height:1.3}.rc-x{font-size:15px;line-height:1.55}" +
    ".rc-d{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}.rc-d span{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;background:var(--le);border-radius:999px;padding:4px 10px}.rc-d i{width:10px;height:10px;border-radius:999px}" +
    ".mas{display:flex;justify-content:center;margin-top:8px}" +
    /* asi la usan */
    ".usan{background:var(--ci);color:#fff}.usan .h2{color:#fff}.usan .sub{color:#E9D6DF}.usan .kick{color:var(--rm)}" +
    ".tira{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 16px 8px;margin:0 -16px;scrollbar-width:none}.tira::-webkit-scrollbar{display:none}" +
    ".ug{flex:0 0 62%;max-width:280px;scroll-snap-align:start;position:relative;border-radius:16px;overflow:hidden;aspect-ratio:1/1;cursor:zoom-in}.ug img{width:100%;height:100%;object-fit:cover}" +
    ".ug span{position:absolute;left:0;right:0;bottom:0;padding:30px 12px 10px;background:linear-gradient(transparent,rgba(47,26,38,.85));font-size:13px;font-weight:700;text-align:left;display:flex;align-items:center;gap:6px}.ug span i{width:10px;height:10px;border-radius:999px;border:1px solid #fff}" +
    ".tira-ctrl{display:flex;gap:10px;justify-content:center;margin-top:16px}.fl{width:44px;height:44px;border-radius:999px;border:1.5px solid rgba(255,255,255,.35);color:#fff;display:inline-flex;align-items:center;justify-content:center}.fl:hover{background:rgba(255,255,255,.12)}" +
    /* estadisticas */
    ".stats{display:grid;gap:16px}.st{border:1.5px solid var(--ls);border-radius:20px;padding:22px}.st .h3{display:flex;align-items:center;gap:10px;margin-bottom:6px}.st .h3 .ico{color:var(--fr)}.st>p{color:var(--ma);font-size:14.5px;margin-bottom:16px}" +
    ".provs{display:flex;flex-wrap:wrap;gap:7px}.provs span{font-size:13.5px;font-weight:700;background:var(--le);border-radius:999px;padding:6px 12px}" +
    ".barras{display:grid;gap:10px}.ba{display:grid;grid-template-columns:110px 1fr 28px;align-items:center;gap:10px;font-size:14px;font-weight:600}.ba-n{display:flex;align-items:center;gap:8px}.ba-n i{width:14px;height:14px;border-radius:999px;flex:0 0 auto}" +
    ".ba-b{height:10px;border-radius:999px;background:var(--ls);overflow:hidden}.ba-b i{display:block;height:100%;border-radius:999px;background:var(--fr);transform-origin:left;animation:crece 1s ease both}@keyframes crece{from{transform:scaleX(0)}}" +
    ".ba span:last-child{color:var(--ma);text-align:right}" +
    ".talles{display:flex;gap:8px;align-items:flex-end;height:120px}.tb{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end;font-size:13px;font-weight:700}.tb i{display:block;width:100%;border-radius:8px 8px 4px 4px;background:var(--al);transform-origin:bottom;animation:sube 1s ease both}.tb.top i{background:var(--fr)}@keyframes sube{from{transform:scaleY(0)}}" +
    /* problemas */
    ".probs{display:grid;grid-template-columns:1fr 1fr;gap:12px}.pb{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:1/1;text-decoration:none;color:#fff}.pb img{width:100%;height:100%;object-fit:cover;transition:transform .5s}.pb:hover img{transform:scale(1.05)}" +
    ".pb div{position:absolute;inset:auto 0 0 0;padding:34px 12px 12px;background:linear-gradient(transparent,rgba(47,26,38,.9))}.pb s{font-size:12.5px;opacity:.75;display:block}.pb b{font-size:15px;line-height:1.25;display:block;margin-top:2px}" +
    ".pb .x{position:absolute;top:10px;left:10px;width:30px;height:30px;border-radius:999px;background:var(--ci);display:flex;align-items:center;justify-content:center}.pb .x .ico{width:15px;height:15px;stroke-width:3}" +
    /* como comprar */
    ".pasos{list-style:none;padding:0;margin:0;display:grid;gap:12px;counter-reset:p}.pa{display:grid;grid-template-columns:52px 1fr;gap:4px 14px;padding:18px;border-radius:18px;background:var(--le)}" +
    ".pa-n{grid-row:span 2;width:52px;height:52px;border-radius:14px;background:#fff;color:var(--fr);display:flex;align-items:center;justify-content:center}.pa-n .ico{width:26px;height:26px}.pa b{font-size:16.5px;line-height:1.25}.pa p{color:var(--ma);font-size:14.5px}" +
    /* marca */
    ".marca{display:grid;gap:24px;align-items:center}.marca img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:20px}.marca ul{list-style:none;padding:0;margin:18px 0 0;display:grid;gap:10px}.marca li{display:flex;gap:10px;align-items:flex-start;font-weight:600}.marca li .ico{width:22px;height:22px;padding:4px;border-radius:999px;background:var(--al);color:var(--fr);stroke-width:3.2;margin-top:1px}" +
    /* faq */
    ".faq{max-width:760px;margin:0 auto}.faq details{border-bottom:1px solid var(--li)}.faq details:first-child{border-top:1px solid var(--li)}.faq summary{list-style:none;display:flex;justify-content:space-between;gap:14px;padding:17px 0;font-weight:700;cursor:pointer}.faq summary::-webkit-details-marker{display:none}" +
    ".faq summary .ico{color:var(--fr);transition:transform .2s}.faq details[open] summary .ico{transform:rotate(180deg)}.faq p{padding:0 0 18px;color:var(--ma)}" +
    /* cierre y pie */
    ".fin{position:relative;color:#fff;text-align:center;overflow:hidden;background:var(--ci)}.fin img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.38}.fin .in{position:relative;padding:80px 16px}.fin .h2{color:#fff}.fin p{margin:12px auto 24px;max-width:46ch;opacity:.9}" +
    ".pie{background:var(--ci);color:#F3E6EC;padding:40px 0 calc(90px + env(safe-area-inset-bottom));border-top:1px solid rgba(255,255,255,.08)}.pie svg{height:44px;width:auto}.pie p{font-size:14px;margin-top:12px;max-width:50ch}" +
    ".pie nav{display:flex;flex-wrap:wrap;gap:10px 20px;margin-top:18px}.pie nav a{color:#fff;font-size:14.5px;font-weight:600;text-decoration:underline;text-underline-offset:3px;text-decoration-color:rgba(255,255,255,.35)}.pie small{display:block;margin-top:18px;opacity:.7;font-size:13px}" +
    /* barra fija */
    ".barra{position:fixed;left:0;right:0;bottom:0;z-index:50;background:#fff;border-top:1px solid var(--li);box-shadow:0 -8px 24px -10px rgba(47,26,38,.18);padding:10px 16px calc(10px + env(safe-area-inset-bottom));transform:translateY(120%);transition:transform .28s}.barra.ver{transform:none}" +
    ".barra-in{max-width:720px;margin:0 auto;display:flex;align-items:center;gap:12px}.barra-in div{flex:1;line-height:1.2;min-width:0}.barra-in div b{display:block;font-size:14px}.barra-in div span{font-size:13px;color:var(--ma)}.barra .cta{min-height:50px;padding:0 20px;font-size:16px}" +
    /* aviso de prueba social */
    ".toast{position:fixed;left:12px;bottom:84px;z-index:60;display:flex;align-items:center;gap:10px;max-width:min(92vw,340px);background:#fff;border:1px solid var(--li);border-radius:14px;padding:8px 12px 8px 8px;box-shadow:0 14px 34px -14px rgba(47,26,38,.45);font-size:13px;line-height:1.3;opacity:0;transform:translateY(10px);transition:opacity .35s,transform .35s;pointer-events:none}" +
    ".toast.ver{opacity:1;transform:none;pointer-events:auto}.toast img{width:46px;height:46px;border-radius:10px;object-fit:cover}.toast b{font-weight:800}.toast small{display:block;color:var(--ma);margin-top:2px}" +
    /* visor y menu */
    ".visor{position:fixed;inset:0;z-index:90;background:rgba(24,12,19,.95);display:flex;align-items:center;justify-content:center;padding:60px 12px}.visor[hidden],.hoja[hidden]{display:none}.visor img{max-width:100%;max-height:100%;border-radius:12px}" +
    ".vx{position:absolute;top:12px;right:12px;width:44px;height:44px;border-radius:999px;background:rgba(255,255,255,.15);color:#fff;display:flex;align-items:center;justify-content:center}" +
    ".visor .cap{position:absolute;bottom:18px;left:0;right:0;text-align:center;color:#fff;font-size:14px;font-weight:600}" +
    ".hoja{position:fixed;inset:0;z-index:80;display:flex;align-items:flex-end;justify-content:center;background:rgba(47,26,38,.45)}.hoja-c{background:#fff;width:100%;max-width:560px;max-height:88vh;overflow:auto;border-radius:20px 20px 0 0;padding:14px 18px 26px}" +
    ".hoja-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}.hoja .vx{position:static;background:var(--le);color:var(--ci)}.hoja ul{list-style:none;padding:0;margin:0}.hoja li a{display:block;padding:13px 4px;border-bottom:1px solid var(--ls);font-weight:700;font-size:17px;text-decoration:none}" +
    ".hoja form{display:grid;gap:12px}.hoja input{height:52px;border-radius:14px;border:1.5px solid var(--li);padding:0 16px;font-size:16px}" +
    ".rev{opacity:0;transform:translateY(18px);transition:opacity .7s ease,transform .7s ease}.rev.si{opacity:1;transform:none}" +
    "@media (min-width:700px){.nums ul{grid-template-columns:repeat(4,1fr)}.muro{columns:2}.ug{flex-basis:32%}.stats{grid-template-columns:repeat(3,1fr)}.probs{grid-template-columns:repeat(4,1fr)}.pasos{grid-template-columns:repeat(2,1fr)}.hoja{align-items:center}.hoja-c{border-radius:20px}}" +
    "@media (min-width:960px){.sec{padding:84px 0}.in{padding:0 24px}.nav{display:flex}.cab-in{grid-template-columns:auto 1fr auto;gap:28px;padding:8px 24px;min-height:70px}.cab-in .logo{order:-1}.cab-in .izq{display:none}.logo svg{height:46px}" +
    ".hero-in{padding:0 24px 72px}.prod{grid-template-columns:1.1fr 1fr;gap:56px}.marca{grid-template-columns:1fr 1fr;gap:56px}.muro{columns:3}.ug{flex-basis:23%}.pasos{grid-template-columns:repeat(4,1fr)}.pa{grid-template-columns:1fr}.pa-n{grid-row:auto;margin-bottom:8px}.barra{display:none}.toast{bottom:20px;left:20px}}" +
    "@media (prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}.rev{opacity:1;transform:none}}";

  /* ---------- piezas ---------- */
  function cinta() {
    var m = (C.cinta || []).filter(Boolean);
    return m.length ? "<div class='cinta' role='status'><span data-z='cinta'>" + E(m[0]) + "</span></div>" : "";
  }
  function cabecera() {
    return "<header class='cab'><div class='cab-in'>" +
      "<div class='lado izq'><button class='cb' data-a='menu' aria-label='Menú'>" + I("menu") + "</button></div>" +
      "<a class='logo' href='/' aria-label='" + E(C.marca) + ", inicio'>" + logo(false) + "</a>" +
      "<nav class='nav' aria-label='Principal'><a href='" + E(C.urlProducto) + "'>Calza Biker</a><a href='#opiniones' data-a='ir'>Opiniones</a><a href='#comprar' data-a='ir'>Cómo comprar</a><a href='#preguntas' data-a='ir'>Preguntas</a></nav>" +
      "<div class='lado der'><button class='cb' data-a='buscar' aria-label='Buscar'>" + I("lupa") + "</button><a class='cb' href='/comprar/' aria-label='Carrito'>" + I("bolsa") + "</a></div>" +
      "</div></header>";
  }
  function hero() {
    var caras = OPS.filter(function (o) { return o.foto; }).slice(0, 5).map(function (o) { return "<img src='" + E(o.foto) + "' alt=''>"; }).join("");
    return "<section class='hero'><img src='" + E(C.fotos.hero) + "' alt='Clientas de M24 Sport caminando con sus calzas biker' fetchpriority='high'>" +
      "<div class='hero-in'>" +
      (CAL ? "<a class='hero-chip' href='#opiniones' data-a='ir'>" + estrellas(CAL.promedio, "cl") + "<b>" + dec(CAL.promedio) + "</b>" + (CAL.fuente ? "en " + E(CAL.fuente) : "· " + CAL.cantidad + " opiniones") + "</a>" : "") +
      "<h1 class='h1'>La biker que se mueve con vos</h1>" +
      "<p>Cintura cruzada, tiro alto y " + C.colores.length + " colores. Armá tu pack eligiendo el color y el talle de cada calza.</p>" +
      "<div class='hero-acc'><a class='cta' href='" + E(C.urlProducto) + "'>" + I("bolsa") + "Armá tu pack</a><a class='btn2' href='#opiniones' data-a='ir'>Ver opiniones</a></div>" +
      (caras ? "<div class='hero-caras'><span class='caras'>" + caras + "</span><span>Clientas en <b>" + PROV.length + " provincias</b> ya la usan</span></div>" : "") +
      "</div></section>";
  }
  function numeros() {
    var it = [];
    if (CAL) { it.push([dec(CAL.promedio) + "★", CAL.fuente ? "en " + CAL.fuente : "promedio"]); it.push([miles(CAL.cantidad), "opiniones de clientas"]); }
    if (PROV.length) { it.push([String(PROV.length), "provincias con clientas"]); }
    it.push([String(C.colores.length), "colores para combinar"]);
    if (MAX_OFF) { it.push(["-" + MAX_OFF + "%", "en el pack de " + PACKS[PACKS.length - 1].cantidad]); }
    it.push(["10 días", "para arrepentirte"]);
    return "<section class='nums' aria-label='M24 en números'><ul>" + it.slice(0, 4).map(function (x) {
      return "<li class='rev'><b>" + E(x[0]) + "</b><span>" + E(x[1]) + "</span></li>";
    }).join("") + "</ul></section>";
  }
  function producto() {
    return "<section class='sec'><div class='in prod'>" +
      "<div class='prod-fotos rev'><div class='gr'><img src='" + E(C.fotos.cintura) + "' alt='Detalle de la cintura cruzada en V' loading='lazy'>" + (MAX_OFF ? "<span>Hasta " + MAX_OFF + "% OFF</span>" : "") + "</div>" +
      "<div class='chicas'><img src='" + E(C.fotos.espalda) + "' alt='Costura en V en la espalda' loading='lazy'><img src='" + E(C.fotos.colores) + "' alt='Los colores de la calza' loading='lazy'></div></div>" +
      "<div class='rev'><span class='kick'>La más elegida</span><h2 class='h2'>" + E(C.nombreProducto) + "</h2>" +
      (CAL ? "<div class='prod-rat'>" + estrellas(CAL.promedio) + "<b>" + dec(CAL.promedio) + "</b> · " + miles(CAL.cantidad) + " opiniones</div>" : "") +
      "<p class='sub'>Desde <b>" + D(MIN_CU) + "</b> por calza. Cada una con su color y su talle: ideal para dividir con amigas.</p>" +
      "<div class='muestras' aria-label='Colores disponibles'>" + C.colores.map(function (c) { return "<i style='background:" + E(c.hex) + "' title='" + E(c.nombre) + "'></i>"; }).join("") + "</div>" +
      "<ul class='packs'>" + PACKS.map(function (p) {
        return "<li><a class='pk' href='" + E(C.urlProducto) + "'>" + (p.etiqueta ? "<span class='pk-tab'>" + E(p.etiqueta) + "</span>" : "") +
          "<span class='pk-n'>" + p.cantidad + "</span><span class='pk-t'><b>Llevá " + p.cantidad + (p.off ? "<span class='off'>" + p.off + "% OFF</span>" : "") + "</b><span>" + D(p.cu) + " cada una</span></span>" +
          "<span class='pk-p'><b>" + D(p.total) + "</b>" + (p.antes ? "<s>" + D(p.antes) + "</s>" : "") + "</span></a></li>";
      }).join("") + "</ul>" +
      "<a class='cta' href='" + E(C.urlProducto) + "'>Elegir colores y talles " + I("der") + "</a></div></div></section>";
  }

  /* muro de opiniones */
  var filtro = "todas", ver = 6;
  function lista() {
    return OPS.map(function (o, i) { return { o: o, i: i }; }).filter(function (x) { return filtro === "todas" || norm(x.o.color) === filtro; });
  }
  function tarjeta(o, i) {
    return "<article class='rc'>" + (o.foto ? "<button class='rc-f' data-v='" + i + "' aria-label='Ver foto de " + E(o.nombre) + "'><img src='" + E(o.foto) + "' alt='' loading='lazy'></button>" : "") +
      estrellas(o.estrellas || 5) + "<p class='rc-t'>" + E(o.titulo) + "</p><p class='rc-x'>" + E(o.texto) + "</p>" +
      "<div class='rc-q'><span class='av' aria-hidden='true'>" + E(o.nombre.charAt(0)) + "</span><div><b>" + E(o.nombre) + (o.edad ? ", " + o.edad : "") + "</b><small>" + E(o.ciudad || "") + "</small></div></div>" +
      "<div class='rc-d'>" + (o.talle ? "<span>Talle " + E(o.talle) + "</span>" : "") + (o.color ? "<span><i style='background:" + E(hexDe(o.color)) + "'></i>" + E(o.color) + "</span>" : "") + "</div></article>";
  }
  function muroHTML() {
    var l = lista();
    return "<div class='muro'>" + l.slice(0, ver).map(function (x) { return tarjeta(x.o, x.i); }).join("") + "</div>" +
      (l.length > ver ? "<div class='mas'><button class='btn2' data-a='mas'>Ver más opiniones (" + (l.length - ver) + ")</button></div>" : "");
  }
  function opiniones() {
    if (!OPS.length) { return ""; }
    var fil = [["todas", "Todas (" + OPS.length + ")", ""]].concat(COLS.map(function (c) { return [norm(c.k), c.k + " (" + c.n + ")", hexDe(c.k)]; }));
    return "<section class='sec' id='opiniones'><div class='in'><div class='cab-sec'><span class='kick'>Opiniones reales</span><h2 class='h2'>Lo que dicen las que ya la tienen</h2></div>" +
      (CAL ? "<div class='res-top rev'><span class='res-num'>" + dec(CAL.promedio) + "</span>" + estrellas(CAL.promedio, "g") +
        "<p class='res-base'>" + (CAL.fuente ? "Calificación en " + E(CAL.fuente) + " · " : "") + "<b>" + miles(CAL.cantidad) + "</b> opiniones</p></div>" : "") +
      "<div class='filtros' role='group' aria-label='Filtrar por color' data-z='filtros'>" + fil.map(function (f) {
        return "<button class='fil' data-f='" + E(f[0]) + "' aria-pressed='" + (filtro === f[0]) + "'>" + (f[2] ? "<i style='background:" + E(f[2]) + "'></i>" : "") + E(f[1]) + "</button>";
      }).join("") + "</div><div data-z='muro'>" + muroHTML() + "</div></div></section>";
  }
  function usan() {
    var f = OPS.filter(function (o) { return o.foto; });
    if (!f.length) { return ""; }
    return "<section class='sec usan'><div class='in'><span class='kick'>Así la usan</span><h2 class='h2'>Del gimnasio a la calle</h2>" +
      "<p class='sub' style='margin-bottom:24px'>Fotos de clientas de " + PROV.length + " provincias, cada una con su color y su talle.</p>" +
      "<div class='tira' data-z='tira'>" + f.map(function (o) {
        var i = OPS.indexOf(o);
        return "<button class='ug' data-v='" + i + "'><img src='" + E(o.foto) + "' alt='" + E(o.nombre + " con su calza " + o.color) + "' loading='lazy'><span><i style='background:" + E(hexDe(o.color)) + "'></i>" + E(o.nombre.split(" ")[0]) + " · " + E(o.ciudad) + "</span></button>";
      }).join("") + "</div><div class='tira-ctrl'><button class='fl' data-t='-1' aria-label='Anterior'>" + I("izq") + "</button><button class='fl' data-t='1' aria-label='Siguiente'>" + I("der") + "</button></div></div></section>";
  }
  function estadisticas() {
    if (OPS.length < 3) { return ""; }
    var maxC = COLS.length ? COLS[0].n : 1;
    var maxT = Math.max.apply(null, TALS.map(function (t) { return t.n; }).concat([1]));
    var ordenT = C.talles.map(function (t) { var x = TALS.filter(function (k) { return k.k === t; })[0]; return { k: t, n: x ? x.n : 0 }; });
    var edad = EDADES.length ? Math.min.apply(null, EDADES) + " a " + Math.max.apply(null, EDADES) + " años" : "";
    return "<section class='sec' style='background:var(--le)'><div class='in'><div class='cab-sec'><span class='kick'>Las clientas en datos</span><h2 class='h2'>Quiénes la eligen y cómo</h2>" +
      "<p class='sub'>Calculado a partir de las " + OPS.length + " opiniones con foto que publicamos.</p></div><div class='stats'>" +
      "<div class='st rev' style='background:#fff'><h3 class='h3'>" + I("pin") + "En todo el país</h3><p>Opiniones desde " + PROV.length + " provincias" + (edad ? ", de " + edad : "") + ".</p><div class='provs'>" + PROV.map(function (p) { return "<span>" + E(p.k) + "</span>"; }).join("") + "</div></div>" +
      "<div class='st rev' style='background:#fff'><h3 class='h3'>" + I("gota") + "Colores favoritos</h3><p>Los que más aparecen en las opiniones.</p><div class='barras'>" + COLS.map(function (c) {
        return "<div class='ba'><span class='ba-n'><i style='background:" + E(hexDe(c.k)) + "'></i>" + E(c.k) + "</span><span class='ba-b'><i style='width:" + Math.round(c.n / maxC * 100) + "%'></i></span><span>" + c.n + "</span></div>";
      }).join("") + "</div></div>" +
      "<div class='st rev' style='background:#fff'><h3 class='h3'>" + I("regla") + "Talles de S a XXL</h3><p>Los talles que pidieron las clientas que opinaron.</p><div class='talles'>" + ordenT.map(function (t) {
        return "<div class='tb" + (t.n === maxT ? " top" : "") + "'><span>" + t.n + "</span><i style='height:" + Math.max(6, Math.round(t.n / maxT * 80)) + "px'></i><span>" + E(t.k) + "</span></div>";
      }).join("") + "</div></div></div></div></section>";
  }
  function problemas() {
    var p = [["baja", "Te la pasás acomodándola", "Tiro alto y pretina ancha"], ["recta", "La pretina recta te corta", "Cintura cruzada en V"],
      ["roce", "El roce entre piernas", "Largo biker"], ["talle", "El talle es una lotería", "Talle elegido por calza"]];
    return "<section class='sec'><div class='in'><div class='cab-sec'><span class='kick'>Por qué cambiarse</span><h2 class='h2'>Chau a las quejas de siempre</h2><p class='sub'>Cada detalle de la biker responde a un problema de las calzas comunes.</p></div>" +
      "<div class='probs'>" + p.map(function (x) {
        return "<a class='pb rev' href='" + E(C.urlProducto) + "'><img src='" + E(C.fotos[x[0]]) + "' alt='' loading='lazy'><span class='x'>" + I("cruz") + "</span><div><s>" + E(x[1]) + "</s><b>" + E(x[2]) + "</b></div></a>";
      }).join("") + "</div></div></section>";
  }
  function comoComprar() {
    var p = [["bolsa", "Elegí tu pack", "3, 6 o 9 calzas. Cuantas más llevás, menos pagás cada una."],
      ["gota", "Color y talle de cada una", "Podés mezclar colores y talles para repartir con amigas."],
      ["candado", "Pagá seguro", "En el checkout de la tienda, con los medios de pago disponibles."],
      ["camion", "Recibila en casa", (C.envios || "Envíos") + ". Ves costo y tiempo poniendo tu código postal."]];
    return "<section class='sec' id='comprar' style='background:var(--le)'><div class='in'><div class='cab-sec'><span class='kick'>Fácil y rápido</span><h2 class='h2'>Cómo comprar</h2></div>" +
      "<ol class='pasos'>" + p.map(function (x) { return "<li class='pa rev'><span class='pa-n'>" + I(x[0]) + "</span><b>" + E(x[1]) + "</b><p>" + E(x[2]) + "</p></li>"; }).join("") + "</ol>" +
      "<div style='text-align:center;margin-top:28px'><a class='cta' href='" + E(C.urlProducto) + "'>Empezar mi pack</a></div></div></section>";
  }
  function marca() {
    return "<section class='sec'><div class='in marca'><img class='rev' src='" + E(C.fotos.colores) + "' alt='Clientas con calzas de distintos colores' loading='lazy'>" +
      "<div class='rev'><span class='kick'>Sobre " + E(C.marca) + "</span><h2 class='h2'>Ropa deportiva pensada para el cuerpo real</h2>" +
      "<p class='sub'>Empezamos con una idea simple: una biker que no haya que acomodar cada dos minutos y que se vea linda puesta. Diseñamos cada detalle para moverse, no para la percha.</p>" +
      "<ul>" + ["Pensada para entrenar, andar en bici o usar abajo de un vestido", "Sin rellenos ni frunces: el diseño hace el trabajo", "Comprás un pack y lo dividís con amigas", "10 días para arrepentirte de tu compra"].map(function (t) { return "<li>" + I("check") + "<span>" + E(t) + "</span></li>"; }).join("") + "</ul></div></div></section>";
  }
  function preguntas() {
    var w = wa();
    var f = [
      ["¿Hacen envíos a todo el país?", (C.envios || "Sí") + ". En el checkout ponés tu código postal y ves las opciones de envío con su costo y su tiempo."],
      ["¿Cómo puedo pagar?", "En el checkout de la tienda, con todos los medios de pago disponibles. Es un pago seguro."],
      ["¿Puedo devolver si no me gusta?", "Tenés 10 días corridos desde que la recibís para arrepentirte de la compra."],
      ["¿Puedo dividir el pack con amigas?", "Sí. En el pack cada calza lleva su propio color y talle, así cada una arma las suyas y pagan menos por calza."],
      ["¿Qué talle me conviene?", "Viene del S al XXL. En la página del producto tenés la guía de talles y lo que opinan las clientas sobre el calce."],
      ["¿Cómo la cuido?", "Lavala del revés con agua fría, sin suavizante, lavandina ni secarropas, y secala a la sombra."]
    ];
    return "<section class='sec' id='preguntas'><div class='in'><div class='cab-sec'><span class='kick'>Dudas</span><h2 class='h2'>Preguntas frecuentes</h2></div><div class='faq'>" +
      f.map(function (x) { return "<details><summary>" + E(x[0]) + I("abajo") + "</summary><p>" + E(x[1]) + "</p></details>"; }).join("") +
      (w ? "<p style='margin-top:18px;color:var(--ma)'>¿Otra duda? <a href='" + E(w) + "' target='_blank' rel='noopener' style='color:var(--fr);font-weight:700'>Escribinos por WhatsApp</a>.</p>" : "") +
      "</div></div></section>";
  }
  function cierre() {
    return "<section class='fin'><img src='" + E(C.fotos.hero) + "' alt='' loading='lazy'><div class='in'><h2 class='h2'>Sumate a las " + (CAL ? miles(CAL.cantidad) : "") + " que ya opinaron</h2>" +
      "<p>Armá tu pack con el color y el talle de cada calza. Desde " + D(MIN_CU) + " por calza.</p><a class='cta' href='" + E(C.urlProducto) + "'>" + I("bolsa") + "Armá tu pack</a></div></section>";
  }
  function pie() {
    var w = wa(), ig = String(C.instagram || "").replace(/^@/, "");
    return "<footer class='pie'><div class='in'>" + logo(true) + "<p>Calzas biker de cintura cruzada. " + E(C.envios || "") + ".</p><nav aria-label='Enlaces'>" +
      "<a href='" + E(C.urlProducto) + "'>Calza Biker</a><a href='/comprar/'>Carrito</a>" + (w ? "<a href='" + E(w) + "' target='_blank' rel='noopener'>WhatsApp</a>" : "") +
      (ig ? "<a href='https://www.instagram.com/" + E(ig) + "/' target='_blank' rel='noopener'>Instagram</a>" : "") + "</nav><small>© " + new Date().getFullYear() + " " + E(C.marca) + "</small></div></footer>";
  }
  function app() {
    return "<div class='app'>" + cinta() + cabecera() + "<main>" + hero() + numeros() + producto() + opiniones() + usan() + estadisticas() + problemas() + comoComprar() + marca() + preguntas() + cierre() + "</main>" + pie() +
      "<div class='barra' data-z='barra'><div class='barra-in'><div><b>Calza Biker · desde " + D(MIN_CU) + "</b><span>" + (CAL ? dec(CAL.promedio) + "★ · " + miles(CAL.cantidad) + " opiniones" : "") + "</span></div><a class='cta' href='" + E(C.urlProducto) + "'>Armá tu pack</a></div></div>" +
      "<div class='toast' data-z='toast' aria-live='polite'></div>" +
      "<div class='visor' data-z='visor' hidden role='dialog' aria-modal='true'><button class='vx' data-a='cerrar' aria-label='Cerrar'>" + I("cerrar") + "</button><img alt=''><p class='cap'></p></div>" +
      "<div class='hoja' data-z='hoja' hidden role='dialog' aria-modal='true'><div class='hoja-c'><div class='hoja-h'><b class='h3' data-z='hoja-t'></b><button class='vx' data-a='cerrar' aria-label='Cerrar'>" + I("cerrar") + "</button></div><div data-z='hoja-b'></div></div></div></div>";
  }

  /* ---------- interaccion ---------- */
  function conectar(R) {
    function z(n) { return R.querySelector("[data-z='" + n + "']"); }
    function bloquear(si) { document.documentElement.classList.toggle("m24-bloqueo", !!si); }
    function cerrar() { z("visor").hidden = true; z("hoja").hidden = true; bloquear(false); }
    function hoja(t, html) { z("hoja-t").textContent = t; z("hoja-b").innerHTML = html; z("hoja").hidden = false; bloquear(true); }
    function linksMenu() {
      var out = [], vistos = {};
      Array.prototype.forEach.call(document.querySelectorAll("header nav a, [data-store='navigation'] a, .js-desktop-nav a"), function (a) {
        if (a.closest("#m24-home")) { return; }
        var h = a.getAttribute("href"), t = (a.textContent || "").replace(/\s+/g, " ").trim();
        if (!h || !t || h === "#" || vistos[h + t]) { return; }
        vistos[h + t] = 1; out.push([h, t]);
      });
      return out.length ? out.slice(0, 30) : [["/", "Inicio"], [C.urlProducto, "Calza Biker"], ["/comprar/", "Carrito"]];
    }

    R.addEventListener("click", function (e) {
      var t = e.target.closest ? e.target : null;
      if (!t) { return; }
      var el;
      if ((el = t.closest("[data-f]"))) {
        filtro = el.getAttribute("data-f"); ver = 6;
        Array.prototype.forEach.call(R.querySelectorAll("[data-f]"), function (b) { b.setAttribute("aria-pressed", String(b === el)); });
        z("muro").innerHTML = muroHTML(); return;
      }
      if ((el = t.closest("[data-v]"))) {
        var o = OPS[+el.getAttribute("data-v")];
        var v = z("visor");
        v.querySelector("img").src = o.foto;
        v.querySelector("img").alt = "Foto de " + o.nombre;
        v.querySelector(".cap").textContent = o.nombre + " · " + o.ciudad + " · " + o.color + ", talle " + o.talle;
        v.hidden = false; bloquear(true); v.querySelector(".vx").focus(); return;
      }
      if ((el = t.closest("[data-t]"))) {
        var tira = z("tira"); var c = tira.querySelector(".ug");
        tira.scrollBy({ left: +el.getAttribute("data-t") * (c ? c.offsetWidth + 12 : 300), behavior: reducir ? "auto" : "smooth" }); return;
      }
      if (t.closest(".visor") && !t.closest("img")) { cerrar(); return; }
      if (t.classList.contains("hoja")) { cerrar(); return; }
      if ((el = t.closest("[data-a]"))) {
        var a = el.getAttribute("data-a");
        if (a === "mas") { ver += 6; z("muro").innerHTML = muroHTML(); }
        else if (a === "cerrar") { cerrar(); }
        else if (a === "ir") {
          e.preventDefault();
          var d = R.querySelector(el.getAttribute("href"));
          if (d) { d.scrollIntoView({ behavior: reducir ? "auto" : "smooth" }); }
        } else if (a === "menu") {
          hoja("Menú", "<ul>" + linksMenu().map(function (l) { return "<li><a href='" + E(l[0]) + "'>" + E(l[1]) + "</a></li>"; }).join("") + "</ul>");
        } else if (a === "buscar") {
          hoja("Buscar", "<form action='/search/' method='get' role='search'><input type='search' name='q' placeholder='¿Qué estás buscando?' aria-label='Buscar'><button class='cta' type='submit'>Buscar</button></form>");
          var i = R.querySelector(".hoja input"); if (i) { i.focus(); }
        }
      }
    });
    R.addEventListener("keydown", function (e) { if (e.key === "Escape") { cerrar(); } });

    /* cinta rotativa */
    var msgs = (C.cinta || []).filter(Boolean), ci = z("cinta");
    if (ci && msgs.length > 1) {
      var k = 0;
      setInterval(function () {
        ci.classList.add("sale");
        setTimeout(function () { k = (k + 1) % msgs.length; ci.textContent = msgs[k]; ci.classList.remove("sale"); }, 350);
      }, 4200);
    }

    /* aparicion al hacer scroll */
    var revs = R.querySelectorAll(".rev");
    if (window.IntersectionObserver && !reducir) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("si"); io.unobserve(en.target); } });
      }, { threshold: 0.12 });
      Array.prototype.forEach.call(revs, function (r) { io.observe(r); });
    } else { Array.prototype.forEach.call(revs, function (r) { r.classList.add("si"); }); }

    /* barra fija despues del hero */
    var barra = z("barra"), heroEl = R.querySelector(".hero"), finEl = R.querySelector(".fin");
    function medir() {
      var h = heroEl.getBoundingClientRect(), f = finEl.getBoundingClientRect(), alto = innerHeight;
      barra.classList.toggle("ver", h.bottom < 0 && !(f.top < alto && f.bottom > 0));
    }
    addEventListener("scroll", medir, { passive: true }); medir();

    /* aviso de prueba social: muestra opiniones reales del panel
       (lo que dijo cada clienta, nunca "compro hace X minutos") */
    var toast = z("toast"), fotos = OPS.filter(function (o) { return o.foto; });
    if (fotos.length && !reducir) {
      var n = 0;
      setTimeout(function rotar() {
        var o = fotos[n++ % fotos.length];
        toast.innerHTML = "<img src='" + E(o.foto) + "' alt=''><span><b>" + E(o.nombre.split(" ")[0]) + "</b> de " + E(o.ciudad) + " opinó sobre su calza " + E(o.color) + "<small>«" + E(o.titulo) + "» " + "★".repeat(o.estrellas || 5) + "</small></span>";
        toast.classList.add("ver");
        setTimeout(function () { toast.classList.remove("ver"); setTimeout(rotar, 9000); }, 5500);
      }, 7000);
    }
  }

  /* ---------- arranque con red de seguridad ---------- */
  var html = document.documentElement;
  html.classList.add("m24h-on");
  var st = document.createElement("style");
  st.id = "m24h-global";
  st.textContent = "html.m24h-on,html.m24h-on body{background:#fff!important;margin:0!important;padding:0!important}" +
    "html.m24h-on body>*:not(#m24-home):not([data-m24-ver]):not(script):not(style):not(link):not(noscript){display:none!important}" +
    "html.m24-bloqueo,html.m24-bloqueo body{overflow:hidden!important}#m24-home{display:block!important}";
  (document.head || html).appendChild(st);
  if (!document.getElementById("m24-fuentes")) {
    var f = document.createElement("link");
    f.id = "m24-fuentes"; f.rel = "stylesheet";
    f.href = "https://fonts.googleapis.com/css2?family=Anybody:wdth,wght@50..150,400..900&family=Figtree:wght@400;500;600;700;800&display=swap";
    (document.head || html).appendChild(f);
  }
  var montado = false;
  function soltar(m) {
    if (window.console) { console.warn("[M24 home] Se muestra la plantilla normal:", m); }
    html.classList.remove("m24h-on", "m24-bloqueo");
    var h = document.getElementById("m24-home"); if (h) { h.remove(); }
  }
  var seguro = setTimeout(function () { if (!montado) { soltar("tardó demasiado"); } }, 4000);
  function montar() {
    if (montado) { return; }
    try {
      var host = document.createElement("div");
      host.id = "m24-home";
      document.body.insertBefore(host, document.body.firstChild);
      var root = host.attachShadow({ mode: "open" });
      root.innerHTML = "<style>" + CSS + "</style>" + app();
      conectar(root);
      montado = true;
      clearTimeout(seguro);
    } catch (e) { clearTimeout(seguro); soltar(e && e.message); }
  }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", montar); } else { setTimeout(montar, 0); }
})();
