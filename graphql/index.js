import { ApolloServer, gql } from "apollo-server";

import { v1 as uuid } from "uuid";

const persons = [
  {
    name: "John",
    age: 20,
    lastname: "Doe",
    city: "New York",
    street: "Wall Street",
    id: "19UI91RR 69KI16LU 64IA13AG 34LA94KC 58ZU48MA",
  },
  {
    name: "Carlos",
    age: 25,
    lastname: "Doe",
    city: "New York",
    id: "19UI91RR 59KI16LU 64IA13AG 34LA94KC 58ZU48MA",
  },
  {
    name: "Federico",
    age: 30,
    lastname: "Doe",
    id: "20UI91RR 69KI16LU 64IA13AG 34LA94KC 58ZU48MA",
  },
];

const typeDefinitions = gql`
  type Address {
    city: String
    street: String
  }

  type Person {
    name: String!
    age: Int!
    lastname: String!
    city: String
    street: String
    address: Address
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons: [Person]
    findPerson(name: String!): Person
  }

  type Mutation {
    addPerson(
      name: String!
      age: Int!
      lastname: String!
      city: String
      street: String
    ): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) =>
      persons.find((person) => person.name === args.name),
  },

  Mutation: {
    addPerson: (__, args) => {
      const person = {
        id: uuid(), // Temporal mientras que se usa con una base de datos
        name: args.name,
        age: args.age,
        lastname: args.lastname,
        city: args.city,
        street: args.street,
      };
      persons.push(person);
      return person;
    },
  },

  Person: {
    address: (root) => {
      const { city, street } = root;
      return { city, street };
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
