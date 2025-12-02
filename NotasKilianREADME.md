Explicación rápida del código:

My componente “headerWrapper.jsx” es el que renderizará mi app
Por un lado “navbar” donde tenemos el título, los personajes y películas, y por otro el dropdown para favoritos.
También tenemos el outlet donde se renderiza la lista de personajes.

ItemCard renderiza cada “contenedor” de personaje con su id, nombre, imagen y botones (ver más/añadir a favoritos) y también usa la función “addFavorite” que almacenamos en nuestro store.

Navbar contiene el título y la posibilidad de ir a la ruta de personajes y la de películas, así como el dropdown donde se almacenan los personajes/peliculas de favoritos. Tambien hacemos uso de “remove_favorite” para eliminar con un botón lo que queramos de dicho dropdown.

En “helpers” tenemos las imágenes de los personajes y las películas. Las añadí como archivos porque no encontré ninguna api de las que hacer fetch, pero sería lo mismo al fin y al cabo.

En mis hooks tengo:
- useCharacters para fetchear los personajes
-useBlodalreducer para guardar en mi store las funciones  de añadir/quitar de favoritos y pasar los children correspondientes.

En images, las imágenes de cada personaje y peliculas

En pages:
-CharacterDetail= hago fetch de los datos que vemos en “view more” de cada personaje
-Characters= hago fetch de los nombres. Almaceno los filtrados con usestate, y un map para “filtrar” los personajes que quiero.
-Movies = lo mismo para las películas
Main será el archivo principal donde se monta la aplicación react.


IMPORTANTE: en item card, oculté el boton "view more" de movies porque no consegui fetchear información de las mismas, pero quería reutilizar el componente que usé para crear los personajes. Al final no tiene ciencia, fetcheo los datos que necesite y ya.