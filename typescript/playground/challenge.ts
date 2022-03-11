import { Equal, Expect } from '@type-challenges/utils';

/**
  Tuple to Object by sinoon (@sinoon)
  ### Question
  Give an array, transform into an object type and the key/value must in the given array.
  For example
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  type result = TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
 */

/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = any


const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]

/**
*    []  ,----.___
   __||_/___      '.
  / O||    /|       )
 /   ""   / /   =._/
/________/ /
|________|/   Next exercise 
 
  Readonly by Anthony Fu (@antfu)
  ### Question
  
  Implement the built-in `Readonly<T>` generic without using it.
  
  Constructs a type with all properties of T set to readonly, meaning the properties of the constructed type cannot be reassigned.
  
  For example
  
  ```ts
  interface Todo {
    title: string
    description: string
  }
  
  const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar"
  }
  
  todo.title = "Hello" // Error: cannot reassign a readonly property
  todo.description = "barFoo" // Error: cannot reassign a readonly property
  ```
 */


/* _____________ Your Code Here _____________ */

type MyReadonly<T> = any

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

/**
   ________________
  |   |,"    `.|   | Final Exercise
  |   /  SONY  \   |
  |O _\   />   /_  |   ___ _
  |_(_)'.____.'(_)_|  (")__(")
  [___|[=]__[=]|___]  //    \\ 

  Length of Tuple by sinoon (@sinoon)

  ### Question
  
  For given a tuple, you need create a generic `Length`, pick the length of the tuple
  
  For example
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
 */

  /* _____________ Your Code Here _____________ */

type Length<T extends readonly any[]> = T[]

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<'hello world'>,
]

