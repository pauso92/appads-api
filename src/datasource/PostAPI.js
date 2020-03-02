import { DataSource } from 'apollo-datasource'

export default class PostAPI extends DataSource {

  constructor({ store }) {
    super()
    this.store = store
  }
  initialize(config) {
    this.context = config.context
  }

  async getAllPost() {
    const found = await this.store.Posts.findAll()
    return found
  }

  async addPost({ author, comment }) {
    const post = {
      author,
      comment
    }
    return await this.store.Posts.create(post)
  }

}
