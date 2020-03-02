import Sequelize from 'sequelize'

export default () => {

  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/storage.sqlite'
  })

  const Users = sequelize.import('../models/users')
  const Posts = sequelize.import('../models/posts')

  return { Users, Posts }
}
