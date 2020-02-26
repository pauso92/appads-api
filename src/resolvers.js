import books from './books.json'
  
const resolvers = {
    Query: {
      books: () => books
    }
  }
  
  module.exports = resolvers