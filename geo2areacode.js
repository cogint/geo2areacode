/*
*   Calculate the closest area codes based on a latitude and longitude
*   Distance formula from: https://github.com/janantala/GPS-distance
*   Area code location database from: https://github.com/ravisorg/Area-Code-Geolocation-Database
*   - Note: this currently only has the US databases
 */

const db = require('./geo2areacode.json')
const getDistance = require('./distance.js')

//Input values
myLoc = {
  lat: 42.3584,
  long: -71.1259
}

distances = db.map((item)=>{
  let dist = getDistance(myLoc.lat, myLoc.long, item.lat, item.long)
  return {areacode: item.areacode, distance: dist}
})
distances.sort((a, b)=>{return a.distance - b.distance});
//Display the top 10
console.log(distances.slice(1,11))