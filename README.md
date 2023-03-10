# Wordable

## Introducción

Detrás de todo juego, hay un algoritmo.
Crea un algoritmo para resolver este [famoso juego]([https://wordlegame.org/es](https://lapalabradeldia.com/)).
Diseña una función que más tarde podrá ser usada para pintar el juego en función de los aciertos del jugador

![](https://oscarm.tinytake.com/msc/Nzk3NTY5Ml8yMTA5ODcxNA)

## Función

- La función a implementar recibe dos parámetros de tipo string
- La función debe devolver un array de numbers
  - -1: la letra que ocupa esa posición de la palabra, no existe en toda la palabra a adivinar
  - 1: la letra es correcta y ocupa exactamente esa posición de la palabra
  - 0: la letra es correcta, pero debe ocupar una posición diferente de la sugerida por el jugador

**Nota importante**: para simplificar la función, consideraremos que las letras no se pueden repetir

Para ejecutar el programa, simplemente escribe en el terminal

`node wordable.js`

### Sugerencias

1. Como siempre, escribir o que hay que hacer con lenguaje natural, sin usar código.
2. Recuerda que los strings los puedes recorrer con un for, no hace falta transoformarlos a array

### ¿Atascado o no sabes como plantearlo?

1. No intentes resolver todo a la vez. Divide el ejercicio en los siguientes problemas
1. Primero, haz que la función recorre el string _guess_ y simplemente crea un array de 5 posiciones con un -1 para cada elemento
1. Ahora, ataca los casos más sencillos. Es fácil asignar un 1 o un -1. Tan solo debes comprobar para cada posición de _guess_ y _solution_ la letra que contienen es la misma
1. Completa el algoritmo. Falta asignar cuando es un 0, es decir, la letra existe, pero en otra posición de _solution_
