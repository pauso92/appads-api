require('dotenv').config()
import { ApolloServer } from 'apollo-server'
import  typeDefs from './schema'
import resolvers from './resolvers'
import createStore from './persistence/connection'
import AuthAPI from './datasource/AuthAPI'

const store = createStore()

const server = new ApolloServer({
  typeDefs, 
  resolvers,
  dataSources: () => ({
    authapi: new AuthAPI ({ store })
  })
 })

server.listen().then(({ url }) => {
  console.log(`🎸 server ready at ${url}`)

})


