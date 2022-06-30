# cbl-header-menu
El menu está compuesto por 2 barras de navegación:

cbl-menu-nav (o sidebar): barrar lateral izquierda donde está el menu principal con acceso a los diferentes módulos y un nav secundario con accesos a otras pantallas de menor importancia. El menú se puede desplegar o colapsar haciendo click en el isologo.

cbl-top-nav: barra superior con buscador, selector de empresas, accesos secundarios y menu de usuario.

El menú es completamente navegable mediante teclado, con tabulación. Además es 100% responsive.

## Archivos

<b>index.html</b>

Contiene todo el código html del menú. principalmente se puede encontrar los siguientes elementos:

cbl-top-nav: barra superior

cbl-menu-nav: barra lateral

cbl-usermenu-mobile: menu de usuario, solo se muestra en la vista mobile

cbl-content-wrapper: acá va todo el contenido de la app, es importante que esté!!

modalExchange: modal de Tipo de Cambio

<b>Carpeta "css"</b>

De acá solo hay que tener en cuenta style.css que son todos los estilos del menu, el resto de los css ya están incluidos en la app y se incluyeron en esta carpeta solo para simular el ambiente.

<b>Carpeta "fonts"</b>

Tampoco hay que tenerla en cuenta.

<b>Carpeta "img"</b>

Acá se encuentran los nuevos logos de Contabilium que se utilizan en el menú.

<b>Carpeta "js"</b>

Tener en cuenta solo el archivo "main.js", donde están todas las funciones que requiere el menú.


## Implementación

Tener en cuenta los archivos: <b>index.html</b>, <b>style.css</b>, <b>main.js</b> y la carpeta <b>img</b>

Tener en cuenta que el contenido debe ir dentro del div class="cbl-content-wrapper"

### Top banner

Actualmente se puede encontrar en el código de la siguiente manera:

```
<div class="cbl-top-banner">¡Validación de correo pendiente! Su cuenta se deshabilitará en las próximas 24 horas. <a href="">Actívela desde aquí</a></div>
```

¡¡¡Importante!!! Para ocultarla agregar la clase "hidden" al lado de cbl-top-banner. Además hay que quitar la clase "cbl-top-banner-visible" del body.

### Sugerencias del buscador

Se pueden agregar o quitar sugerencias del buscador desde el archivo <b>main.js</b>, donde se encuentra el listado de sugerencias.
El buscador utiliza Jquery Autocomplete (https://jqueryui.com/autocomplete/).

### Selector de empresas

El selector de empresas utiliza el plugin Select2.js.
¡¡¡Importante!!! Tener en cuenta que hay 2 selectores en el código, uno para la vista desktop y otro dentro de cbl-usermenu-mobile, para la vista mobile.

### Notificaciones

Se implementó un comportamiento para el contador de Notificaciones. Ahora la cantidad se ingresa de la siguiente forma con data-count:

```
<span class="cbl-icon-badge cbl-bg-danger" data-count="10"></span>
```

mediante Javascript se "imprime" en pantalla el número dependiendo del valor ingresado: si data-count es igual o menor a cero, no se mostrará; si data-count es igual o mayor a 100 se mostrará de la siguiente forma: "+99".

¡¡¡Importante!!! Tener en cuenta que el div "cbl-icon-badge" está 2 veces en el código, una para vista desktop y otra para vista mobile. Si se setea el data-count hay que hacerlo en ambos divs.


### Menu lateral

Tener en cuenta que se encuentra repetido, por lo tanto los links a las pantallas están presentes 2 veces en el código, una para la vista desktop y otra para mobile. Se hizo de esta forma ya que el menú para cada vista tiene diferente comportamiento.




