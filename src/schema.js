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
    img: String,
    day: String,
    reports_end: String,
    campaing_name: String
    adset_name: String
    ad_name: String
    reach: String
    impressions: String
    cost_per_results: String
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