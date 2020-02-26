const DataSource = require("apollo-datasource")
class AuthAPI extends DataSource {
  constructor() {
    super()
  }
  initialize(config) {
    this.context = config.context
  }

  async getToken({email, password}){
    
  }
  async verifyToken(token){

  }
}
module.exports = AuthAPI