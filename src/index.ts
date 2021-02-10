import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const resolvers = {
  Query: {
    todos: async () => await prisma.todo.findMany(),
    todo: async (_, { id }) => {
      const todo = await prisma.todo.findUnique({ where: { id: parseInt(id, 10) } })
      if (!todo) {
        throw new Error('Todo not found!');
      }

      return todo
    }
  },
  Mutation: {
    createTodo: async (_, { title, body }) => await prisma.todo.create({
      data: {
        title,
        body
      }
    }),
    updateTodo: async (_, { id, title, body, done }) => await prisma.todo.update({
      where: {
        id: parseInt(id, 10)
      },
      data: {
        title,
        body,
        done
      }
    }),
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start({ port: 4000 }, ({ port }) =>
  console.log(`The server is running on http://localhost:${port}`),
);
