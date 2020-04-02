import { DataSource } from 'apollo-datasource'
import charts from '../chartdata.json'

export default class ChartAPI extends DataSource {

  constructor() {
    super()
  }
  initialize(config) {
    this.context = config.context
  }

  async getData() {
    return await charts
  }
}