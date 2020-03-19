import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    books:[Book]
    getChartData: [ChartJs]
    login(email:String, password: String): String
    getPosts: [Post]
  }
  type Mutation {
    signup(name: String, email: String, password: String): User
  }
  type User {
    id: ID
    name:String
    email:String
  }
  type Book {
    title: String
    author: String
  }
  type Post {
    author: String
    comment: String
  }
  type ChartJs {
    type: String,
    data: [ChartJsLinerPointData],
    options: String
    # options: [ChartJsOptions]
  }
  type ChartJsLinerPointData {
    x: Int,
    y: Int
  }
`
module.exports = typeDefs;