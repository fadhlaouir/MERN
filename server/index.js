const { GraphQLServer } = require('graphql-yoga')

// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: String,
    complete: Boolean
});

const typeDefs = `
  type Query { 
    hello(name: String): String!
    todos: [Todo]
  }
  type Todo{
    id: ID!
    text: String!
    complete: Boolean!
  }
  type Mutation{
    createTodo(text: String!): Todo
  }
`

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name || 'World'}`,
        todos: () => Todo.find()
    },
    Mutation: {
        createTodo: async(_, { text }) => {
            const todo = new Todo({ text, complete: false });
            await todo.save();
            return todo;
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers })

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    server.start(() => console.log('Server is running on localhost:4000'))
});