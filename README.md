# Vue framework fundamentals
# ¿Qué es Vue?!
[Vue el framework para hacer frontend](00-Documents/vuejs.png)

**Vue.js**  (_también llamado Vue o VueJS_) es un  **framework progresivo**  Javascript para crear interfaces de usuario, o en otras palabras, se trata de una «capa» añadida a Javascript formada por herramientas, convenciones de trabajo y un lenguaje particular que nos permite crear aplicaciones de forma rápida, agradable, sencilla y muy práctica.

> La palabra  **Vue**  (_pronunciado «viú»_) viene del francés y significa «view» (_vista_), que es como se le denomina a la parte visual del modelo MVC, parte en la que se centran estos frameworks.

**Vue**  es un framework frontend, es decir, que si vienes de framework del estilo de  **Laravel**  (_PHP_),  **Ruby on rails**  (_Ruby_),  **Spring**  (_Java_) u otros framework de backend, te encontrarás múltiples diferencias. En los últimos años se ha popularizado la creación de   (_Single Page Application_), que es la categoría donde se encuentra Vue, React, Angular, etc...



# ¿Por qué elegir Vue?

Quizás, la pregunta más frecuente cuando hablamos de  **frameworks de Javascript**  es  **¿Por qué Vue y no otro framework?**  ¿Por qué no elegir React? ¿o Angular? ¿o Svelte? ¿o cualquier otro framework Javascript? La respuesta a esta pregunta no es clara y es muy subjetiva.

> **Vue**  es un framework que tiene varias características que lo definen principalmente. Si tu proyecto o finalidad encaja con dichas características,  **Vue**  será una buena elección para ti. Sin embargo, si no se ajusta a dichas características, quizás sea mejor analizar otros frameworks.

Las características de  **Vue**  son las siguientes:

-   La  **curva de aprendizaje**  es, con diferencia, la más sencilla de los tres frameworks más populares: React, Vue y Angular.
    
-   Se trata de un  **framework**  muy amigable y respetuoso con las tecnologías de frontend y los estándares. Utiliza HTML, CSS y Javascript y es compatible con WebComponents (_de hecho, sus componentes se basan en ellos_). Si eres desarrollador con base fuerte de HTML/CSS, muy probablemente te guste más  **Vue**  que otras opciones.
    
-   Se trata de un  **framework progresivo**. Esto significa que es ideal para migrar y adaptar proyectos existentes hechos en otras tecnologías y pasarlos poco a poco a  **Vue**. Algo muy común cuando trabajas en proyectos  **legacy**  (_la mayoría de los casos_).
    
-   A los desarrolladores que provienen de lenguajes o frameworks exclusivamente de  **backend**  están acostumbrados a ciertos patrones de programación que no son exactamente iguales en  **frontend**. Es aconsejable aprender ciertas bases de frontend general. Una buena base de Javascript también es muy recomendable.
    
-   **Vue**  le da mayor protagonismo al enfoque tradicional «centrado en  **HTML**» así como a los sistemas de plantillas. Si te gustan,  **Vue**  probablemente te resulte muy atractivo. Por otro lado, el enfoque de  **React**  se suele centrar más en programación pura en Javascript, utilizando HTML y CSS sólo como complementos que se añaden a Javascript.

# Directivas de Vue

Las  **directivas de Vue**  son atributos especiales que se colocan en las etiquetas HTML y están prefijados por  `v-`, como por ejemplo,  `v-for`,  `v-bind`  o  `v-on`, entre muchas otras. Estas directivas permiten realizar  **acciones dinámicas potentes**  (_bucles, condicionales, etc..._) que no se pueden realizar en HTML por si solo, pero que  **Vue**  permite utilizar en sus etiquetas  `<template>`.

![directivas](00-Documents/directivas.png)

Dichas  **directivas**  están formadas por varias partes:

-   **Directiva**: El nombre de la directiva, que a veces, es posible abreviarlo con un carácter.
-   **Argumento**: En ciertas directivas se indica un parámetro.
-   **Modificador**: En ciertas directivas se puede modificar el comportamiento.
-   **Valor**: En ciertas directivas, se requiere establecer un valor. Se escribe como el valor de un atributo HTML.
Existen varias  **directivas en Vue**, las he dividido en varios grupos e iremos profundizando en ellas a lo largo de los siguientes capítulos y temas:



|  Tipos de directivas  | Directivas | Descripción|
|--|--|--|
| **Directivas básicas** | `v-pre`,  `v-once`,  `v-model`... |Permite realizar tareas simples.|
|**Directivas condicionales**|`v-show`,  `v-if`,  `v-else`...|Permiten realizar acciones según condiciones.
|**Directivas de bucles**|`v-for`|Permiten realizar operaciones varias veces.
|**Directivas avanzadas**|`v-bind`,  `v-on`,  `v-slot`|Permiten realizar tareas más específicas.
|**Directivas personalizadas**||Directivas propias definidas por el usuario.

## Directivas básicas
| Directiva vue | Valor | Descripción|
|--|--|--|
|`v-text`|**Sí**|Equivalente a  `{{ texto }}`. Usa  `.textContent`  internamente.
|`v-html`|**Sí**|Inserta HTML en un elemento sin procesarlo. Usa  `.innerHTML`  internamente.
|`v-pre`|No|Mantiene las  `{{ templates }}`  del elemento intactas, sin renderizar.
|`v-once`|No|Renderiza las  `{{ templates }}`  solo la primera vez, y no lo hace más.
|`v-cloak`|No|Directiva que permanece hasta que la  `{{ template }}`  se renderiza con contenido.
|`v-model`|**Sí**|Enlaza el valor de una variable con un  `<input>`,  `<select>`,  `<textarea>`  o un componente.

# SPA: Single Page Application

En el lado opuesto se encuentran las páginas de tipo  **SPA**  (_Single Page Application_). Se trata de un enfoque más moderno, donde el navegador se descarga una versión mínima de  `.html`  junto a un  `.js`  que se encargará de controlar toda la web. Realizará peticiones de los archivos relacionados junto a peticiones a archivos  `.json`  o  `.js`  con más información o nuevos contenidos, que mostrará en el navegador parcial o completamente, pero sin la necesidad obligatoria de recargar la página completamente.

Este sistema se utiliza mayoritariamente para construir aplicaciones web como dashboards o sitios de gestión en los que no necesitamos «navegar» a través de una serie de páginas. Por ejemplo, páginas como WhatsApp Web, Twitter o Google Drive podrían ser ejemplos de  **SPA**.

> Las páginas de tipo  **SPA**  son las que utilizan en la mayoría de los frameworks de Javascript, como por ejemplo,  **React**,  **Vue**  o  **Angular**.





