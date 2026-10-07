/* PUGA STUDIO · Comportamiento del sitio. El contenido vive en contenido.js. */
(function () {
  'use strict';
  var C = window.PUGA;
  var DISC = { 1: 'Sólidos', 2: 'Lo Interior', 3: 'Montañismo', 4: 'Taller de Sombras', 5: 'Circular' };
  var TONOS = ['t1', 't2', 't3', 't4', 't5', 't6'];
  var PROY = C.proyectos, TEXTOS = C.circular;
  var reducir = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function cat(p) { return DISC[p.disciplina] + ', ' + p.tipo; }
  function tono(i) { return TONOS[i % TONOS.length]; }
  /* Caja de foto: imagen real si hay ruta, si no un recuadro gris */
  function foto(src, i, alt) {
    var f = el('div', 'foto ' + (src ? 'con-img' : tono(i || 0)));
    if (src) { var im = el('img'); im.src = src; im.alt = alt || ''; im.loading = 'lazy'; im.decoding = 'async'; im.draggable = false; f.appendChild(im); }
    return f;
  }
  PROY.forEach(function (p, i) { p.i = i; });
  TEXTOS.forEach(function (t, i) { t.i = i; });

  /* Reloj CDMX */
  var reloj = $('reloj');
  function tick() {
    var d = new Date();
    try {
      var h = new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(d);
      var f = new Intl.DateTimeFormat('es-MX', { timeZone: 'America/Mexico_City', weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).format(d).replace(/,/g, '').replace('.', '');
      reloj.textContent = h + ' CDMX ' + f.charAt(0).toUpperCase() + f.slice(1);
    } catch (e) { reloj.textContent = d.toLocaleTimeString(); }
  }
  tick(); setInterval(tick, 1000);

  /* Etiqueta lima que sigue al cursor: cuadro = proyecto, círculo = texto */
  var etq = $('etiqueta'), etqTxt = $('etiqueta-txt');
  function conEtiqueta(node, texto, circulo) {
    node.addEventListener('mouseenter', function () { etqTxt.textContent = texto; etq.classList.toggle('circulo', !!circulo); etq.classList.add('on'); });
    node.addEventListener('mouseleave', function () { etq.classList.remove('on'); });
    node.addEventListener('mousemove', function (e) { etq.style.left = e.clientX + 'px'; etq.style.top = e.clientY + 'px'; });
  }

  /* ---------- Inicio ---------- */
  $('acerca').innerHTML = parrafos(C.acerca);
  [['retrato', C.retrato, 't4'], ['foto-equipo', C.fotoEquipo, 't2']].forEach(function (r) {
    if (!r[1].foto) { $(r[0]).hidden = true; return; } /* sin foto todavía: no se muestra */
    var f = foto(r[1].foto, 3, r[1].pie); f.style.aspectRatio = '4/5';
    var im = f.querySelector('img'); if (im) im.style.objectPosition = '50% 15%';
    $(r[0]).appendChild(f); $(r[0]).appendChild(el('p', 'cap', esc(r[1].pie)));
    $(r[0]).style.cursor = 'default';
  });
  /* Disciplinas: cada una abre el índice de proyectos filtrado */
  (C.disciplinas || []).forEach(function (d) {
    var a = el('a', '', '<span class="num">0' + d.num + '</span><span class="cuerpo"><b>' + esc(d.nombre) + '</b><span class="area">' + esc(d.area) + '</span><span class="txt">' + esc(d.texto) + '</span></span>');
    a.href = '#/proyectos';
    a.addEventListener('click', function () { setTimeout(function () { filtrar(d.num); $('indice-proyectos').hidden = false; }, 0); });
    var li = el('li'); li.appendChild(a); $('disciplinas').appendChild(li);
  });

  /* Flujo: proyectos y textos intercalados */
  var flujo = $('flujo'), formas = [['4/3', ''], ['4/5', 'w66'], ['3/2', ''], ['3/2', ''], ['4/5', 'w66'], ['4/3', 'w66']];
  /* Por ahora el inicio muestra solo los proyectos publicados (los textos de Circular aún no existen) */
  var orden = PROY.slice(0, 6).map(function (p) { return { p: p }; });
  orden.forEach(function (o, k) {
    var it = o.p || o.t, forma = formas[k % formas.length];
    var pz = el('a', 'pieza ' + forma[1]);
    pz.href = o.p ? '#/proyectos/' + it.slug : '#/circular/' + it.slug;
    pz.style.color = 'inherit'; pz.style.textDecoration = 'none';
    var f = foto(it.portada, it.i, o.p ? it.nombre : it.titulo); f.style.aspectRatio = forma[0];
    pz.appendChild(f);
    pz.appendChild(el('p', 'cap', '<b>' + esc(o.p ? it.nombre : it.titulo) + '</b><span class="g">' + esc(o.p ? cat(it) : it.fecha) + '</span>'));
    conEtiqueta(pz, o.p ? it.nombre : it.titulo, !o.p);
    flujo.appendChild(pz);
  });

  /* ---------- Contacto (vista propia y al final del inicio) ---------- */
  var tpl = $('tpl-contacto'), K = C.contacto;
  ['v-contacto', 'contacto-en-inicio'].forEach(function (id) {
    var n = tpl.content.cloneNode(true);
    var lineas = '<p>Correo: <a href="mailto:' + esc(K.correo) + '" style="color:inherit">' + esc(K.correo) + '</a></p>';
    if (K.instagram) lineas += '<p>Instagram: <a href="https://instagram.com/' + esc(K.instagram) + '" target="_blank" rel="noopener" style="color:inherit">@' + esc(K.instagram) + '</a></p>';
    lineas += '<p>Teléfono: <a href="tel:' + esc(K.telefono.replace(/\s/g, '')) + '" style="color:inherit">' + esc(K.telefono) + '</a></p><p>Estudio: ' + esc(K.estudio) + '</p>';
    n.querySelector('.datos-contacto').innerHTML = lineas;
    n.querySelector('.texto-contacto').textContent = K.texto;
    n.querySelector('.anio').textContent = new Date().getFullYear();
    var peg = n.querySelector('.pegaso');
    if (K.pegaso) { peg.style.border = '0'; var im = el('img'); im.src = K.pegaso; im.alt = 'Pegaso de Puga Studio'; im.style.cssText = 'width:100%;height:100%;object-fit:contain'; peg.appendChild(im); }
    else peg.hidden = true;
    $(id).appendChild(n);
  });
  document.querySelectorAll('.form-suscribe').forEach(function (f) {
    f.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = f.querySelector('input'), boton = f.querySelector('button'), msg = f.querySelector('.msg');
      var correo = input.value.trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) { msg.textContent = 'Revisa tu correo electrónico.'; return; }
      /* Lista "Newsletter" en Brevo (formulario "HTML simple") */
      var datos = new URLSearchParams({ EMAIL: correo, email_address_check: '', locale: 'es', html_type: 'simple' });
      boton.disabled = true; msg.textContent = 'Enviando…';
      fetch(K.newsletter, { method: 'POST', mode: 'no-cors', body: datos })
        .then(function () { input.value = ''; msg.textContent = 'Gracias, ya estás suscrito a nuestro newsletter.'; })
        .catch(function () { msg.textContent = 'No se pudo enviar. Intenta de nuevo en un momento.'; })
        .then(function () { boton.disabled = false; });
    });
  });

  /* ---------- Campos que se deslizan en diagonal ---------- */
  var POS = [[40,60,560,330],[680,20,560,250],[1300,70,230,300],[40,560,440,560],[620,460,500,600],[1220,520,300,460],[1180,1100,340,230],[560,1150,420,190]];
  var TW = 1580, TH0 = 1440;
  function crearCampo(id, items, render, ruta, circulo) {
    var campo = $(id), lienzo = campo.querySelector('.lienzo');
    var TH = TH0 * Math.max(1, Math.ceil(items.length / POS.length));
    var estado = { x: 0, y: 0, z: 1, pausa: false, arr: null, movio: false };
    for (var ty = 0; ty < 3; ty++) for (var tx = 0; tx < 3; tx++) {
      var tile = el('div', 'tile'); tile.style.cssText = 'left:' + tx * TW + 'px;top:' + ty * TH + 'px;width:' + TW + 'px;height:' + TH + 'px';
      items.forEach(function (it, i) {
        var p = POS[i % POS.length], fila = Math.floor(i / POS.length) * TH0, c = el('a', 'tarjeta');
        c.href = '#/' + ruta + '/' + it.slug; c.style.cssText = 'left:' + p[0] + 'px;top:' + (p[1] + fila) + 'px;width:' + p[2] + 'px;color:inherit;text-decoration:none';
        c.draggable = false;
        var f = foto(it.portada, i, ''); f.style.height = p[3] + 'px';
        c.appendChild(f); c.appendChild(el('p', 'cap', render(it)));
        c.addEventListener('click', function (e) { if (estado.movio) e.preventDefault(); });
        conEtiqueta(c, it.nombre || it.titulo, circulo);
        tile.appendChild(c);
      });
      lienzo.appendChild(tile);
    }
    campo.addEventListener('mouseenter', function () { estado.pausa = true; });
    campo.addEventListener('mouseleave', function () { estado.pausa = false; });
    campo.addEventListener('wheel', function (e) { e.preventDefault(); estado.x += e.deltaX * .8; estado.y += e.deltaY * .8; }, { passive: false });
    campo.addEventListener('pointerdown', function (e) { estado.arr = { x: e.clientX, y: e.clientY }; estado.movio = false; campo.classList.add('arrastrando'); });
    window.addEventListener('pointermove', function (e) {
      if (!estado.arr) return;
      var dx = e.clientX - estado.arr.x, dy = e.clientY - estado.arr.y;
      if (Math.abs(dx) + Math.abs(dy) > 4) estado.movio = true;
      estado.x -= dx / estado.z; estado.y -= dy / estado.z; estado.arr = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener('pointerup', function () { estado.arr = null; campo.classList.remove('arrastrando'); });
    estado.pintar = function () {
      var x = ((estado.x % TW) + TW) % TW + TW * .5, y = ((estado.y % TH) + TH) % TH + TH * .5;
      lienzo.style.transform = 'scale(' + estado.z + ') translate(' + (-x) + 'px,' + (-y) + 'px)';
    };
    return estado;
  }
  /* Si hay pocos proyectos se repiten para llenar el campo, sin dejar dos iguales juntos */
  function rellenar(items) {
    if (!items.length || items.length >= POS.length) return items;
    var mezcla = [0, 1, 2, 1, 2, 0, 1, 0];
    return POS.map(function (_, i) { return items[items.length <= 3 ? mezcla[i] % items.length : i % items.length]; });
  }
  var campos = {
    proyectos: crearCampo('campo-proyectos', rellenar(PROY), function (p) { return '<b>' + esc(p.nombre) + '</b><span class="g">' + esc(cat(p)) + '</span>'; }, 'proyectos', false),
    circular: crearCampo('campo-circular', TEXTOS, function (t) { return '<b>' + esc(t.titulo) + '</b><span class="g">' + esc(t.fecha) + '</span>'; }, 'circular', true)
  };
  var actual = 'inicio', ultimo = performance.now();
  function animar(t) {
    var dt = Math.min(64, t - ultimo); ultimo = t;
    var c = campos[actual];
    if (c && !rec.classList.contains('abierto')) { if (!c.pausa && !c.arr && !reducir) { c.x += dt * .028; c.y += dt * .022; } c.pintar(); }
    requestAnimationFrame(animar);
  }
  document.querySelectorAll('[data-zoom]').forEach(function (b) {
    b.addEventListener('click', function () { var c = campos[actual]; if (c) c.z = Math.max(.5, Math.min(1.6, c.z + (+b.dataset.zoom) * .2)); });
  });

  /* ---------- Índices ---------- */
  document.querySelectorAll('[data-indice]').forEach(function (b) {
    b.addEventListener('click', function () { var i = $(b.dataset.indice); i.hidden = !i.hidden; });
  });
  function filaIndice(num, nombre, extra, href) {
    var li = el('li'), a = el('a', '', '<span>' + esc(num) + '</span><span>' + esc(nombre) + '</span><span class="g">' + esc(extra) + '</span>');
    a.href = href; a.style.cssText = 'width:100%;display:grid;grid-template-columns:28px 1fr auto;gap:8px;padding:6px 0;border-bottom:1px solid var(--gris-barra);color:inherit;text-decoration:none';
    li.appendChild(a); return li;
  }
  var lista = $('lista-proyectos');
  function pintarLista(d) {
    lista.innerHTML = '';
    PROY.filter(function (p) { return d === 0 || p.disciplina === d; }).forEach(function (p) { lista.appendChild(filaIndice('0' + p.disciplina, p.nombre, p.tipo, '#/proyectos/' + p.slug)); });
  }
  function filtrar(d) {
    document.querySelectorAll('#indice-proyectos .nums button').forEach(function (x) { x.setAttribute('aria-pressed', String(+x.dataset.d === d)); });
    var info = (C.disciplinas || []).filter(function (x) { return x.num === d; })[0];
    $('nums-nombre').innerHTML = d === 0 ? 'Todas las disciplinas' : '<b>0' + d + ' ' + esc(DISC[d]) + '</b>' + (info ? '<span class="g">' + esc(info.area) + '</span>' : '');
    pintarLista(d);
  }
  pintarLista(0);
  document.querySelectorAll('#indice-proyectos .nums button').forEach(function (b) {
    b.addEventListener('click', function () { filtrar(+b.dataset.d); });
  });
  TEXTOS.forEach(function (t, i) { $('lista-circular').appendChild(filaIndice(i + 1, t.titulo, t.fecha, '#/circular/' + t.slug)); });

  /* ---------- Explorar ---------- */
  var fondo = $('explorar-fondo');
  PROY.concat(PROY).slice(0, 9).forEach(function (p, i) {
    var f = foto(p.portada, i, ''); f.style.cssText = 'position:absolute;left:' + ((i % 3) * 34 + 2) + '%;top:' + (Math.floor(i / 3) * 36 + 2) + '%;width:26%;height:' + (i % 2 ? 30 : 22) + '%';
    fondo.appendChild(f);
  });
  var buscar = $('buscar'), res = $('resultados');
  buscar.addEventListener('input', function () {
    var q = buscar.value.trim().toLowerCase(); res.innerHTML = '';
    if (!q) return;
    var hits = PROY.map(function (p) { return { n: p.nombre, s: cat(p), h: '#/proyectos/' + p.slug, txt: p.nombre + ' ' + cat(p) + ' ' + (p.ubicacion || '') + ' ' + (p.concepto || '') }; })
      .concat(TEXTOS.map(function (t) { return { n: t.titulo, s: 'Circular, ' + t.fecha, h: '#/circular/' + t.slug, txt: t.titulo + ' ' + t.cuerpo }; }))
      .filter(function (x) { return x.txt.toLowerCase().indexOf(q) > -1; });
    if (!hits.length) { res.appendChild(el('p', 'g', 'Sin resultados para “' + esc(buscar.value) + '”')); return; }
    hits.forEach(function (x) { var a = el('a', '', esc(x.n) + ' <span class="g">' + esc(x.s) + '</span>'); a.href = x.h; a.style.cssText = 'color:inherit;text-decoration:none'; res.appendChild(a); });
  });

  /* ---------- Recorrido horizontal ---------- */
  var rec = $('recorrido'), pista = $('pista'), prog = $('r-progreso'), volverA = 'inicio';
  /* prop = ancho/alto de la foto real: la caja respeta su forma sin recortarla */
  function panelImg(src, i, w, h, top, titulo, texto, prop) {
    var pnl = el('div', 'panel img'), caja = el('div', 'caja'), f = foto(src, i, titulo || texto);
    if (src && prop) {
      var frac = parseFloat(h) / 100, alto = 'calc((100vh - 190px) * ' + frac + ')';
      w = 'min(calc((100vh - 190px) * ' + (frac * prop).toFixed(3) + '), 88vw)';
      f.style.height = 'auto'; f.style.aspectRatio = String(prop); f.style.maxHeight = alto;
    } else f.style.height = h;
    pnl.style.width = 'calc(' + w + ' + 64px)';
    f.style.width = w; f.style.top = top; caja.appendChild(f); pnl.appendChild(caja);
    pnl.appendChild(el('div', 'pie', (titulo ? '<b>' + esc(titulo) + '</b>' : '') + '<p class="g">' + esc(texto) + '</p>'));
    return pnl;
  }
  /* Párrafos separados por línea vacía; **texto** se muestra en negritas */
  function parrafos(txt) {
    return String(txt || '').split(/\n\s*\n/).map(function (p) { return '<p>' + esc(p.trim()).replace(/\*\*(.+?)\*\*/g, '<b style="font-weight:600">$1</b>') + '</p>'; }).join('');
  }
  var MEDIDAS = [['54vw', '62%', '10%'], ['38vw', '72%', '0'], ['26vw', '52%', '22%'], ['46vw', '72%', '0'], ['30vw', '76%', '0']];
  function abrirRecorrido(titulo, cerrarTxt, paneles, conIndice) {
    pista.innerHTML = ''; paneles.forEach(function (p) { pista.appendChild(p); });
    $('r-titulo').textContent = titulo; $('r-cerrar').textContent = cerrarTxt; $('r-indice').hidden = !conIndice;
    pista.scrollLeft = 0; actualizarProg();
    rec.classList.add('abierto'); rec.setAttribute('aria-hidden', 'false'); etq.classList.remove('on');
    document.title = titulo + ' · Puga Studio';
  }
  function cerrarRecorrido() { rec.classList.remove('abierto'); rec.setAttribute('aria-hidden', 'true'); }
  function actualizarProg() { var max = pista.scrollWidth - pista.clientWidth; prog.style.width = (12 + (max > 0 ? pista.scrollLeft / max : 0) * 88) + '%'; }
  pista.addEventListener('scroll', actualizarProg);
  pista.addEventListener('wheel', function (e) { if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) { e.preventDefault(); pista.scrollLeft += e.deltaY; } }, { passive: false });
  $('r-cerrar').addEventListener('click', function () { location.hash = '#/' + (volverA === 'inicio' ? '' : volverA); });
  $('r-volver').addEventListener('click', function () { pista.scrollTo({ left: 0, behavior: reducir ? 'auto' : 'smooth' }); });
  document.querySelectorAll('#r-indice button').forEach(function (b) { b.addEventListener('click', function () { location.hash = '#/proyectos'; $('indice-proyectos').hidden = false; }); });

  function abrirProyecto(p) {
    var portada = el('div', 'panel portada', '<h1>' + esc(p.nombre) + '</h1>' + (p.anio ? '<div class="g">' + esc(p.anio) + '</div>' : '') + '<div class="g">' + esc(DISC[p.disciplina]) + '</div>');
    var filas = [['Estado', p.estado], ['Disciplina', '0' + p.disciplina + ' ' + DISC[p.disciplina]], ['Tipo', p.tipo], ['Ubicación', p.ubicacion], ['Equipo', p.equipo]]
      .filter(function (r) { return r[1]; }).map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join('');
    var ficha = el('div', 'panel ficha', '<table><tbody>' + filas + '</tbody></table>');
    var sig = PROY[(p.i + 1) % PROY.length];
    var fin = el('div', 'panel final'), s = el('a', 'siguiente', '<span class="g">Siguiente proyecto</span><b>' + esc(sig.nombre) + '</b><span class="g">' + esc(cat(sig)) + '</span>');
    s.href = '#/proyectos/' + sig.slug; s.style.cssText = 'color:inherit;text-decoration:none';
    var fs = foto(sig.portada, sig.i, sig.nombre); fs.style.aspectRatio = '1/1'; s.appendChild(fs); fin.appendChild(s);
    var paneles = [portada, panelImg(p.portada, p.i, '46vw', '72%', '0', 'El concepto.', p.concepto || '', p.portadaProp), ficha];
    if (p.texto) paneles.push(el('div', 'panel lectura', '<div class="fecha">Memoria del proyecto</div><div class="cuerpo">' + parrafos(p.texto) + '</div>'));
    (p.fotos || []).forEach(function (f, k) { var m = MEDIDAS[k % MEDIDAS.length]; paneles.push(panelImg(f.src, p.i + k + 1, m[0], m[1], m[2], f.titulo, f.texto, f.prop)); });
    paneles.push(fin);
    volverA = 'proyectos';
    abrirRecorrido(p.nombre, 'Cerrar proyecto', paneles, true);
  }
  function abrirTexto(t) {
    var portada = el('div', 'panel portada', '<h1>' + esc(t.titulo) + '</h1><div class="g">' + esc(t.fecha) + '</div>');
    var lectura = el('div', 'panel lectura', '<div class="fecha">Circular · ' + esc(t.fecha) + '</div><div class="cuerpo">' +
      parrafos(t.cuerpo) + '</div>');
    var paneles = [portada];
    if (t.portada) paneles.push(panelImg(t.portada, t.i, '40vw', '72%', '0', '', t.titulo));
    paneles.push(lectura);
    volverA = 'circular';
    abrirRecorrido(t.titulo, 'Cerrar texto', paneles, false);
  }
  function abrirOrigen() {
    var paneles = [el('div', 'panel portada', '<h1>Puga Studio</h1><div class="g">Nuestra historia</div>')];
    C.origen.forEach(function (o, k) { var m = MEDIDAS[(k + 4) % MEDIDAS.length]; paneles.push(panelImg(o.foto, k + 3, m[0], m[1], m[2], '', o.texto)); });
    abrirRecorrido('Puga Studio', 'Cerrar', paneles, false);
  }

  /* ---------- Navegación con direcciones (#/proyectos/casa-che-che) ---------- */
  var barra = $('barra');
  function mostrarVista(v) {
    document.querySelectorAll('.vista').forEach(function (s) { s.hidden = s.id !== 'v-' + v; });
    var vis = $('v-' + v);
    if (actual !== v) { vis.classList.remove('entra-abajo'); void vis.offsetWidth; vis.classList.add('entra-abajo'); }
    if ((v === 'inicio' || v === 'contacto') && actual !== v) vis.scrollTop = 0;
    document.querySelectorAll('.menu button').forEach(function (b) { if (b.dataset.ir === v) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current'); });
    barra.classList.toggle('lima', v === 'contacto');
    actual = v; etq.classList.remove('on');
  }
  function rutear() {
    var partes = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    var v = partes[0] || 'inicio', slug = partes[1];
    barra.classList.remove('abierta'); $('menu-btn').setAttribute('aria-expanded', 'false');
    if (v === 'origen') { volverA = actual === 'origen' ? 'inicio' : actual; abrirOrigen(); return; }
    if (!$('v-' + v)) v = 'inicio';
    mostrarVista(v);
    if (slug && v === 'proyectos') { var p = PROY.filter(function (x) { return x.slug === slug; })[0]; if (p) return abrirProyecto(p); }
    if (slug && v === 'circular') { var t = TEXTOS.filter(function (x) { return x.slug === slug; })[0]; if (t) return abrirTexto(t); }
    cerrarRecorrido();
    document.title = v === 'inicio' ? 'Puga Studio' : (v.charAt(0).toUpperCase() + v.slice(1)) + ' · Puga Studio';
    if (v === 'explorar') setTimeout(function () { buscar.focus(); }, 50);
  }
  document.querySelectorAll('[data-ir]').forEach(function (b) {
    b.addEventListener('click', function () { location.hash = b.dataset.ir === 'inicio' ? '#/' : '#/' + b.dataset.ir; });
  });
  $('menu-btn').addEventListener('click', function () { var o = barra.classList.toggle('abierta'); this.setAttribute('aria-expanded', String(o)); });
  var vInicio = $('v-inicio'), cIni = $('contacto-en-inicio');
  vInicio.addEventListener('scroll', function () { if (actual === 'inicio') barra.classList.toggle('lima', cIni.getBoundingClientRect().top < 60); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && rec.classList.contains('abierto')) $('r-cerrar').click(); });
  window.addEventListener('hashchange', rutear);
  rutear();
  requestAnimationFrame(animar);
})();
