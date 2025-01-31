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
    El análisis bivariado se centra en explorar la relación entre dos variables. Dependiendo del objetivo del estudio, se puede abordar mediante:
  </p>
  <ul>
    <li>
      <strong>Comparación de grupos</strong>: Determina si existen diferencias significativas en la media de una variable dependiente entre dos o más grupos.
    </li>
    <li>
      <strong>Técnicas de relación</strong>: Cuantifican la fuerza y dirección de la asociación entre dos variables, ya sea mediante métodos correlacionales o de regresión.
    </li>
    <li>
      <strong>Asociación entre variables categóricas</strong>: Evalúa la relación entre variables cualitativas, utilizando pruebas como la chi-cuadrado.
    </li>
  </ul>
  <p>
    A continuación se presenta una clasificación de las principales técnicas, con sus definiciones teóricas, fórmulas (usando notación LaTeX), definición de cada parámetro, supuestos y tamaños del efecto.
  </p>
  <ul class="cards">
    <li class="card">
      <h3>Comparación de Grupos</h3>
      <p>
        Evalúa diferencias en las medias entre grupos.
      </p>
      <a href="#comparacion" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Técnicas de Relación</h3>
      <p>
        Miden la fuerza y dirección de la relación entre dos variables.
      </p>
      <a href="#relacion" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Asociación Categórica</h3>
      <p>
        Analiza la relación entre variables cualitativas.
      </p>
      <a href="#asociacion" class="btn-secundario">Ver detalles</a>
    </li>
    <li class="card">
      <h3>Bondad de Ajuste</h3>
      <p>
        Evalúa la calidad del ajuste en modelos de regresión.
      </p>
      <a href="#bondad" class="btn-secundario">Ver detalles</a>
    </li>
  </ul>
</section>

<!-- Sección de Comparación de Grupos -->
<section class="contenido" id="comparacion">
  <h2>Comparación de Grupos</h2>
  <p>
    Estas pruebas se utilizan para determinar si existen diferencias significativas en la media de una variable entre dos o más grupos. Se deben cumplir ciertos supuestos y, además, es importante reportar el tamaño del efecto para evaluar la relevancia práctica.
  </p>
  
  <ul>
    <!-- Prueba t para muestras independientes -->
    <li>
      <strong>Prueba t para muestras independientes</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Esta prueba compara las medias de dos grupos independientes para determinar si la diferencia observada es estadísticamente significativa. Se utiliza en estudios experimentales y observacionales cuando se asume que las dos muestras no están relacionadas.
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Las observaciones son independientes.</li>
          <li>La variable en cada grupo se distribuye de forma normal y, en conjunto, se asume normalidad bivariante.</li>
          <li>Homogeneidad de varianzas (se puede evaluar mediante la prueba de Levene).</li>
          <li>Tamaño muestral adecuado (usualmente \( n > 30 \) por grupo, aunque existen métodos robustos para muestras pequeñas).</li>
        </ul>
        <p><strong>Fórmula del estadístico t:</strong></p>
        <p>
          $$ t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(\bar{x}_1\) y \(\bar{x}_2\): Medias de los grupos 1 y 2, respectivamente.</li>
            <li>\(s_1^2\) y \(s_2^2\): Varianzas de los grupos 1 y 2.</li>
            <li>\(n_1\) y \(n_2\): Tamaños muestrales de cada grupo.</li>
          </ul>
        </p>
        <p><strong>Tamaño del efecto (d de Cohen):</strong></p>
        <p>
          $$ d = \frac{\bar{x}_1 - \bar{x}_2}{s_{\text{pooled}}} \quad \text{con} \quad s_{\text{pooled}} = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2}} $$
        </p>
        <p>
          <em>Definición:</em> El \(d\) de Cohen es una medida estandarizada que cuantifica la magnitud de la diferencia entre dos medias:
        </p>
        <ul>
          <li>\(d \approx 0.2\): Efecto pequeño.</li>
          <li>\(d \approx 0.5\): Efecto mediano.</li>
          <li>\(d \geq 0.8\): Efecto grande.</li>
        </ul>
      </details>
    </li>
    
    <!-- Prueba t para muestras relacionadas (pareadas) -->
    <li>
      <strong>Prueba t para muestras relacionadas (pareadas)</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Se utiliza para comparar las medias de dos condiciones que provienen de la misma muestra (por ejemplo, mediciones pre y post intervención). Permite determinar si el cambio en la variable de interés es estadísticamente significativo.
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Las diferencias entre las mediciones deben seguir una distribución normal.</li>
          <li>Las observaciones (diferencias) son independientes.</li>
        </ul>
        <p><strong>Fórmula del estadístico t para muestras pareadas:</strong></p>
        <p>
          $$ t = \frac{\bar{d}}{s_d/\sqrt{n}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(\bar{d}\): Media de las diferencias entre las dos mediciones.</li>
            <li>\(s_d\): Desviación estándar de las diferencias.</li>
            <li>\(n\): Número de pares.</li>
          </ul>
        </p>
        <p><strong>Tamaño del efecto (d de Cohen para muestras pareadas):</strong></p>
        <p>
          $$ d = \frac{\bar{d}}{s_d} $$
        </p>
      </details>
    </li>
    
    <!-- ANOVA One-Way -->
    <li>
      <strong>ANOVA One-Way</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          El ANOVA One-Way se utiliza para comparar las medias de tres o más grupos independientes para determinar si al menos uno de ellos difiere significativamente del resto. Se basa en la partición de la variabilidad total en componentes entre grupos y dentro de los grupos.
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Independencia de las observaciones.</li>
          <li>Normalidad en la distribución de la variable dependiente en cada grupo.</li>
          <li>Homogeneidad de varianzas entre los grupos.</li>
        </ul>
        <p><strong>Fórmula del estadístico F:</strong></p>
        <p>
          $$ F = \frac{\text{MS}_{\text{between}}}{\text{MS}_{\text{within}}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(\text{MS}_{\text{between}} = \dfrac{SS_{\text{between}}}{df_{\text{between}}}\): Media de los cuadrados entre grupos.</li>
            <li>\(\text{MS}_{\text{within}} = \dfrac{SS_{\text{within}}}{df_{\text{within}}}\): Media de los cuadrados dentro de los grupos.</li>
            <li>\(SS_{\text{between}}\): Suma de cuadrados entre grupos.</li>
            <li>\(SS_{\text{within}}\): Suma de cuadrados dentro de los grupos.</li>
            <li>\(df_{\text{between}}\) y \(df_{\text{within}}\): Grados de libertad correspondientes.</li>
          </ul>
        </p>
        <p><strong>Tamaño del efecto:</strong></p>
        <ul>
          <li>
            <strong>Eta cuadrado (\( \eta^2 \)):</strong> 
            $$ \eta^2 = \frac{SS_{\text{between}}}{SS_{\text{total}}} $$
            <br>
            <em>Interpretación:</em> \(0.01\) (efecto pequeño), \(0.06\) (efecto mediano), \(0.14\) (efecto grande).
          </li>
          <li>
            <strong>Omega cuadrado (\( \omega^2 \)):</strong> 
            $$ \omega^2 = \frac{SS_{\text{between}} - (df_{\text{between}} \cdot MS_{\text{within}})}{SS_{\text{total}} + MS_{\text{within}}} $$
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
    Estas técnicas cuantifican la fuerza y dirección de la asociación entre dos variables.
  </p>
  <ul>
    <!-- Coeficiente de Pearson -->
    <li>
      <strong>Coeficiente de Pearson</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Mide la fuerza y dirección de la relación lineal entre dos variables cuantitativas. Es sensible a valores atípicos y requiere que la distribución conjunta de las variables sea normal (normalidad bivariada).
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Relación lineal entre las variables.</li>
          <li>Normalidad univariada de cada variable y normalidad bivariada conjunta.</li>
          <li>Ausencia de valores atípicos extremos.</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \, \sum (y - \bar{y})^2}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(x\) y \(y\): Valores de las variables.</li>
            <li>\(\bar{x}\) y \(\bar{y}\): Medias de \(x\) y \(y\), respectivamente.</li>
          </ul>
        </p>
        <p><strong>Interpretación:</strong>  
          \(r\) varía entre \(-1\) y \(1\). Valores cercanos a \(-1\) o \(1\) indican una fuerte relación lineal (negativa o positiva, respectivamente), mientras que valores cercanos a \(0\) indican poca o ninguna relación lineal.
        </p>
      </details>
    </li>
    
    <!-- Coeficiente de Spearman -->
    <li>
      <strong>Coeficiente de Spearman</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Mide la relación monotónica entre dos variables mediante el uso de rangos. Es apropiado cuando los datos son ordinales o cuando no se cumple la normalidad.
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>La relación entre las variables debe ser monotónica (no necesariamente lineal).</li>
          <li>No requiere normalidad en los datos.</li>
        </ul>
        <p><strong>Fórmula:</strong>  
          Se calcula aplicando la fórmula de Pearson a los rangos de \(x\) y \(y\).
        </p>
      </details>
    </li>
    
    <!-- Regresión Lineal Simple -->
    <li>
      <strong>Regresión Lineal Simple</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Este modelo estima la relación lineal entre una variable dependiente \(y\) y una variable independiente \(x\). Permite la predicción y el análisis del efecto de \(x\) sobre \(y\).
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Relación lineal entre \(x\) e \(y\).</li>
          <li>Independencia de los errores.</li>
          <li>Homoscedasticidad: la varianza de los errores es constante para todos los valores de \(x\).</li>
          <li>Normalidad de los errores.</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ y = \beta_0 + \beta_1 x + \varepsilon $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(\beta_0\): Intercepto, el valor de \(y\) cuando \(x = 0\).</li>
            <li>\(\beta_1\): Pendiente, representa el cambio en \(y\) por cada unidad de cambio en \(x\).</li>
            <li>\(\varepsilon\): Error o perturbación aleatoria.</li>
          </ul>
        </p>
        <p><strong>Interpretación:</strong>  
          \(\beta_1\) indica el efecto promedio de \(x\) sobre \(y\). Un valor positivo implica una relación directa, mientras que uno negativo implica una relación inversa.
        </p>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Asociación entre Variables Categóricas -->
<section class="contenido" id="asociacion">
  <h2>Asociación entre Variables Categóricas</h2>
  <p>
    Cuando las variables son categóricas, se utiliza la prueba chi-cuadrado para determinar si existe una relación o asociación entre ellas.
  </p>
  <ul>
    <li>
      <strong>Prueba Chi-Cuadrado</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Esta prueba compara las frecuencias observadas con las frecuencias esperadas bajo la hipótesis de independencia entre dos variables categóricas. Se utiliza para evaluar si la distribución de una variable es diferente según los niveles de otra.
        </p>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Las observaciones son independientes.</li>
          <li>Las frecuencias esperadas en cada celda deben ser al menos 5 (o se debe aplicar una corrección en caso contrario).</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ \chi^2 = \sum \frac{(O - E)^2}{E} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(O\): Frecuencia observada en cada celda.</li>
            <li>\(E\): Frecuencia esperada en cada celda, calculada bajo la hipótesis de independencia.</li>
          </ul>
        </p>
        <p><strong>Medida del tamaño del efecto:</strong></p>
        <p>
          <em>V de Cramer:</em>
          $$ V = \sqrt{\frac{\chi^2}{n(k-1)}} $$
          <br>
          donde \(n\) es el tamaño muestral y \(k\) es el número mínimo de categorías entre filas y columnas.
        </p>
        <p><strong>Interpretación del V de Cramer:</strong></p>
        <ul>
          <li>\(V \approx 0.1\): Asociación débil.</li>
          <li>\(V \approx 0.3\): Asociación moderada.</li>
          <li>\(V \geq 0.5\): Asociación fuerte.</li>
        </ul>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Bondad de Ajuste -->
<section class="contenido" id="bondad">
  <h2>Bondad de Ajuste en Modelos de Regresión</h2>
  <p>
    La bondad de ajuste evalúa qué tan bien el modelo de regresión predice la variable dependiente. Se utilizan indicadores como el coeficiente de determinación y se analiza el comportamiento de los residuos.
  </p>
  <ul>
    <li>
      <strong>Coeficiente de Determinación (\( R^2 \))</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          \( R^2 \) indica la proporción de la varianza total de la variable dependiente que es explicada por el modelo. Es una medida de la calidad de la predicción.
        </p>
        <p><strong>Ecuación:</strong></p>
        <p>
          $$ R^2 = 1 - \frac{SS_{\text{residual}}}{SS_{\text{total}}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(SS_{\text{residual}}\): Suma de cuadrados de los residuos (errores).</li>
            <li>\(SS_{\text{total}}\): Suma total de cuadrados (variación total de la variable dependiente).</li>
          </ul>
        </p>
        <p><strong>Interpretación:</strong>  
          Valores cercanos a 1 indican un buen ajuste; sin embargo, en modelos complejos se recomienda analizar \( R^2 \) junto con otros criterios.
        </p>
      </details>
    </li>
    <li>
      <strong>Análisis de Residuos</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>  
          Se examina la distribución de los residuos para detectar patrones que puedan indicar problemas con el modelo (por ejemplo, heteroscedasticidad o valores atípicos). Un buen modelo muestra residuos aleatorios sin patrones evidentes.
        </p>
        <ul>
          <li>Los residuos deben distribuirse aleatoriamente.</li>
          <li>Se debe comprobar la normalidad de los residuos (prueba de Shapiro-Wilk o gráfico Q-Q).</li>
          <li>La homogeneidad de la varianza de los residuos respalda la validez del modelo.</li>
        </ul>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Consideraciones Finales y Ejemplo Aplicado -->
<section class="contenido">
  <h2>Consideraciones Finales y Ejemplo Aplicado</h2>
  <p>
    La aplicación correcta de las técnicas bivariadas requiere verificar de forma rigurosa los supuestos, interpretar adecuadamente los tamaños del efecto y evaluar la bondad de ajuste del modelo. Esto permite interpretar la relevancia práctica de los resultados, complementando la significación estadística.
  </p>
  <p>
    <strong>Ejemplo Aplicado:</strong><br>
    En un estudio sobre el impacto de un programa de intervención educativa, se evaluó el rendimiento académico de los estudiantes antes y después de la intervención utilizando la prueba t para muestras relacionadas. Los resultados mostraron un valor de \( t \) significativo (\( p < 0.01 \)) y un tamaño del efecto de \( d = 0.65 \), lo que sugiere un efecto mediano. Además, para comparar el rendimiento entre tres grupos (control, intervención A e intervención B), se aplicó un ANOVA One-Way, obteniéndose un \( \eta^2 = 0.12 \) (indicando que el 12% de la varianza se explica por el tipo de intervención).
  </p>
</section>

