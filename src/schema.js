import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    books:[Book]
    getChartData: [ChartJs]
    getCampaignSummary: [CampaignSummary]
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
  type CampaignSummary {
    day: String,
    reports_end: String,
    campaing_name: String
    reach: String
    impress: String
    cost_by_results: String
    amount_spent: String
    finish: String
    plays: String
    vcr: String
    vtr: String
    er: String
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