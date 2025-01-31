---
layout: default
title: "Análisis Multivariado"
permalink: /multivariado/
---

<section class="contenido">
  <h2>Análisis Multivariado</h2>
  <p>
    El análisis multivariado permite examinar simultáneamente tres o más variables para detectar patrones, interacciones y estructuras complejas en los datos. Esta aproximación es esencial para explicar fenómenos en los que las variables actúan de manera conjunta, como ocurre en estudios de Ciencias Sociales, educación, salud y más.
  </p>

  <h3>Clasificación de Técnicas</h3>
  <p>
    Dentro del análisis multivariado distinguimos dos grandes grupos:
  </p>

  <ul class="cards">
    <li class="card">
      <h3>Técnicas de Independencia</h3>
      <p>
        Estas técnicas evalúan el efecto de variables independientes sobre una o más variables dependientes, suponiendo que cada variable actúa de forma separada. Se aplican, por ejemplo, cuando se desea medir el impacto individual de diversos factores.
      </p>
      <a href="#independencia" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Técnicas de Interdependencia</h3>
      <p>
        Aquí se exploran las relaciones simultáneas entre las variables, identificando patrones latentes y estructuras comunes. Son útiles cuando se busca entender cómo interactúan las variables en conjunto.
      </p>
      <a href="#interdependencia" class="btn-secundario">Ver detalles</a>
    </li>
  </ul>
</section>

<section class="contenido" id="independencia">
  <h2>Técnicas de Independencia</h2>
  <p>
    En este grupo se encuentran métodos que asumen efectos separados de cada variable:
  </p>
  <ul>
    <li>
      <strong>Regresión Lineal Múltiple</strong>:  
      Modela la relación entre una variable dependiente continua y varias independientes.
      <details>
        <summary>Detalles</summary>
        <p><em>Fórmula:</em> y = β₀ + β₁x₁ + β₂x₂ + ... + βₖxₖ + ε</p>
      </details>
    </li>
    <li>
      <strong>Regresión Logística Múltiple</strong>:  
      Se emplea cuando la variable dependiente es categórica (por ejemplo, éxito/fallo), estimando la probabilidad de ocurrencia de un evento.
      <details>
        <summary>Detalles</summary>
        <p>Interpretación en términos de odds ratios y logit.</p>
      </details>
    </li>
    <li>
      <strong>ANCOVA</strong>:  
      Combina análisis de varianza y regresión para comparar grupos mientras controla covariables.
      <details>
        <summary>Detalles</summary>
        <p>Permite ajustar el efecto de variables continuas al comparar grupos.</p>
      </details>
    </li>
    <li>
      <strong>MANOVA</strong>:  
      Extiende el ANOVA al incluir varias variables dependientes, evaluando diferencias multivariadas entre grupos.
      <details>
        <summary>Detalles</summary>
        <p>Útil para analizar el impacto de factores en conjunto sobre múltiples respuestas.</p>
      </details>
    </li>
  </ul>
</section>

<section class="contenido" id="interdependencia">
  <h2>Técnicas de Interdependencia</h2>
  <p>
    Estas técnicas estudian las relaciones simultáneas entre variables para identificar patrones y estructuras latentes:
  </p>
  <ul>
    <li>
      <strong>Análisis Factorial Exploratorio (AFE)</strong>:  
      Descubre la estructura subyacente de un conjunto de variables sin una hipótesis previa.
      <details>
        <summary>Detalles</summary>
        <p>Ideal para reducir la dimensionalidad y explorar patrones en datos complejos.</p>
      </details>
    </li>
    <li>
      <strong>Análisis Factorial Confirmatorio (AFC)</strong>:  
      Permite contrastar un modelo teórico específico de factores con la estructura observada en los datos.
      <details>
        <summary>Detalles</summary>
        <p>Valida la estructura factorial sugerida por la teoría.</p>
      </details>
    </li>
    <li>
      <strong>Teoría de Respuesta al Ítem (TRI)</strong>:  
      Evalúa la relación entre la habilidad del evaluado y las propiedades de cada ítem en test y cuestionarios.
      <details>
        <summary>Detalles</summary>
        <p>Fundamental en el desarrollo y validación de instrumentos de medición.</p>
      </details>
    </li>
    <li>
      <strong>Modelos de Ecuaciones Estructurales (SEM)</strong>:  
      Integran análisis factorial y regresión para modelar relaciones complejas entre variables observadas y latentes.
      <details>
        <summary>Detalles</summary>
        <p>Permiten probar modelos teóricos con múltiples relaciones simultáneas.</p>
      </details>
    </li>
    <li>
      <strong>Análisis de Clúster</strong>:  
      Agrupa observaciones en clusters (o grupos) basados en similitudes en múltiples variables.
      <details>
        <summary>Detalles</summary>
        <p>Se utilizan métodos como el clúster jerárquico o K-means para identificar grupos homogéneos.</p>
      </details>
    </li>
    <li>
      <strong>Análisis de Clases Latentes</strong>:  
      Identifica subgrupos no observados dentro de una población mediante patrones en las respuestas.
      <details>
        <summary>Detalles</summary>
        <p>Útil para segmentación y para identificar perfiles diferenciados en los datos.</p>
      </details>
    </li>
  </ul>
</section>

<section class="contenido">
  <h2>Consideraciones Finales y Caso Práctico</h2>
  <p>
    La selección de la técnica multivariada adecuada dependerá de la naturaleza de las variables y del objetivo del estudio. Mientras que las técnicas de independencia permiten evaluar efectos específicos, las de interdependencia ofrecen una visión integral de las relaciones entre variables.
  </p>
  <p>
    <strong>Caso Práctico:</strong>  
    En un estudio sobre el rendimiento académico, se podría utilizar una regresión lineal múltiple para evaluar cómo variables como el ambiente familiar, la calidad docente y la motivación influyen de forma individual en el desempeño. Paralelamente, el uso de SEM ayudaría a modelar las interrelaciones entre estos factores latentes y su impacto conjunto sobre el rendimiento.
  </p>
</section>
