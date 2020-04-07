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
  MethodVtr() {
    const jsonFile = groupedData
    return groupedData[0]['adsets'][0]['ads'][0]['plays'] /
      groupedData[0]['adsets'][0]['ads'][0]['impressions']*100  
  }
  MethodVcr() {
    const jsonFile = groupedData
    return groupedData[0]['adsets'][0]['ads'][0]['plays'] /
      groupedData[0]['adsets'][0]['ads'][0]['plays3sg']*100  
  }
  Methoder() {
    const jsonFile = groupedData
    return groupedData[0]['adsets'][0]['ads'][0]['interactions'] /
      groupedData[0]['adsets'][0]['ads'][0]['impressions']*100  
  }


  async getData() {
    const result = this.noExposedMethod()
    const result1 = this.MethodVcr()
    const result2 = this.MethodVtr()
    const result3 = this.Methoder()
    console.log(result+ "- "+ result1+ "- "+result2+ "- "+result3 )
    return await groupedData
  }

  async getSummary() {
    return await data
  }
}