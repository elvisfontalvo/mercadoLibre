<h1>MercadoLibre - Test Práctico - Frontend</h1>

<p>El proyecto cuenta con 2 aplicaciones independientes:
	<ul>
		<li>
			/api    ( localhost:9000 )  	<- El servidor  : Se encarga de los request a la API de MercadoLibre
		</li>
		<li>
			/client ( localhost:3000 ) 	<- El front-end : Las vistas y controladores.
		</li>
	</ul>
</p>
<h3>SERVIDOR</h3>
<p>
Es un servidor simple creado con Express en Express, con 2 servicios principales:
<ul>
	<li>
 		-Servicio de búsqueda por <b>query</b>. ( <i>/api/items?q={query}</i> )
 	</li>
 	<li>
 	 	-Servicio de búsqueda por <b>ID</b>. (<i>/api/items/:id</i>)
 	 </li>
</ul>
<p>
  - <b>Comandos</b>: 
  * npm start para iniciar el servidor

</p>
<h3>CLIENTE</h3>
<p>
El cliente esta hecho en ReactJS, y Bootstrap. Cuenta con 3 vistas principales:
<ul>
	<li><b>/</b> : Pantalla inicial, solo tiene la barra de busqueda.</li> 
	<li><b><i>/items?search=:q</i></b> : Resultados de busqueda</li>
	<li><b><i>/items/:id</i></b> : Detalle del productos.</li>
</ul>
- <b>Comandos</b>: 
  * npm start para iniciar la aplicación.
</p>

