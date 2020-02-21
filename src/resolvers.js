const books = require('./books.json')
  
const resolvers = {
    Query: {
      books: () => books
    }
  }
  
  module.exports = resolvers