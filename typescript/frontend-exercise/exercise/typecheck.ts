interface User {
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  name: string;
  age: number;
  role: string;
}

type Person = unknown;

const persons: User[] = [
  {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
  },
  {
    name: "Jane Doe",
    age: 32,
    role: "Administrator",
  },
  {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
  },
  {
    name: "Bruce Willis",
    age: 64,
    role: "World saver",
  },
];

const logPerson = (person: unknown) => {
  // Additional information should be role or occupation.
  let additionalInformation: null = '' ;

  console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
};

persons.forEach(logPerson);
