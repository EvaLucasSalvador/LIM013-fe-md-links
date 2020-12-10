# Markdown Links

## Índice

* [1. Descripción](#1-Descripción)
* [2. Diagrama de flujo](#2-Diagrama-de-flujo)
* [3. Documentación técnica de la librería](#6-Documentación-técnica-de-la-librería)
* [4. Instalación](#3-Instalación)
* [5. Aplicación](#4-Aplicación)
* [6. Contacto](#5-Contacto)
* [7. Checklist](#8-checklist)

***

## 1. Descripción
El siguiente proyecto es una API de Javascript, el cual nos permite extraer, validar y tener la estadística de los links que se encuentren en un archivo o directorio (analiza los enlaces Markdown).

Tendremos las siguientes opciones que podemos elegir.
1.	Lista de links: Nos entrega un array con los links que contiene la ruta ingresada.
2.	Validar: comprueba si hay enlaces válidos o rotos en la ruta ingresada.
3.	Estadísticas: No entrega la estadística del total de enlaces y cuántos de estos son únicos.
4.	Validar y estadísticas: Nos entrega la estadística (total links y links únicos) y los enlaces rotos que contiene la ruta ingresada. 


## 2. Diagrama de flujo
### Diagrama de flujo del API Markdown-Links
![img](img\DIAGRAMA_API.jpg)

### Diagrama de flujo del CLI Markdown-Links
![img](img\DIAGRAMA_CLI.jpg)

## 3. Documentación técnica de la librería

### Conceptos a tener en consideración: 
#### •	Ruta Absoluta: 
Incluye el nombre del dominio.
Ejemplo: 'D:\\1.LABORATORIA\\LIM013-fe-md-links\\test\\test_container\\archivo4.md'

#### •	Ruta relativa: 
Sólo indica el orden de directorios.
Ejemplo: "test\\test_container\\archivo4.md"

#### •	Métodos síncrono: 
Toda la operación de entrada/salida se ejecuta de forma secuencial y, por tanto, debemos esperar a que se complete para procesar el resultado.

#### •	Método asíncrono: 
la finalización de la operación se con callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido. Lo que permite que las tareas sean concurrentes o paralelo 
##### *	Concurrencia: Euando dos o mas tareas progresan simultáneamente.
##### * Paralelismo: Cuando dos o mas tareas se ejecutan, literalmente, a la vez, en el mismo instante de tiempo.

#### •	Un paquete: 
Es un archivo o directorio que se describe en package.json

#### •	Un módulo: 
Es cualquier archivo o directorio que Node.js puede cargar con require()

path: Proporciona utilidades para trabajar con rutas de archivos y directorios.

fs: Proporciona una API para interactuar con el sistema de archivos.

Marked: compilador de bajo nivel para analizar markdown, sin almacenamiento en caché o bloqueo durante largos períodos de tiempo.

node-fetch: Un módulo liviano que trae window.fetch a Node.js



## 4. Instalación
#### Para la instalacion debe ingresar el siguiente comando en el terminal:
        npm install <EvaLucasSalvador>/md-links

## 5. Aplicación
Para poder hacer la consultas con el API debemos ingresar los siguientes comandos en el terminal de acuerdo a nuestra necesidad.
### •	Cuando no recordemos los comando a ingresar
    help
### •	Si queremos ver la lista de links de la ruta ingresada
    md-links <path-to>
### •	Si queremos validar los links de la ruta ingresada
    md-links <path-to-file> --validate
### •	Si queremos ver las estadisticas de los links de la ruta ingresada
    md-links <path-to-file> --stats
### •	Si queremos ver las estadisticas y links rotos de los link de la ruta ingresada
    md-links <path-to-file> (--stas --validate || --validate --stas)



## 6. Contacto
*   Eva Lucas /
eva.lucas.salvador@gmail.com

## 7. Checklist

### General

* [ ] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [ ] Un board con el backlog para la implementación de la librería.
* [ ] Documentación técnica de la librería.
* [ ] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [ ] El módulo exporta una función con la interfaz (API) esperada.
* [ ] Implementa soporte para archivo individual
* [ ] Implementa soporte para directorios
* [ ] Implementa `options.validate`

### CLI

* [ ] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [ ] Se ejecuta sin errores / output esperado
* [ ] Implementa `--validate`
* [ ] Implementa `--stats`

### Pruebas / tests

* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [ ] Pasa tests (y linters) (`npm test`).
