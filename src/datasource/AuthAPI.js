import DataSource from 'apollo-datasource';

class AuthAPI extends DataSource {
  constructor() {
    super()
  }
  initialize(config) {
    this.context = config.context
  }
  async getToken({ email, pass }){

  }
  async verifyToken({token}){
    
  }
}
module.exports = AuthAPI