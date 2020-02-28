import { gql } from 'apollo-server'

const typeDefs = gql`
  type Book{
    title: String
    author: String
  }
  type Query{
    books:[Book]
    login(email:String, password: String): String
  }
`
module.exports = typeDefs;