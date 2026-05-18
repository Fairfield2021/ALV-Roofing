export const cities = [
  // SUBURBS
  { name: 'Katy',               slug: 'katy',                county: 'Fort Bend / Harris', state: 'TX', lat: 29.7858, lng: -95.8245, neighborhoods: ['Cinco Ranch', 'Cross Creek Ranch', 'Firethorne', 'Falcon Ranch', 'Katy Lakes', 'Seven Meadows', 'Kelliwood'] },
  { name: 'Sugar Land',         slug: 'sugar-land',          county: 'Fort Bend',           state: 'TX', lat: 29.6197, lng: -95.6349, neighborhoods: ['First Colony', 'New Territory', 'Greatwood', 'Telfair', 'Riverstone', 'Avalon'] },
  { name: 'Pearland',           slug: 'pearland',            county: 'Brazoria / Harris',   state: 'TX', lat: 29.5636, lng: -95.2860, neighborhoods: ['Shadow Creek Ranch', 'Silverlake', 'Southgate', 'Clear Creek Estates'] },
  { name: 'Cypress',            slug: 'cypress',             county: 'Harris',              state: 'TX', lat: 29.9691, lng: -95.6972, neighborhoods: ['Bridgeland', 'Towne Lake', 'Fairfield', 'Coles Crossing', 'Stone Gate'] },
  { name: 'The Woodlands',      slug: 'the-woodlands',       county: 'Montgomery',          state: 'TX', lat: 30.1658, lng: -95.4613, neighborhoods: ["Creekside Park", "Cochran's Crossing", 'Panther Creek', 'Sterling Ridge'] },
  { name: 'Spring',             slug: 'spring',              county: 'Harris',              state: 'TX', lat: 30.0799, lng: -95.4172, neighborhoods: ['Spring Trails', 'Gleannloch Farms', 'Augusta Pines'] },
  { name: 'Humble',             slug: 'humble',              county: 'Harris',              state: 'TX', lat: 29.9988, lng: -95.2627, neighborhoods: ['Atascocita', 'Fall Creek', 'Eagle Springs'] },
  { name: 'Pasadena',           slug: 'pasadena',            county: 'Harris',              state: 'TX', lat: 29.6911, lng: -95.2091, neighborhoods: ['Southbend', 'Red Bluff', 'Strawberry'] },
  { name: 'League City',        slug: 'league-city',         county: 'Galveston / Harris',  state: 'TX', lat: 29.5074, lng: -95.0949, neighborhoods: ['South Shore Harbour', 'Westover Park', 'Hidden Lakes'] },
  { name: 'Friendswood',        slug: 'friendswood',         county: 'Galveston / Harris',  state: 'TX', lat: 29.5294, lng: -95.2010, neighborhoods: ['Friendswood Lakes', 'Heritage Park', 'Centennial'] },
  { name: 'Conroe',             slug: 'conroe',              county: 'Montgomery',          state: 'TX', lat: 30.3119, lng: -95.4561, neighborhoods: ['Grand Central Park', 'April Sound', 'Bentwater'] },
  { name: 'Tomball',            slug: 'tomball',             county: 'Harris',              state: 'TX', lat: 30.0971, lng: -95.6160, neighborhoods: ['Lakewood Crossing', 'Canyon Gate', 'Amira'] },
  { name: 'Richmond',           slug: 'richmond',            county: 'Fort Bend',           state: 'TX', lat: 29.5819, lng: -95.7607, neighborhoods: ['Long Meadow Farms', 'Lakes of Bella Terra', 'Pecan Grove'] },
  { name: 'Missouri City',      slug: 'missouri-city',       county: 'Fort Bend / Harris',  state: 'TX', lat: 29.6185, lng: -95.5377, neighborhoods: ['Sienna', 'Quail Valley', 'Hunters Glen'] },
  { name: 'Baytown',            slug: 'baytown',             county: 'Harris',              state: 'TX', lat: 29.7355, lng: -94.9774, neighborhoods: ['Country Club Estates', 'Sterling Point'] },
  { name: 'Galveston',          slug: 'galveston',           county: 'Galveston',           state: 'TX', lat: 29.3013, lng: -94.7977, neighborhoods: ['East End', 'Midtown', 'Pirates Beach'] },
  { name: 'Cinco Ranch',        slug: 'cinco-ranch',         county: 'Fort Bend',           state: 'TX', lat: 29.7443, lng: -95.7577, neighborhoods: ['Cinco Ranch Southwest', 'Cinco Ranch Lakes'] },
  { name: 'Clear Lake',         slug: 'clear-lake',          county: 'Harris',              state: 'TX', lat: 29.5774, lng: -95.1135, neighborhoods: ['Clear Lake City', 'Bay Area'] },
  { name: 'Fulshear',           slug: 'fulshear',            county: 'Fort Bend',           state: 'TX', lat: 29.6930, lng: -95.8838, neighborhoods: ['Cross Creek Ranch', 'Fulbrook on Fulshear Creek'] },
  { name: 'Stafford',           slug: 'stafford',            county: 'Fort Bend / Harris',  state: 'TX', lat: 29.6160, lng: -95.5580, neighborhoods: ['Colony Bend', 'Mission Bend'] },
  { name: 'Alvin',              slug: 'alvin',               county: 'Brazoria',            state: 'TX', lat: 29.4238, lng: -95.2441, neighborhoods: ['Hillcrest', 'Southern Trails'] },
  { name: 'Webster',            slug: 'webster',             county: 'Harris',              state: 'TX', lat: 29.5377, lng: -95.1135, neighborhoods: ['Bay Area Blvd', 'El Dorado'] },
  { name: 'Magnolia',           slug: 'magnolia',            county: 'Montgomery',          state: 'TX', lat: 30.2096, lng: -95.7516, neighborhoods: ['Woodforest', 'Audubon'] },
  { name: 'Kingwood',           slug: 'kingwood',            county: 'Harris',              state: 'TX', lat: 30.0577, lng: -95.2091, neighborhoods: ['Kingwood Lakes', 'Kings Forest'] },
  { name: 'Atascocita',         slug: 'atascocita',          county: 'Harris',              state: 'TX', lat: 29.9827, lng: -95.1760, neighborhoods: ['Eagle Springs', 'Fall Creek'] },
  { name: 'Bellaire',           slug: 'bellaire',            county: 'Harris',              state: 'TX', lat: 29.7058, lng: -95.4588, neighborhoods: ['Bellaire South', 'West Loop'] },
  { name: 'Memorial',           slug: 'memorial',            county: 'Harris',              state: 'TX', lat: 29.7641, lng: -95.5302, neighborhoods: ['Memorial Drive', 'Bunker Hill'] },
  { name: 'Meyerland',          slug: 'meyerland',           county: 'Harris',              state: 'TX', lat: 29.6741, lng: -95.4766, neighborhoods: ['Meyerland Park', 'Willowbend'] },
  { name: 'Brookshire',         slug: 'brookshire',          county: 'Waller',              state: 'TX', lat: 29.7866, lng: -95.9524, neighborhoods: ['Pin Oak Acres'] },
  { name: 'Rosenberg',          slug: 'rosenberg',           county: 'Fort Bend',           state: 'TX', lat: 29.5572, lng: -95.8080, neighborhoods: ['Brazos Lakes', 'Creek Bend'] },
  { name: 'Deer Park',          slug: 'deer-park',           county: 'Harris',              state: 'TX', lat: 29.7052, lng: -95.1274, neighborhoods: ['Meadow Wood', 'Lakeview'] },
  { name: 'La Marque',          slug: 'la-marque',           county: 'Galveston',           state: 'TX', lat: 29.3688, lng: -94.9966, neighborhoods: ['Highland Bayou', 'Lago Mar'] },
  // HOUSTON NEIGHBORHOODS
  { name: 'The Heights',        slug: 'the-heights',         county: 'Harris',              state: 'TX', lat: 29.7950, lng: -95.3986, neighborhoods: ['Houston Heights', 'Norhill', 'Woodland Heights'] },
  { name: 'Midtown',            slug: 'midtown',             county: 'Harris',              state: 'TX', lat: 29.7388, lng: -95.3727, neighborhoods: ['Midtown Houston', 'Binz'] },
  { name: 'Montrose',           slug: 'montrose',            county: 'Harris',              state: 'TX', lat: 29.7490, lng: -95.3969, neighborhoods: ['Lower Montrose', 'Upper Montrose'] },
  { name: 'River Oaks',         slug: 'river-oaks',          county: 'Harris',              state: 'TX', lat: 29.7474, lng: -95.4338, neighborhoods: ['River Oaks', 'Afton Oaks'] },
  { name: 'Galleria',           slug: 'galleria',            county: 'Harris',              state: 'TX', lat: 29.7369, lng: -95.4616, neighborhoods: ['Galleria', 'Post Oak', 'Briargrove'] },
  { name: 'Energy Corridor',    slug: 'energy-corridor',     county: 'Harris',              state: 'TX', lat: 29.7616, lng: -95.6302, neighborhoods: ['Energy Corridor', 'Memorial Park'] },
  { name: 'West University',    slug: 'west-university',     county: 'Harris',              state: 'TX', lat: 29.7161, lng: -95.4338, neighborhoods: ['West University Place', 'Southampton'] },
  { name: 'Tanglewood',         slug: 'tanglewood',          county: 'Harris',              state: 'TX', lat: 29.7474, lng: -95.4616, neighborhoods: ['Tanglewood', 'Briargrove Park'] },
  { name: 'Oak Forest',         slug: 'oak-forest',          county: 'Harris',              state: 'TX', lat: 29.8183, lng: -95.4338, neighborhoods: ['Oak Forest', 'Garden Oaks'] },
  { name: 'Spring Branch',      slug: 'spring-branch',       county: 'Harris',              state: 'TX', lat: 29.7866, lng: -95.5302, neighborhoods: ['Spring Branch East', 'Spring Branch West'] },
  { name: 'Sharpstown',         slug: 'sharpstown',          county: 'Harris',              state: 'TX', lat: 29.6936, lng: -95.5302, neighborhoods: ['Sharpstown', 'Gulfton'] },
  { name: 'Greenway Plaza',     slug: 'greenway-plaza',      county: 'Harris',              state: 'TX', lat: 29.7388, lng: -95.4338, neighborhoods: ['Greenway Plaza', 'Upper Kirby'] },
  { name: 'Eastwood',           slug: 'eastwood',            county: 'Harris',              state: 'TX', lat: 29.7161, lng: -95.3302, neighborhoods: ['Eastwood', 'Magnolia Park'] },
  { name: 'Cottage Grove',      slug: 'cottage-grove',       county: 'Harris',              state: 'TX', lat: 29.7752, lng: -95.4338, neighborhoods: ['Cottage Grove', 'Timbergrove'] },
  { name: 'Garden Oaks',        slug: 'garden-oaks',         county: 'Harris',              state: 'TX', lat: 29.8183, lng: -95.4030, neighborhoods: ['Garden Oaks', 'Shepherd Park Plaza'] },
  { name: 'Briargrove',         slug: 'briargrove',          county: 'Harris',              state: 'TX', lat: 29.7369, lng: -95.4902, neighborhoods: ['Briargrove', 'Westheimer'] },
  { name: 'Meyerland Park',     slug: 'meyerland-park',      county: 'Harris',              state: 'TX', lat: 29.6741, lng: -95.4766, neighborhoods: ['Meyerland', 'Willow Meadows'] },
  { name: 'Independence Heights',slug:'independence-heights', county: 'Harris',             state: 'TX', lat: 29.8183, lng: -95.3727, neighborhoods: ['Independence Heights', 'Shepherd Forest'] },
  { name: 'Timbergrove',        slug: 'timbergrove',         county: 'Harris',              state: 'TX', lat: 29.7866, lng: -95.4338, neighborhoods: ['Timbergrove Manor', 'Lazybrook'] },
  { name: 'Eldridge',           slug: 'eldridge',            county: 'Harris',              state: 'TX', lat: 29.7161, lng: -95.6302, neighborhoods: ['West Oaks', 'Eldridge Park'] },
] as const

export type City = typeof cities[number]

// Haversine distance in miles between two lat/lng points
export function distanceMiles(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 3958.8 // Earth radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLng = (lng2 - lng1) * Math.PI / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) *
    Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}
