const groupedData = require('./campaign-grouped-data.json')

// groupedData.map(item => {
//   console.log(item)
// })

console.log(
  groupedData[0]['adsets'][0]['ads'][0]['er'] +
  groupedData[0]['adsets'][0]['ads'][1]['er']
)