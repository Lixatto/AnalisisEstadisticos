<!-- index.md en la raíz -->
---
layout: default
title: "Mi Sitio en GitHub Pages - Inicio"
permalink: /
---

<!-- Sección Hero -->
<section class="hero">
  <h2>Bienvenido a mi primera web de análisis de datos</h2>
  <p>
    El propósito de esta web es compartir con todos aquellos que desean aprender y explorar 
    las definiciones, teoría y ejemplos prácticos sobre estadística y análisis de datos 
    aplicados a las Ciencias Sociales.
  </p>
  <a href="#secciones" class="btn-primario">Descubre más</a>
</section>

<!-- Contenido principal -->
<section class="contenido" id="secciones">
  <h2>¿Qué encontrarás aquí?</h2>
  <p>
    Esta web está organizada en tres grandes secciones de análisis estadísticos: 
    Univariados, Bivariados y Multivariados. En cada sección verás análisis descriptivos 
    e inferenciales, ejemplos y cómo reportar los resultados según APA 7ª edición.
  </p>

  <ul class="cards">
    <li class="card">
      <h3>Univariado</h3>
      <p>
        Se centra en evaluar una sola variable a la vez. Su objetivo es describir la 
        distribución, tendencia central y dispersión.
      </p>
      <a href="{{ '/univariado/' | relative_url }}" class="btn-secundario">Ver más</a>
    </li>
    <li class="card">
      <h3>Bivariado</h3>
      <p>
        Examina la relación entre dos variables para determinar si existe asociación 
        o dependencia.
      </p>
      <a href="{{ '/bivariado/' | relative_url }}" class="btn-secundario">Ver más</a>
    </li>
    <li class="card">
      <h3>Multivariado</h3>
      <p>
        Estudio simultáneo de tres o más variables para comprender relaciones más complejas.
      </p>
      <a href="{{ '/multivariado/' | relative_url }}" class="btn-secundario">Ver más</a>
    </li>
  </ul>
</section>

<section class="contenido">
  <h2>Próximamente</h2>
  <ul>
    <li>Análisis gráficos interactivos.</li>
    <li>Tutoriales paso a paso para aprender cada técnica.</li>
    <li>Recursos adicionales como libros, artículos y datasets.</li>
  </ul>
</section>
