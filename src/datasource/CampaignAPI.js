import { DataSource } from 'apollo-datasource'
import charts from '../chartdata.json'
import groupedData from '../campaign-grouped-data.json'
import data from '../campaign-data.json'

export default class CampaignAPI extends DataSource {

  constructor() {
    super()
  }
  initialize(config) {
    this.context = config.context
  }

  noExposedMethod() {
    const jsonFile = groupedData
    return groupedData[0]['adsets'][0]['ads'][0]['er'] +
      groupedData[0]['adsets'][0]['ads'][1]['er']
  }

  async getData() {
    const result = this.noExposedMethod()
    console.log(result)
    return await groupedData
  }

  async getSummary() {
    return await data
  }
}