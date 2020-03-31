require('dotenv').config()
import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'
import resolvers from './resolvers'
import createStore from './persistence/connection'
import AuthAPI from './datasource/AuthAPI'
import PostAPI from './datasource/PostAPI'
import UserAPI from './datasource/UserAPI'

const store = createStore()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI({ store }),
    postAPI: new PostAPI({ store }),
    userAPI: new UserAPI({ store }),
  }),
  context: async ({ req, connection }) => {
    return connection
      ? connection.context
      : { token: req.headers.authorization || '' }
  }
})

server.listen().then(({ url }) => {
  console.log(`server ready at ${url} 🤘🏻`)
})
