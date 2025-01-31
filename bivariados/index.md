---
layout: default
title: "Análisis Bivariado"
permalink: /bivariado/
---

<section class="contenido">
  <h2>Análisis Bivariado</h2>
  <p>
    El análisis bivariado se centra en explorar la relación entre dos variables. Este enfoque permite identificar patrones, asociaciones y dependencias que resultan fundamentales para comprender fenómenos en las Ciencias Sociales, la economía, la salud, entre otros campos.
  </p>
  
  <h3>1. Comparación de Grupos</h3>
  <p>
    Cuando se desea comparar dos grupos (por ejemplo, varones y mujeres o antes y después de una intervención) se utilizan técnicas que contrastan sus medias o proporciones:
  </p>
  
  <details open>
    <summary><strong>Prueba T</strong></summary>
    <p>
      La <strong>Prueba T para muestras independientes</strong> evalúa si existen diferencias significativas entre las medias de dos grupos.
    </p>
    <pre><code>
t = (x̄₁ - x̄₂) / √((s₁²/n₁) + (s₂²/n₂))
    </code></pre>
    <p>
      Donde x̄₁ y x̄₂ son las medias, s₁ y s₂ las desviaciones estándar y n₁ y n₂ los tamaños muestrales.
    </p>
  </details>
  
  <details>
    <summary><strong>Análisis de Varianza (ANOVA)</strong></summary>
    <p>
      Cuando se comparan tres o más grupos, el ANOVA permite determinar si existen diferencias significativas entre las medias.
    </p>
  </details>
  
  <h3>2. Medición de la Relación</h3>
  <p>
    Estas técnicas buscan cuantificar la fuerza y dirección de la asociación entre dos variables.
  </p>
  
  <details open>
    <summary><strong>Correlación</strong></summary>
    <p>
      Se utilizan dos enfoques principales:
    </p>
    <ul>
      <li><strong>Coeficiente de Pearson</strong>: Mide la relación lineal entre dos variables cuantitativas.</li>
      <li><strong>Coeficiente de Spearman</strong>: Es útil cuando los datos no cumplen los supuestos de normalidad o son de tipo ordinal.</li>
    </ul>
    <pre><code>
r = Σ[(x - x̄)(y - ȳ)] / [√Σ(x - x̄)² * √Σ(y - ȳ)²]
    </code></pre>
  </details>
  
  <details>
    <summary><strong>Regresión</strong></summary>
    <p>
      La <strong>regresión lineal simple</strong> permite modelar la relación entre una variable dependiente y una independiente:
    </p>
    <pre><code>
y = β₀ + β₁x + ε
    </code></pre>
    <p>
      Asimismo, la <strong>regresión logística</strong> se utiliza cuando la variable dependiente es dicotómica (por ejemplo, sí/no).
    </p>
  </details>
  
  <h3>3. Asociación entre Variables Categóricas</h3>
  <p>
    Para explorar relaciones entre variables cualitativas se aplican pruebas de independencia:
  </p>
  
  <details open>
    <summary><strong>Chi-Cuadrado de Independencia</strong></summary>
    <p>
      Esta prueba contrasta las frecuencias observadas con las frecuencias esperadas, evaluando la independencia entre variables.
    </p>
    <pre><code>
χ² = Σ ((O - E)² / E)
    </code></pre>
    <p>
      Donde O representa las frecuencias observadas y E las frecuencias esperadas en cada categoría.
    </p>
  </details>
  
  <h3>4. Caso Práctico</h3>
  <p>
    <strong>Ejemplo:</strong> Supongamos que se desea estudiar la relación entre el nivel educativo (secundaria, universitaria, posgrado) y la satisfacción laboral (medida en una escala de 1 a 10). 
  </p>
  <ul>
    <li>Para comparar las medias de satisfacción laboral entre los tres grupos se puede aplicar un ANOVA.</li>
    <li>Si se quisiera medir la asociación entre una variable ordinal (nivel educativo) y una cuantitativa (satisfacción), se podría analizar la correlación por Spearman.</li>
  </ul>
  
  <p>
    Estas metodologías permiten extraer conclusiones sólidas sobre la relación entre las variables y orientar decisiones basadas en datos.
  </p>
  
</section>
