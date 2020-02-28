import { DataSource } from 'apollo-datasource';
import { compare } from 'bcrypt';
import { ApolloError, AuthenticationError } from 'apollo-server'
import { sign, verify } from 'jsonwebtoken';

export default class AuthAPI extends DataSource {

  constructor({ store }) {
    super()
    this.store = store
  }
  initialize(config) {
    this.context = config.context
  }

  async getToken({ email, password }) {
    const user = await this.store.Users.findOne({
      where: { email }
    })
    if (user && (email === user.email && await compare(password, user.password))) {
      const tokenData = {
        email,
        roles: ['admin', 'copywriter'] //TODO: read from database
      }
      return sign(tokenData, process.env.JWT_SECRET)
    }
    throw new AuthenticationError('Credenciales inválidas')
  }

  async verifyToken(token) {
    let isValidToken = false
    if (!token) {
      throw new ApolloError('missing token', 'MISSING_TOKEN')
    }
    return verify(token, process.env.JWT_SECRET, (err, body) => {
      if (err) {
        throw new ApolloError('invalid token', 'INVALID_TOKEN')
      }
      return !isValidToken
    })
  }
}