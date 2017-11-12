#Para el problema dado utilzé la librería jQuery
 
#En el maquetación del index.html, para generar el diseño responsive implementé bootstrap, flexbox
 y medias queries

#jQuery no me permitió generar dos vistas en un solo index; para solventar ese problema 
apliqué la función hide() de la librería generando en la primer vista, que al darle "click" en el título 
de los discos, se me ocultara el diseño de esta y me colocara el diseño de la segunda vista, que previamente
había planeado en un archivo .html aparte

#Tuve el problema del "Intercambio de Recursos de Origen Cruzado" inicialmente lo resolví instalando
 una extensión del chrome, que según entiendo anula la protección de los navegadores. Más tarde 
encontré la solución, generando un clon del index.json en la página
https://www.json-generator.com/.