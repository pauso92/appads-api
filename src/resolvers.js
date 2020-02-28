import books from './books.json'

  
const resolvers = {
    Query: {
      books: () => books,
      login: async(_, {email,password}, {dataSources})=>{
        await dataSources.authapi.getToken({email, password})
      }
    }
  }
  
  module.exports = resolvers