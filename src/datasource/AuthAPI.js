import DataSource from 'apollo-datasource';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

class AuthAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store
  }
  initialize(config) {
    this.context = config.context
  }

  async getToken({ email, password }) {
    const user = await this.store.Users.findOne({
      where: { email }
    })
    if (user && (email === user.email && await compare(password, user.password))){
      const tokenData = {
        email, 
        roles: ['admin', 'copywriter'] // TODO: read from database
      }
      return sign(tokenData, process.env.JWT_SECRET)
    }
  }
  async verifyToken({ token }) {

  }
}
module.exports = AuthAPI