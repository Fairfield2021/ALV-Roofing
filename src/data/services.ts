export const services = [
  { name: 'Roof Replacement', slug: 'roof-replacement', icon: '🏠', description: 'Full tear-off and replacement with premium materials', priceRange: '$9,000–$20,000' },
  { name: 'Roof Repair', slug: 'roof-repair', icon: '🔧', description: 'Fast, lasting repairs for leaks and damage', priceRange: '$500–$2,500' },
  { name: 'Hail Damage Repair', slug: 'hail-damage-repair', icon: '🌨', description: 'Expert hail damage assessment and repair', priceRange: '$1,000–$8,000' },
  { name: 'Storm Damage Repair', slug: 'storm-damage-repair', icon: '⛈', description: 'Emergency storm damage response', priceRange: '$800–$10,000' },
  { name: 'Emergency Roof Repair', slug: 'emergency-roof-repair', icon: '🚨', description: '24/7 emergency response for urgent leaks', priceRange: '$500–$3,000' },
  { name: 'Insurance Claim Help', slug: 'insurance-claim-help', icon: '📋', description: 'We handle your insurance claim from start to finish', priceRange: 'Free assistance' },
  { name: 'Asphalt Shingle Roofing', slug: 'asphalt-shingle-roofing', icon: '🏗', description: 'Durable, affordable asphalt shingle installation', priceRange: '$8,000–$16,000' },
  { name: 'Metal Roofing', slug: 'metal-roofing', icon: '⚡', description: 'Long-lasting metal roofing systems', priceRange: '$15,000–$35,000' },
  { name: 'Flat Roofing', slug: 'flat-roofing', icon: '▬', description: 'Commercial and residential flat roof systems', priceRange: '$6,000–$18,000' },
  { name: 'Tile Roofing', slug: 'tile-roofing', icon: '🏛', description: 'Premium tile roofing installation', priceRange: '$20,000–$50,000' },
  { name: 'Roof Inspections', slug: 'roof-inspections', icon: '🔍', description: 'Comprehensive free roof inspections', priceRange: 'Free' },
  { name: 'Roof Maintenance', slug: 'roof-maintenance', icon: '🛠', description: 'Preventive maintenance to extend roof life', priceRange: '$300–$1,500' },
  { name: 'Commercial Roofing', slug: 'commercial-roofing', icon: '🏢', description: 'Full-service commercial roofing solutions', priceRange: 'Custom quote' },
  { name: 'Roof Financing', slug: 'roof-financing', icon: '💳', description: 'Flexible financing options with low monthly payments', priceRange: 'From $99/mo' },
] as const

export type Service = typeof services[number]
