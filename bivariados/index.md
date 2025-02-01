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
    <li>
      <strong>Bondad de Ajuste</strong>: Evalúa la calidad del ajuste en modelos de regresión, examinando medidas de ajuste y análisis de residuos.
    </li>
  </ul>
  <p>
    A continuación se presenta una clasificación de las principales técnicas, con sus definiciones teóricas, fórmulas (usando notación LaTeX), definición de cada parámetro, supuestos, hipótesis y medidas de tamaño del efecto.
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
    Estas pruebas se utilizan para determinar si existen diferencias significativas en la media de una variable entre dos o más grupos. Es fundamental verificar rigurosamente los supuestos y reportar tanto la significación estadística como el tamaño del efecto, lo cual permite evaluar la relevancia práctica de los resultados.
  </p>
  <ul>
    <!-- Prueba t para muestras independientes -->
    <li>
      <strong>Prueba t para muestras independientes</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          Esta prueba compara las medias de dos grupos independientes para determinar si la diferencia observada es estadísticamente significativa. Se utiliza tanto en estudios experimentales como observacionales, siempre que las muestras sean independientes.
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0: \mu_1 = \mu_2\) (no existe diferencia en las medias de los dos grupos).</li>
          <li>\(H_a: \mu_1 \neq \mu_2\) (existe una diferencia significativa entre las medias).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Las observaciones son independientes.</li>
          <li>La variable en cada grupo se distribuye de forma normal (se recomienda evaluar la normalidad mediante pruebas como Shapiro-Wilk o gráficos Q-Q).</li>
          <li>Homogeneidad de varianzas (evaluable mediante la prueba de Levene). Si este supuesto se viola, se puede emplear el test de Welch.</li>
          <li>Tamaño muestral adecuado (usualmente \(n > 30\) por grupo, aunque existen métodos robustos para muestras pequeñas).</li>
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
          <em>Concepto:</em> El \(d\) de Cohen expresa la diferencia entre dos medias en términos de desviaciones estándar, permitiendo comparar la magnitud de la diferencia independientemente de la escala original. Se interpreta generalmente como:
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
          Se utiliza para comparar las medias de dos condiciones que provienen de la misma muestra (por ejemplo, mediciones pre y post intervención), permitiendo determinar si el cambio observado es estadísticamente significativo.
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0: \mu_d = 0\) (la diferencia promedio entre las condiciones es cero).</li>
          <li>\(H_a: \mu_d \neq 0\) (existe una diferencia significativa entre las condiciones).</li>
        </ul>
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
        <p>
          <em>Concepto:</em> Este valor mide la magnitud del cambio observado, expresándolo en unidades de la desviación estándar de las diferencias.
        </p>
      </details>
    </li>
    
    <!-- ANOVA One-Way Mejorado -->
    <li>
      <strong>ANOVA One-Way</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          El ANOVA One-Way es una técnica utilizada para comparar las medias de tres o más grupos independientes. Se parte de la idea de que la variabilidad total se puede descomponer en la variabilidad entre grupos y la variabilidad dentro de los grupos.
        </p>
        <p><strong>Modelo estadístico:</strong></p>
        <p>
          $$ y_{ij} = \mu + \alpha_j + \varepsilon_{ij} $$
          <br>
          <em>Donde:</em>
          <ul>
            <li>\(y_{ij}\): Valor observado en la \(i\)-ésima observación del grupo \(j\).</li>
            <li>\(\mu\): Media general de todas las observaciones.</li>
            <li>\(\alpha_j\): Efecto del grupo \(j\) (desviación respecto a la media general).</li>
            <li>\(\varepsilon_{ij}\): Error aleatorio, con media 0 y varianza \(\sigma^2\).</li>
          </ul>
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0: \alpha_1 = \alpha_2 = \dots = \alpha_k = 0\) (ningún grupo difiere de la media general).</li>
          <li>\(H_a:\) Al menos uno de los \(\alpha_j\) es distinto de cero (existe al menos una diferencia significativa entre los grupos).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li><strong>Independencia:</strong> Las observaciones deben ser independientes.</li>
          <li><strong>Normalidad:</strong> La variable dependiente se distribuye normalmente en cada grupo (verificable mediante pruebas como Shapiro-Wilk o gráficos Q-Q).</li>
          <li><strong>Homogeneidad de varianzas:</strong> Las varianzas en los diferentes grupos son iguales (se puede evaluar con la prueba de Levene, Bartlett o Brown-Forsythe).</li>
        </ul>
        <p><strong>Manejo de incumplimientos:</strong></p>
        <ul>
          <li><strong>Normalidad:</strong> Aplicar transformaciones o utilizar pruebas no paramétricas (por ejemplo, Kruskal-Wallis) si se detectan fuertes desviaciones.</li>
          <li><strong>Homogeneidad de varianzas:</strong> Emplear el ANOVA de Welch o métodos robustos si las varianzas difieren significativamente.</li>
        </ul>
        <p><strong>Fórmula del estadístico F:</strong></p>
        <p>
          $$ F = \frac{\text{MS}_{\text{between}}}{\text{MS}_{\text{within}}} $$
          <br>
          <em>Donde:</em>
          <ul>
            <li>\(\text{MS}_{\text{between}} = \dfrac{SS_{\text{between}}}{df_{\text{between}}}\) con \(df_{\text{between}} = k-1\).</li>
            <li>\(\text{MS}_{\text{within}} = \dfrac{SS_{\text{within}}}{df_{\text{within}}}\) con \(df_{\text{within}} = N-k\).</li>
            <li>\(SS_{\text{between}}\): Suma de cuadrados entre grupos.</li>
            <li>\(SS_{\text{within}}\): Suma de cuadrados dentro de los grupos.</li>
          </ul>
        </p>
        <p>
          Bajo \(H_0\), el estadístico \(F\) sigue una distribución \(F(df_{\text{between}}, df_{\text{within}})\).
        </p>
        <p><strong>Análisis post-hoc y contrastes planificados:</strong></p>
        <p>
          Si se rechaza \(H_0\), se recomienda aplicar pruebas post-hoc (por ejemplo, Tukey HSD, Bonferroni o Scheffé) para identificar qué grupos difieren. Alternativamente, se pueden definir contrastes planificados a priori para hipótesis específicas.
        </p>
        <p><strong>Tamaño del efecto:</strong></p>
        <ul>
          <li>
            <strong>Eta cuadrado (\( \eta^2 \)):</strong> 
            $$ \eta^2 = \frac{SS_{\text{between}}}{SS_{\text{total}}} $$
            <br>
            <em>Concepto:</em> Indica la proporción de la varianza total explicada por la variable de grupo. Se interpreta aproximadamente como 0.01 (efecto pequeño), 0.06 (efecto mediano) y 0.14 (efecto grande).
          </li>
          <li>
            <strong>Omega cuadrado (\( \omega^2 \)):</strong> 
            $$ \omega^2 = \frac{SS_{\text{between}} - (df_{\text{between}} \cdot MS_{\text{within}})}{SS_{\text{total}} + MS_{\text{within}}} $$
            <br>
            <em>Concepto:</em> Es una estimación corregida del tamaño del efecto, generalmente menos sesgada que el eta cuadrado.
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
          Mide la fuerza y dirección de la relación lineal entre dos variables cuantitativas. Es sensible a valores atípicos y requiere que las distribuciones individuales sean normales, además de cumplir la normalidad bivariada.
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0: \rho = 0\) (no existe correlación lineal entre las variables).</li>
          <li>\(H_a: \rho \neq 0\) (existe una correlación lineal significativa).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Relación lineal entre las variables.</li>
          <li>Normalidad univariante de cada variable y normalidad bivariada conjunta.</li>
          <li>Ausencia de valores atípicos extremos que puedan distorsionar la correlación.</li>
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
          \(r\) oscila entre \(-1\) y \(1\). Valores cercanos a \(-1\) o \(1\) indican una relación lineal fuerte (negativa o positiva), mientras que valores cercanos a \(0\) indican una relación débil o inexistente.
        </p>
        <p><strong>Tamaño del efecto:</strong> El valor de \(r\) o, de manera equivalente, el coeficiente de determinación \(r^2\) indica la proporción de varianza explicada.
        </p>
      </details>
    </li>
    
    <!-- Coeficiente de Spearman -->
    <li>
      <strong>Coeficiente de Spearman</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          Mide la relación monotónica entre dos variables utilizando los rangos de los datos, siendo apropiado cuando los datos son ordinales o no se cumple el supuesto de normalidad.
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0: \rho_s = 0\) (no existe correlación monotónica entre las variables).</li>
          <li>\(H_a: \rho_s \neq 0\) (existe una correlación monotónica significativa).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>La relación entre las variables debe ser monotónica (no necesariamente lineal).</li>
          <li>No se requiere normalidad de los datos.</li>
        </ul>
        <p><strong>Fórmula:</strong>  
          Se calcula aplicando la fórmula de Pearson a los rangos de \(x\) y \(y\).
        </p>
        <p><strong>Tamaño del efecto:</strong> El valor de \(\rho_s\) y su cuadrado indican la fuerza de la asociación en términos de rangos.
        </p>
      </details>
    </li>
    
    <!-- Regresión Lineal Simple -->
    <li>
      <strong>Regresión Lineal Simple</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          Este modelo estima la relación lineal entre una variable dependiente \(y\) y una variable independiente \(x\), permitiendo predecir \(y\) y analizar el efecto de \(x\) sobre \(y\).
        </p>
        <p><strong>Hipótesis para la pendiente:</strong></p>
        <ul>
          <li>\(H_0: \beta_1 = 0\) (la variable independiente no tiene efecto sobre \(y\)).</li>
          <li>\(H_a: \beta_1 \neq 0\) (la variable independiente influye significativamente en \(y\)).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Relación lineal entre \(x\) e \(y\).</li>
          <li>Independencia de los errores.</li>
          <li>Homoscedasticidad: la varianza de los errores es constante para todos los valores de \(x\).</li>
          <li>Normalidad de los errores (evaluable mediante gráficos Q-Q o pruebas específicas).</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ y = \beta_0 + \beta_1 x + \varepsilon $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(\beta_0\): Intercepto (valor de \(y\) cuando \(x=0\)).</li>
            <li>\(\beta_1\): Pendiente (cambio en \(y\) por unidad de cambio en \(x\)).</li>
            <li>\(\varepsilon\): Error aleatorio.</li>
          </ul>
        </p>
        <p><strong>Tamaño del efecto:</strong> Se suele interpretar mediante el coeficiente de determinación \( R^2 \), que indica la proporción de varianza de \(y\) explicada por \(x\), y mediante la significación del estadístico t asociado a \(\beta_1\).
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
          Esta prueba compara las frecuencias observadas con las frecuencias esperadas bajo la hipótesis de independencia entre dos variables categóricas. Se utiliza para evaluar si la distribución de una variable difiere según los niveles de otra.
        </p>
        <p><strong>Hipótesis:</strong></p>
        <ul>
          <li>\(H_0:\) Las dos variables son independientes.</li>
          <li>\(H_a:\) Existe una asociación significativa entre las variables (no son independientes).</li>
        </ul>
        <p><strong>Supuestos:</strong></p>
        <ul>
          <li>Las observaciones son independientes.</li>
          <li>Las frecuencias esperadas en cada celda deben ser generalmente mayores o iguales a 5. En tablas 2x2 se puede aplicar la corrección de Yates si es necesario.</li>
        </ul>
        <p><strong>Fórmula:</strong></p>
        <p>
          $$ \chi^2 = \sum \frac{(O - E)^2}{E} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(O\): Frecuencia observada en cada celda.</li>
            <li>\(E\): Frecuencia esperada en cada celda, calculada bajo \(H_0\).</li>
          </ul>
        </p>
        <p><strong>Tamaño del efecto (V de Cramer):</strong></p>
        <p>
          $$ V = \sqrt{\frac{\chi^2}{n(k-1)}} $$
          <br>
          Donde \(n\) es el tamaño muestral y \(k\) es el número mínimo de categorías entre filas y columnas.
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
    La bondad de ajuste evalúa qué tan bien un modelo de regresión predice la variable dependiente. Se utilizan indicadores como el coeficiente de determinación y el análisis de residuos para identificar posibles problemas en el modelo.
  </p>
  <ul>
    <li>
      <strong>Coeficiente de Determinación (\( R^2 \))</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          \( R^2 \) indica la proporción de la varianza total de la variable dependiente que es explicada por el modelo. Es una medida de la calidad del ajuste.
        </p>
        <p><strong>Ecuación:</strong></p>
        <p>
          $$ R^2 = 1 - \frac{SS_{\text{residual}}}{SS_{\text{total}}} $$
        </p>
        <p>
          <em>Donde:</em>
          <ul>
            <li>\(SS_{\text{residual}}\): Suma de cuadrados de los residuos (errores).</li>
            <li>\(SS_{\text{total}}\): Suma total de cuadrados (variación total de \(y\)).</li>
          </ul>
        </p>
        <p><strong>Interpretación:</strong>
          Valores cercanos a 1 indican un buen ajuste. En modelos con múltiples predictores se recomienda considerar el \(R^2\) ajustado.
        </p>
      </details>
    </li>
    <li>
      <strong>Análisis de Residuos</strong>
      <details>
        <summary>Detalles</summary>
        <p><strong>Definición teórica:</strong>
          Se examina la distribución de los residuos para detectar patrones que puedan indicar problemas con el modelo (como heteroscedasticidad, autocorrelación o la presencia de valores atípicos). Un buen modelo presenta residuos aleatorios sin tendencias sistemáticas.
        </p>
        <ul>
          <li>Los residuos deben distribuirse aleatoriamente alrededor de cero.</li>
          <li>Se debe evaluar la normalidad de los residuos (por ejemplo, mediante la prueba de Shapiro-Wilk o gráficos Q-Q).</li>
          <li>La homogeneidad de la varianza (homoscedasticidad) respalda la validez del modelo.</li>
        </ul>
      </details>
    </li>
  </ul>
</section>

<!-- Sección de Consideraciones Finales y Ejemplo Aplicado -->
<section class="contenido">
  <h2>Consideraciones Finales y Ejemplo Aplicado</h2>
  <p>
    La aplicación correcta de las técnicas bivariadas requiere:
  </p>
  <ul>
    <li>Verificar rigurosamente los supuestos de cada prueba.</li>
    <li>Definir claramente las hipótesis nula y alternativa.</li>
    <li>Interpretar no solo la significación estadística, sino también el tamaño del efecto.</li>
    <li>Evaluar la calidad del ajuste del modelo, en el caso de métodos de regresión.</li>
  </ul>
  <p>
    <strong>Ejemplo Aplicado:</strong><br>
    En un estudio sobre el impacto de un programa de intervención educativa, se evaluó el rendimiento académico de los estudiantes antes y después de la intervención mediante una prueba t para muestras relacionadas. Los resultados mostraron un valor de \( t \) significativo (\( p < 0.01 \)) y un tamaño del efecto de \( d = 0.65 \), sugiriendo un efecto mediano. Además, para comparar el rendimiento entre tres grupos (control, intervención A e intervención B), se aplicó un ANOVA One-Way, obteniéndose un \( \eta^2 = 0.12 \), lo que indica que el 12% de la varianza se explica por el tipo de intervención.
  </p>
</section>


