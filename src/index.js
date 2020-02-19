const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Book{
    title: String
    author: String
  }
  type Query{
    books:[Book]
  }
`

const books = [
  {
    title: 'Cien años de soledad',
    author: 'Gabriel García Márquez'
  },
  {
    title: 'Los cuatro acuerdos',
    author: 'Miguel Ruíz'
  },
]

const resolvers = {
  Query: {
    books: () => books
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🎸 server ready at ${url}`)
})