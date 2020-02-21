require('dotenv').config()
const { ApolloServer, gql } = require('apollo-server')

const typeDefs = require('./schema')
const resolvers = require('./resolvers');

const server = new ApolloServer({ typeDefs, resolvers })
server.listen().then(({ url }) => {
  console.log(`🎸 server ready at ${url}`)

})


