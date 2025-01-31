---
layout: default
title: "Análisis Bivariado"
permalink: /bivariado/
---

<!-- Carga MathJax para mostrar ecuaciones en formato LaTeX -->
<script type="text/javascript" async
  src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script type="text/javascript" async
  id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<section class="contenido">
  <h2>Análisis Bivariado</h2>
  <p>
    El análisis bivariado se centra en explorar la relación entre dos variables. Dependiendo del objetivo del estudio, se puede abordar mediante técnicas de <strong>comparación de grupos</strong> o mediante la <strong>medición directa de la relación</strong> entre variables. A continuación se presenta una clasificación de las principales técnicas, detallando sus supuestos, fórmulas (usando notación LaTeX) y tamaños del efecto, lo que permite garantizar un análisis estadístico riguroso y una interpretación profunda de los resultados.
  </p>

  <ul class="cards">
    <li class="card">
      <h3>Comparación de Grupos</h3>
      <p>
        Evalúa si existen diferencias significativas en la media de una variable dependiente entre dos o más grupos.
      </p>
      <a href="#comparacion" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Técnicas de Relación</h3>
      <p>
        Cuantifica la fuerza y dirección de la asociación entre dos variables mediante técnicas correlacionales y de regresión.
      </p>
      <a href="#relacion" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Bondad de Ajuste</h3>
      <p>
        Evalúa el ajuste de los modelos de regresión y la calidad de la predicción, complementando el análisis estadístico.
      </p>
      <a href="#bondad" class="btn-secundario">Ver detalles</a>
    </li>
  </ul>
</section>

<!-- Sección de Comparación de Grupos -->
<section class="contenido" id="comparacion">
  <h2>Comparación de Grupos</h2>
  <p>
    En estudios comparativos se utilizan diversas pruebas estadísticas para determinar si existen diferencias entre grupos. Es fundamental verificar los supuestos y reportar el tamaño del efecto, lo que aporta información sobre la magnitud práctica de los hallazgos.
  </p>
  <ul>
    <li>
      <strong>Prueba t para muestras independientes</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Compara las medias de dos grupos independientes.</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Independencia de las observaciones.</li>
          <li>Normalidad en la distribución de la variable en cada grupo (además, se requiere que la distribución conjunta sea bivariante normal).</li>
          <li>Homogeneidad de varianzas (por ejemplo, evaluada mediante la prueba de Levene).</li>
          <li>Tamaño muestral adecuado (por lo general, \( n > 30 \) por grupo, aunque existen métodos robustos para muestras pequeñas).</li>
        </ul>
        <p><strong>Fórmula del estadístico t:</strong></p>
        <p>
          $$ t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} $$
        </p>
        <p><strong>Tamaño del efecto (d de Cohen):</strong></p>
        <p>
          $$ d = \frac{\bar{x}_1 - \bar{x}_2}{s_{\text{pooled}}} \quad \text{donde} \quad s_{\text{pooled}} = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}} $$
        </p>
        <p><strong>Interpretación de \(d\) de Cohen:</strong></p>
        <ul>
          <li>\(0.2\): Efecto pequeño</li>
          <li>\(0.5\): Efecto mediano</li>
          <li>\(0.8\) o mayor: Efecto grande</li>
        </ul>
      </details>
    </li>
    <li>
      <strong>Prueba t para muestras relacionadas (pareadas)</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Compara las medias de dos condiciones relacionadas (por ejemplo, mediciones repetidas en el mismo grupo).</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Normalidad en la distribución de las diferencias entre las mediciones.</li>
          <li>Independencia de las diferencias observadas.</li>
        </ul>
        <p><strong>Fórmula del estadístico t para muestras pareadas:</strong></p>
        <p>
          $$ t = \frac{\bar{d}}{s_d / \sqrt{n}} $$
          <br>
          donde:
          <br>
          \(\bar{d}\) = media de las diferencias,  
          \(s_d\) = desviación estándar de las diferencias,  
          \(n\) = número de pares.
        </p>
        <p><strong>Tamaño del efecto (d de Cohen para muestras pareadas):</strong></p>
        <p>
          $$ d = \frac{\bar{d}}{s_d} $$
        </p>
      </details>
    </li>
    <li>
      <strong>ANOVA One-Way</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Compara las medias de tres o más grupos independientes.</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Independencia de las observaciones.</li>
          <li>Normalidad en la distribución de la variable dependiente en cada grupo.</li>
          <li>Homogeneidad de varianzas entre los grupos.</li>
        </ul>
        <p><strong>Estadístico F:</strong></p>
        <p>
          $$ F = \frac{\text{MS}_{\text{between}}}{\text{MS}_{\text{within}}} $$
        </p>
        <p><strong>Tamaño del efecto:</strong></p>
        <ul>
          <li>
            <strong>Eta cuadrado (\( \eta^2 \)):</strong> Indica la proporción de varianza total explicada por el factor.
            <br><em>Interpretación:</em> \(0.01\) (efecto pequeño), \(0.06\) (efecto mediano), \(0.14\) (efecto grande).
          </li>
          <li>
            <strong>Omega cuadrado (\( \omega^2 \)):</strong> Ofrece una estimación menos sesgada del efecto.
            <br><em>Fórmula aproximada:</em>
            $$ \omega^2 = \frac{\text{SS}_{\text{between}} - (\text{df}_{\text{between}} \cdot \text{MS}_{\text{within}})}{\text{SS}_{\text{total}} + \text{MS}_{\text{within}}} $$
          </li>
        </ul>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Técnicas de Relación -->
<section class="contenido" id="relacion">
  <h2>Técnicas de Relación</h2>
  <p>
    Las técnicas para medir la relación entre dos variables permiten cuantificar la fuerza y la dirección de la asociación, lo cual es fundamental para interpretar la naturaleza del vínculo entre ellas.
  </p>
  <ul>
    <li>
      <strong>Coeficiente de Pearson</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Evalúa la fuerza y dirección de la relación lineal entre dos variables cuantitativas.</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Existencia de una relación lineal entre las variables.</li>
          <li>Normalidad univariada de cada variable.</li>
          <li>Normalidad bivariada: la combinación conjunta de las variables debe seguir una distribución normal.</li>
          <li>Ausencia de valores atípicos extremos que puedan distorsionar la correlación.</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \, \sum (y - \bar{y})^2}} $$
        </p>
        <p><strong>Interpretación:</strong>  
          El coeficiente \(r\) varía entre \(-1\) y \(1\). Valores cercanos a \(-1\) o \(1\) indican una relación lineal fuerte (negativa o positiva, respectivamente), mientras que valores cercanos a \(0\) indican una relación débil o nula.
        </p>
      </details>
    </li>
    <li>
      <strong>Coeficiente de Spearman</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Mide la relación monotónica entre dos variables, siendo adecuado para datos ordinales o cuando no se cumple la normalidad.</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>La relación entre las variables debe ser monotónica (no necesariamente lineal).</li>
          <li>No se requiere normalidad en los datos.</li>
        </ul>
        <p><strong>Fórmula:</strong> Se calcula a partir de los rangos de los datos, lo que reduce la influencia de valores extremos.</p>
      </details>
    </li>
    <li>
      <strong>Regresión Lineal Simple</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Descripción:</strong> Modela la relación entre una variable dependiente y una variable independiente, permitiendo la predicción y el análisis del impacto de la variable predictora.</p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Linealidad en la relación entre las variables.</li>
          <li>Independencia de los errores.</li>
          <li>Homoscedasticidad: varianza constante de los errores a lo largo de la variable independiente.</li>
          <li>Normalidad de los errores.</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ y = \beta_0 + \beta_1 x + \varepsilon $$
        </p>
        <p><strong>Interpretación:</strong>  
          El coeficiente \(\beta_1\) indica el cambio promedio en la variable dependiente por cada unidad de cambio en la variable independiente.
        </p>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Bondad de Ajuste -->
<section class="contenido" id="bondad">
  <h2>Bondad de Ajuste en Modelos de Regresión</h2>
  <p>
    Además de analizar la significación estadística y los tamaños del efecto, es fundamental evaluar la bondad de ajuste del modelo. Esto se logra mediante el análisis de indicadores como el coeficiente de determinación y el examen de los residuos.
  </p>
  <ul>
    <li>
      <strong>Coeficiente de Determinación (\( R^2 \))</strong>
      <details>
        <summary>Detalles</summary>
        <p>
          <em>Ecuación:</em>
          $$ R^2 = 1 - \frac{SS_{\text{residual}}}{SS_{\text{total}}} $$
        </p>
        <p>
          <em>Interpretación:</em> Indica la proporción de varianza de la variable dependiente explicada por el modelo. Un \( R^2 \) alto sugiere un buen ajuste, aunque se debe evaluar en conjunto con otros criterios, especialmente en modelos complejos.
        </p>
      </details>
    </li>
    <li>
      <strong>Análisis de Residuos</strong>
      <details>
        <summary>Detalles</summary>
        <p>
          Se recomienda examinar la distribución y patrones de los residuos:
        </p>
        <ul>
          <li>Los residuos deben estar distribuidos de forma aleatoria, sin patrones sistemáticos.</li>
          <li>Se debe comprobar la normalidad de los residuos (por ejemplo, con una prueba de Shapiro-Wilk o un gráfico Q-Q).</li>
          <li>La homogeneidad de la varianza de los residuos refuerza la validez del modelo.</li>
        </ul>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Consideraciones Finales y Ejemplo Aplicado -->
<section class="contenido">
  <h2>Consideraciones Finales y Ejemplo Aplicado</h2>
  <p>
    La correcta aplicación de las técnicas bivariadas exige no solo la verificación rigurosa de los supuestos, sino también la presentación de los tamaños del efecto y la evaluación de la bondad de ajuste, lo que permite interpretar la relevancia práctica de los resultados más allá de la significación estadística.
  </p>
  <p>
    <strong>Ejemplo Aplicado:</strong><br>
    En un estudio sobre el impacto de un programa de intervención educativa, se evaluó el rendimiento académico de los estudiantes antes y después de la intervención utilizando la prueba t para muestras relacionadas. Los resultados indicaron un valor de \( t \) significativo (\( p < 0.01 \)) y un tamaño del efecto de \( d = 0.65 \), sugiriendo un efecto mediano. Además, para comparar el rendimiento entre tres grupos (control, intervención A e intervención B), se aplicó un ANOVA One-Way, que arrojó un \( \eta^2 = 0.12 \), lo que implica que el 12% de la varianza en el rendimiento académico se explica por el tipo de intervención.
  </p>
</section>

  </p>
</section>
