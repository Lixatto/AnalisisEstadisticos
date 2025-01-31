---
layout: default
title: "Pruebas de Bondad de Ajuste"
permalink: /univariado/bondad/
---

<section class="contenido">
  <h2>Pruebas de Bondad de Ajuste</h2>
  <p>
    Las pruebas de bondad de ajuste (<em>Goodness-of-Fit Tests</em>) evalúan 
    en qué medida la distribución de una variable <strong>se ajusta</strong> 
    a un modelo teórico o distribución hipotética (p.e., Normal, Chi-Cuadrado, Poisson, etc.).
  </p>
  <p>
    En términos formales, se contrasta la hipótesis nula <em>“los datos 
    provienen de la distribución X”</em> contra la alternativa <em>“no se distribuyen según X”</em>. 
  </p>
  <p>
    A continuación, presentamos tres de las pruebas más comunes para datos univariados:
  </p>
  <ol>
    <li>Chi-Cuadrado para una muestra</li>
    <li>Kolmogorov-Smirnov (K-S)</li>
    <li>Shapiro-Wilk</li>
  </ol>
</section>

---

## 1. Chi-Cuadrado para una muestra

<section class="contenido">
  <h3>Concepto y fórmula</h3>
  <p>
    Esta prueba contrasta las <strong>frecuencias observadas</strong> con las 
    <strong>frecuencias esperadas</strong> según una distribución hipotética.
  </p>

  <pre><code>χ² = Σ ( (Oᵢ - Eᵢ)² / Eᵢ )

Donde:
- Oᵢ = frecuencia observada en la categoría i
- Eᵢ = frecuencia esperada en la categoría i
</code></pre>

  <details>
    <summary><strong>Supuestos / Condiciones de uso</strong></summary>
    <ul>
      <li>Frecuencias esperadas ≥ 5 por categoría.</li>
      <li>Cada observación debe entrar en una sola categoría.</li>
      <li>Las observaciones deben ser independientes.</li>
    </ul>
  </details>

  <details>
    <summary><strong>Ejemplo breve</strong></summary>
    <p>
      Se encuestó a 100 personas sobre su canal de comunicación preferido
      (Email, WhatsApp, Teléfono), con expectativas de 50%, 30%, y 20%. Se observaron
      45, 40 y 15 respuestas, respectivamente. 
    </p>

  <pre><code>χ² = ((45-50)²/50) + ((40-30)²/30) + ((15-20)²/20)</code></pre>
  </details>
</section>

---

## 2. Kolmogorov-Smirnov (K-S)

<section class="contenido">
  <h3>Definición del test K-S</h3>
  <p>
    Contrasta la <strong>distribución empírica</strong> contra una distribución teórica.
  </p>

  <pre><code>D = max | Fₙ(x) - F(x) |

Donde:
- Fₙ(x) = CDF empírica (muestral)
- F(x)  = CDF teórica (distribución hipotética)
</code></pre>

  <details>
    <summary><strong>Ejemplo de uso</strong></summary>
    <p>
      Se miden niveles de autoestima (escala 0-100) en 50 personas y se contrasta 
      con una distribución normal. Si el valor D es mayor al crítico, se rechaza la normalidad.
    </p>
  </details>
</section>

---

## 3. Shapiro-Wilk

<section class="contenido">
  <h3>Definición del test</h3>
  <p>
    Evalúa la normalidad de una muestra con tamaños pequeños o moderados.
  </p>

  <pre><code>W = ( Σ aᵢ x₍ᵢ₎ )² / Σ (x₍ᵢ₎ - x̄)²

Donde:
- x₍ᵢ₎ = valores ordenados de la muestra
- aᵢ   = coeficientes de normalidad
- x̄   = media muestral
</code></pre>

  <details>
    <summary><strong>Interpretación</strong></summary>
    <p>
      Si p-valor &lt; 0.05, la muestra <strong>no</strong> sigue una distribución normal.
    </p>
  </details>
</section>

---

## Consideraciones finales

<section class="contenido">
  <ul>
    <li><strong>Tamaño muestral:</strong> Algunas pruebas pierden poder en muestras pequeñas.</li>
    <li><strong>Visualización:</strong> Complementar con histogramas o gráficos Q-Q.</li>
    <li><strong>Distribuciones no clásicas:</strong> Existen pruebas específicas para distribuciones distintas a la normal.</li>
  </ul>
</section>

<section class="contenido">
  <p>
    <a href="{{ '/univariado/' | relative_url }}" class="btn-secundario">
      Volver al índice univariado
    </a>
  </p>
</section>
