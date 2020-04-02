import books from './books.json'

const resolvers = {
  Query: {
    books: async (_, __, { dataSources, token }) =>
      await dataSources.authAPI.verifyToken(token)
      && books,

    // getChartData: () => charts,
    // getCampaignSummary: () => campaingdata,
    // getCampaign: ()=> campaignGroupedData,

    getChartData: async (_, __, { dataSources }) => {
      return await dataSources.chartAPI.getData()
    },

    getCampaignSummary: async (_, __, { dataSources }) => {
      return await dataSources.campaignAPI.getSummary()
    },

    getCampaign: async (_, __, { dataSources }) => {
      return await dataSources.campaignAPI.getData()
    },

    login: async (_, { email, password }, { dataSources }) =>
      await dataSources.authAPI.getToken({ email, password }),

    getPosts: async (_, __, { dataSources, token }) =>
      await dataSources.authAPI.verifyToken(token)
      && dataSources.postAPI.getAllPost()
  },
  Mutation: {
    signup: async (_, { name, email, password }, { dataSources }) => {
      return dataSources.userAPI.createUser({ name, email, password })
    }
  }
}

module.exports = resolvers