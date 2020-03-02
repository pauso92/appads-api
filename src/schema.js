import { gql } from 'apollo-server'

const typeDefs = gql`
  type Book{
    title: String
    author: String
  }
  type Query{
    books:[Book]
    login(email:String, password: String): String
    getPosts: [Post]
  }
  type Post {
    author: String
    comment: String
  }
`
module.exports = typeDefs;