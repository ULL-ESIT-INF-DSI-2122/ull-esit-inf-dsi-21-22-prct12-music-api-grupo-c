# PRACTICA 12 - REST API

>Informe para la asignatura de Desarrollo de Sistemas Informáticos
>
>>**Grupo C** - **Última modificación**: 28/03/2022
>>
>>>[Alejandro Martín de León](alu0101015941@ull.edu.es)
>>>
>>>[Eric Dürr Sierra](alu0101027005@ull.edu.es)
>>>
>>>[Eric Fumero Arteaga](alu0101105741@ull.edu.es)
>>>
>>>[Jeff Pérez Frade](alu0101038520@ull.edu.es)

***

## [Enlace a la documentación generada con TypeDoc](http://dsi-p12-code-docs.surge.sh/modules.html)

## Indice

- [PRACTICA 12 - REST API](#practica-12---rest-api)
  - [Enlace a la documentación generada con TypeDoc](#enlace-a-la-documentación-generada-con-typedoc)
  - [Indice](#indice)
  - [Introducción](#introducción)
  - [Objetivos](#objetivos)
  - [Actividades previas](#actividades-previas)
  - [Elaboración de la práctica](#elaboración-de-la-práctica)
    - [Diseño y estructuración del proyecto](#diseño-y-estructuración-del-proyecto)
    - [Creación de las interfaces de los objetos de la aplicación](#creación-de-las-interfaces-de-los-objetos-de-la-aplicación)
    - [*Schema* y modelos de Mongoose](#schema-y-modelos-de-mongoose)
    - [controladores para cada sección de la API](#controladores-para-cada-sección-de-la-api)
    - [Implementación de los router para cada sección de la API](#implementación-de-los-router-para-cada-sección-de-la-api)
    - [Configuración e instanciación de la App de Express](#configuración-e-instanciación-de-la-app-de-express)
    - [Configuración, Ejecución y lanzamiento de los servicios](#configuración-ejecución-y-lanzamiento-de-los-servicios)
    - [Publicación en Heroku](#publicación-en-heroku)
    - [Creación de la base de datos en MongoDB Atlas](#creación-de-la-base-de-datos-en-mongodb-atlas)
    - [Pruebas con Thunder Client](#pruebas-con-thunder-client)
  - [Dificultades](#dificultades)
  - [Conclusiones](#conclusiones)
  - [Referencias](#referencias)
  - [Comandos npm del repositorio](#comandos-npm-del-repositorio)

***
## Introducción

En este informe se recoge el proceso deu implementación seguido y la gestión del trabajo en grupo durante el desarrollo de la API REST de la práctica 12. En dicha API REST se espera recoger, mediante un modelo CRUD, peticiones para cada una de las secciones concretas de la aplicación de Playlist de la práctica 7, contemplando concretamente rutas para los artistas, las canciones y las propias listas de reproducción.
***

## Objetivos

La API REST debe estar implementada y testeada mediante una colección de consultas de ***Thunder Client*** exportada en un JSON. Esta API REST debe a demás estar desplegada en un servidor de ***Heroku*** para su acceso *online* y debe conectarse a una base de datos en el servicio clpud de MongoDB Atlas.

Los objetivos concretos a la hora de finalizar las prácticas son:

- Implentación de un router para todas las peticiones relacionadas con las canciones y que clasifiquen bajo la ruta `/songs`
- Implentación de un router para todas las peticiones relacionadas con los artistas y que clasifiquen bajo la ruta `/artists`
- Implentación de un router para todas las peticiones relacionadas con las playlists y que clasifiquen bajo la ruta `/playlists`
- Una interfaz para definir los objetos Song en la base de datos
- Una interfaz para definir los objetos Artist en la base de datos
- Una interfaz para definir los objetos Playlist en la base de datos
- Un modelo de Mongoose para las canciones
- Un modelo de Mongoose para los artistas
- Un modelo de Mongoose para las playlist
- Un fichero de implementación de la aplicación de Express donde se incluyen las rutas y los módulos a usar (`app.ts`)
- Un fichero de instanciación y ejecución del servidor donde se inician los servicios de MongoDB y Express (`server.ts`)
- Todos los ficheros documentados mediante comentarios de ***Typedoc***
- Documentación generada y desplegada como página web estática en Surge.sh
- La API desplegada en un servidor de Heroku y configurada para conectarse a la base de datos
- Una base de datos en el servicio en la nube MongoDB Atlas
- Un informe del proceso redactado y publicado en Github Pages
-
***
## Actividades previas

Dentro de las actividades previas, obviando las fases de creación del entorno del proyecto y aceptación de la tarea, se cumplen algunas reuniones iniciales para establecer los objetivos a cumplir y asignar las tareas de implementación.

La creación de una cuenta en los servicios de Heroku y MongoDB Atlas también se incluyen entre estas tareas junto con la creación de una base de datos concreta para esta práctica y una aplicación en heroku específica para alojar la API.

***

## Elaboración de la práctica

En la siguiente sección se describen los distintos pasos realizados para el desarrollo, pruebas y publicación de la API

### Diseño y estructuración del proyecto

El proyecto se construye de manera similar a los entornos de TypeScript que se han ido desarrollando para las prácticas de la asignatura, con lo cual tódo el código fuente se encuentra recogido bajo la carpeta `src/` y dentro de esta se han distinguido las secciones que componen el servicio en su totalidad.

Se dividen la configuración de la aplicación express y el lanzamiento del servidor en dos ficheros distintos para mejorar la modularización del proyecto. De esta manera en el fichero `app.ts` sólo se crea una instancia de Express, se incluyen los paquetes a utilizar y se recogen todas las rutas de la aplicación.

Por otro lado, el fichero `server.ts` permite configurar y lanzar una instancia de MongoDB a la par que se incluye la aplicación de Express exportada desde el fichero `app.ts` para lanzar su ejecución.

Todos los componentes relativos a la ejecución de las peticiones a la API se han separado en:

- `controllers`: donde se separa la lógica de negocio y de tratamiento de datos para procesar mediante promesas cada una de las peticiones en un objeto único para cada una de las rutas
- `models`: en este directorio se recopilan las interfaces y modelos para configurar y construir con Mongoose las colleciones de la base de datos
- `routes`: Todos los ficheros para representar las rutas de la aplicación se reunen bajo este directorio y permiten gestionar individualmente cada uno de los tipos de operaciones HTTP y la ruta y controlador al que se asignan.

Este diseño, en su conjunto, permite una mejor visión general de cómo se comunican los elementos que constituyen la API. Se opta por modularizar de esta manera el repositorio principalmente por la limpieza de código que aporta.

### Creación de las interfaces de los objetos de la aplicación

### *Schema* y modelos de Mongoose

### controladores para cada sección de la API

### Implementación de los router para cada sección de la API

### Configuración e instanciación de la App de Express

La app de Express, individualmente, debe recoger todos los aspectos puramente relacionados con el back-end y que gestionan íntegramente la API, es decir que se excluyen los modelos de la base de datos, las configuraciones, las implementaciones de clases e interfaces o, en general, cuaquier otro aspecto externo.

En primer lugar la aplicación se constituye importando el paquete Express e instanciando en una variable un objeto de dicha clase

```TS
const app = express();
```

Tras esto se procede a la inclusión de paquete como el de `express.json()` que permite la interpretación automática de objetos JavaScript en formato JSON. Cualquier paquete que se quiera emplear deberá asignarse en esta sección haciendo uso de la sentencia `app.use(...)`.

Con la aplicación inicializada se puede configurar las rutas que serán parte de la API, en primer lugar una ruta raíz (`/`) se prepara para dar la bienvenida a la API y enviar código html que provea información de su uso. A partir de esta se recogen los distintos router implementados para las canciones, los artistas y las playlist. Al final de todas las rutas contempladas se aplica una sentencia que para cualquier otra ruta lance un error 404 que indique al cliente de la API que dicha ruta no existe.

```TS
                  ···
// API
app.get('/', (_: express.Request, res: express.Response) => {
  res.status(200).send('<h1>API PARA LA PRÁCTICA 12 - GRUPO C</h1>');
});

// app.use('/songs', songs);
app.use('/artists', artists);

                  ···

// Find 404
app.all('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(404).send();
  next();
});
                  ···
```

Es entonces cuando se puede exportar la variable creada para usarla como servicio.

Este esquema de configuración permite visualizar el workflow que sigue Express para crear una aplicación y, a su vez, ofrecer una visión limpia de la instancia de este tipo de objetos.

### Configuración, Ejecución y lanzamiento de los servicios

Los servicios son todos los elementos disponibles en el servidor para hacer funcionar el conjunto del ecosistema de la API. En este caso la aplicación de Express es uno de los servicios que, previamente, ha sido creado en un fichero a parte.

Por otro lado, el otro servicio a iniciar es la conexión con MongoDB ya sea en local o en MongoDB Atlas. Este servicio se ejecuta mediante una promesa que permite enviar un mensaje informando del estado de la ejecución en la consola del servidor

```TS
connect(uri, options)
  .then(() => {
    console.log(`Database connection successful at ${uri}`);
  })
  .catch((err) => {
    console.error(err.message);
  });
```

A su vez este fichero sirve para aplicar las configuraciones. Por ejemplo, las opciones de conexión de Mongoose (y de MongoDB) se definen de manera previa en una variable ConnectOptions. También se hace una asignación de la URI a utilizar en la base de datos en función de si existe la variable de entorno MAIN_DB_URL, que en caso negativo toma la uri por defecto que se espera para una base de datos de MongoDB local (`'mongobd://localhost:27017/'`). Con esto último se consigue separar los entornos de desarrollo y despliegue eprovechando bases de datos distintas. Se espera que la variable MAIN_DB_URL tenga asignada la URI proporcionada por MongoDB Atlas para conectarse desde Heroku.

```TS
// Database config | atlas environment var  OR  local DB for development
const uri: string = process.env.MAIN_DB_URL || 'mongodb://localhost:27017/';
```

Esta configuración añade además una capa de seguridad extra al ocultar las credenciales de acceso a la base de datos en MongoDB Atlas.

### Publicación en Heroku

### Creación de la base de datos en MongoDB Atlas

### Pruebas con Thunder Client

## Dificultades

- uso deprecado del método update() de mongoose
- espera a la aceptación de heroku en Github para aplicar las actions

***

## Conclusiones

***
## Referencias

***
[Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct12-music-api/)

[Documentación de mongoosejs](https://mongoosejs.com/docs/)

[Documentación de express](https://expressjs.com/en/starter/installing.html)

[Documentación de MongoDB Atlas](https://www.mongodb.com/docs/atlas/)

[Documentación de Heroku](https://devcenter.heroku.com/categories/reference)

## Comandos npm del repositorio

- npm run heroku-prebuild `hace la instalación previa de los paquetes necesarios para Heroku`
- npm run build `compila el código TypeScript`
- npm run start `lanza el servidor si ha sido compilado`
- npm run dev `compila en modo watch el código TypseCript y  lanza el servidor si se compila exitosamente`
- npm run docs `Genera la documentación de código con TypeDoc del código fuente`
