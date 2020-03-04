import books from './books.json'
import charts from './chartdata.json'

const resolvers = {
  Query: {
    books: async (_, __, { dataSources, token }) =>
    await dataSources.authAPI.verifyToken(token) && books,

    getChartData: () => charts,

    login: async (_, { email, password }, { dataSources }) =>
      await dataSources.authAPI.getToken({ email, password }),

    getPosts: async (_, __, { dataSources, token }) =>
      await dataSources.authAPI.verifyToken(token)
      && dataSources.postAPI.getAllPost()
  },
  Mutation: {
    signup: async (_, {name, email, password }, { dataSources}) => {
    return dataSources.userAPI.createUser({name, email, password})
    }
  }
}

module.exports = resolvers