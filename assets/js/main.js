/**
 * EstatePro - Main JavaScript
 * Handles navigation, properties filtering, sorting, favorites, gallery, mortgage calc, and form validation.
 */

// ==========================================
// 1. PROPERTY DATASET (12 Luxury Properties)
// ==========================================
const PROPERTIES_DATA = [
  {
    id: 1,
    title: "The Horizon Glass Villa",
    type: "Villa",
    status: "For Sale",
    price: 3450000,
    priceFormatted: "$3,450,000",
    pricePerSqft: "$766 / sq ft",
    city: "Beverly Hills",
    location: "Beverly Hills, CA",
    address: "1048 Vista Ridge Way, Beverly Hills, CA 90210",
    bedrooms: 5,
    bathrooms: 6,
    area: 4500,
    garages: 3,
    yearBuilt: 2023,
    featured: true,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Welcome to The Horizon Glass Villa, an architectural masterpiece perched above Beverly Hills offering panoramic skyline and canyon views. Designed with seamless indoor-outdoor living in mind, this residence features floor-to-ceiling acoustic glass walls, Italian marble finishes, a zero-edge infinity pool, and custom custom walnut cabinetry throughout. The primary wing is a private sanctuary featuring dual boutique dressing rooms and a spa bathroom equipped with heated limestone floors.",
    amenities: [
      "Zero-Edge Infinity Pool", "Smart Home Automation", "Sub-Zero Chef Kitchen",
      "Temperature Wine Cellar", "Private Wellness Gym", "Home Cinema Theater",
      "Outdoor Summer Kitchen", "24/7 Gated Security", "Solar Energy & Tesla Powerwall",
      "EV High-Speed Charger", "Motorized Drapery", "Spa Steam Shower"
    ],
    agent: {
      name: "Victoria Sterling",
      role: "Senior Luxury Real Estate Advisor",
      phone: "+1 (310) 555-0192",
      email: "v.sterling@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: "4.95 (52 reviews)"
    }
  },
  {
    id: 2,
    title: "Skyline Panorama Penthouse",
    type: "Penthouse",
    status: "For Sale",
    price: 4850000,
    priceFormatted: "$4,850,000",
    pricePerSqft: "$1,276 / sq ft",
    city: "New York",
    location: "Manhattan, NY",
    address: "432 Park Avenue Fl 68, New York, NY 10022",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3800,
    garages: 2,
    yearBuilt: 2022,
    featured: true,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Soaring high above Manhattan, this trophy duplex penthouse captures unobstructed 360-degree vistas of Central Park and the Empire State Building. Boasting 14-foot ceiling heights, custom herringbone European white oak floors, and a private wraparound sky terrace. Complete with private keyed elevator access and 24-hour white glove concierge service.",
    amenities: [
      "Central Park 360 Views", "Private Wraparound Sky Terrace", "Keyed Elevator Access",
      "24/7 White Glove Concierge", "Bespoke Wine Room", "Valet Parking",
      "Calacatta Gold Marble", "Private Fitness Studio", "Motorized Sun Shades"
    ],
    agent: {
      name: "Marcus Vance",
      role: "Director of Manhattan Acquisitions",
      phone: "+1 (212) 555-8391",
      email: "m.vance@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: "5.0 (64 reviews)"
    }
  },
  {
    id: 3,
    title: "Biscayne Bay Waterfront Villa",
    type: "Villa",
    status: "For Sale",
    price: 5200000,
    priceFormatted: "$5,200,000",
    pricePerSqft: "$912 / sq ft",
    city: "Miami",
    location: "Miami Beach, FL",
    address: "220 Venetian Way, Miami Beach, FL 33139",
    bedrooms: 6,
    bathrooms: 6.5,
    area: 5700,
    garages: 3,
    yearBuilt: 2024,
    featured: true,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled along the serene shores of Biscayne Bay, this tropical modern retreat features 100 feet of prime deep-water frontage with a private dock capable of mooring a 90-foot yacht. Highlights include expansive covered terraces, resort-style heated saltwater pool, private outdoor kitchen, and luminous glass walls framing turquoise bay waters.",
    amenities: [
      "Private Yacht Dock", "Direct Ocean Access", "Saltwater Heated Pool",
      "Outdoor Summer Kitchen", "Impact Hurricane Glass", "Rooftop Sunset Lounge",
      "Custom Italian Closets", "Billiards & Bar Room", "Backup Generator"
    ],
    agent: {
      name: "Elena Rostova",
      role: "Luxury Coastal Specialist",
      phone: "+1 (305) 555-7721",
      email: "e.rostova@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      rating: "4.92 (38 reviews)"
    }
  },
  {
    id: 4,
    title: "The Metropolitan Designer Loft",
    type: "Loft",
    status: "For Rent",
    price: 6800,
    priceFormatted: "$6,800/mo",
    pricePerSqft: "$3.57 / sq ft",
    city: "Chicago",
    location: "Chicago, IL",
    address: "320 N Michigan Ave #14B, Chicago, IL 60601",
    bedrooms: 2,
    bathrooms: 2,
    area: 1900,
    garages: 1,
    yearBuilt: 2021,
    featured: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An authentic industrial-chic corner loft in Chicago's premier downtown district. Features original exposed brickwork, soaring timber beams, 12-foot ceilings, and enormous south-facing casement windows that flood the open floor plan with natural daylight. Includes high-end Miele appliances and a custom cast-iron soaking tub.",
    amenities: [
      "Exposed Historic Brick", "12-Foot Ceilings", "Miele Chef Appliances",
      "Cast-Iron Soaking Tub", "In-Unit Full Laundry", "Boutique Rooftop Deck",
      "Fiber Gigabit Internet", "Smart Keyless Entry", "Covered Heated Parking"
    ],
    agent: {
      name: "Marcus Vance",
      role: "Director of Manhattan Acquisitions",
      phone: "+1 (212) 555-8391",
      email: "m.vance@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: "5.0 (64 reviews)"
    }
  },
  {
    id: 5,
    title: "Emerald Grove Family Residence",
    type: "House",
    status: "For Sale",
    price: 1850000,
    priceFormatted: "$1,850,000",
    pricePerSqft: "$578 / sq ft",
    city: "Austin",
    location: "Austin, TX",
    address: "4810 Westlake Hills Dr, Austin, TX 78746",
    bedrooms: 4,
    bathrooms: 3.5,
    area: 3200,
    garages: 2,
    yearBuilt: 2022,
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located in the highly sought-after Westlake Hills enclave of Austin, this warm modern estate blends Texas limestone, blackened steel, and natural cedar. The main living level features an expansive great room opening through 20-foot pocket sliding doors to a private oak-canopied pool terrace, outdoor fire pit, and level lawn.",
    amenities: [
      "Heated In-Ground Pool", "Eanes ISD School District", "Texas Limestone Fireplace",
      "Outdoor Gas Fire Pit", "Dedicated Home Office", "Pre-Wired Surround Sound",
      "Covered Patio Dining", "Dual Zone Trane HVAC", "Spacious 2-Car Garage"
    ],
    agent: {
      name: "David Chen",
      role: "Principal Tech & Relocation Advisor",
      phone: "+1 (512) 555-4309",
      email: "d.chen@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: "4.89 (41 reviews)"
    }
  },
  {
    id: 6,
    title: "Serene Pine Mountain Estate",
    type: "House",
    status: "For Sale",
    price: 3890000,
    priceFormatted: "$3,890,000",
    pricePerSqft: "$793 / sq ft",
    city: "Aspen",
    location: "Aspen, CO",
    address: "710 Red Mountain Rd, Aspen, CO 81611",
    bedrooms: 5,
    bathrooms: 5.5,
    area: 4900,
    garages: 2,
    yearBuilt: 2021,
    featured: true,
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An extraordinary modern alpine retreat nestled on Aspen's famous Red Mountain. With sweeping views of Ajax Mountain and the Roaring Fork Valley, this custom residence offers heated driveways, radiant hydronic floor heating, an expansive cedar sauna, outdoor hot tub, and ski-in / ski-out convenience.",
    amenities: [
      "Direct Ski-In / Ski-Out Access", "Heated Driveway & Walkways", "Custom Cedar Sauna",
      "Outdoor 8-Person Hot Tub", "Radiant Heated Floors", "Floor-to-Ceiling Stone Hearth",
      "Custom Boot Warmers & Ski Locker", "Wine Tasting Lounge", "Vaulted Cedar Ceilings"
    ],
    agent: {
      name: "Victoria Sterling",
      role: "Senior Luxury Real Estate Advisor",
      phone: "+1 (310) 555-0192",
      email: "v.sterling@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: "4.95 (52 reviews)"
    }
  },
  {
    id: 7,
    title: "Pacific Crest Modern Townhome",
    type: "Townhouse",
    status: "For Rent",
    price: 5200,
    priceFormatted: "$5,200/mo",
    pricePerSqft: "$2.60 / sq ft",
    city: "Seattle",
    location: "Seattle, WA",
    address: "1824 Queen Anne Ave N, Seattle, WA 98109",
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    garages: 1,
    yearBuilt: 2023,
    featured: false,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Contemporary tri-level townhome situated on Queen Anne Hill with panoramic views of Puget Sound and the Olympic Mountains. Boasts a private rooftop entertainment deck equipped with gas barbecue hookup, chef's galley kitchen with quartz waterfall island, and primary suite with custom walk-in closet.",
    amenities: [
      "Rooftop Deck With Sound Views", "Attached 1-Car Garage", "Quartz Waterfall Island",
      "Ductless Mini-Split AC", "Walk-In Custom Closets", "EV Charging Outlet",
      "Smart Thermostat & Doorbell", "High-End Bosch Appliances"
    ],
    agent: {
      name: "David Chen",
      role: "Principal Tech & Relocation Advisor",
      phone: "+1 (512) 555-4309",
      email: "d.chen@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: "4.89 (41 reviews)"
    }
  },
  {
    id: 8,
    title: "Malibu Coastal Glass Pavilion",
    type: "Villa",
    status: "For Sale",
    price: 6400000,
    priceFormatted: "$6,400,000",
    pricePerSqft: "$1,230 / sq ft",
    city: "Beverly Hills",
    location: "Malibu, CA",
    address: "28400 Pacific Coast Hwy, Malibu, CA 90265",
    bedrooms: 5,
    bathrooms: 5.5,
    area: 5200,
    garages: 3,
    yearBuilt: 2024,
    featured: false,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Direct oceanfront architectural masterpiece with private gated staircase leading right down to the sand. Features cantilevered glass decks, infinity edge ocean pool, master retreat with freestanding soaking tub facing the sunset, and an open concept great room with motorized Fleetwood sliding doors.",
    amenities: [
      "Private Direct Beach Access", "Infinity Oceanfront Pool", "Fleetwood Glass Pocket Doors",
      "Wine Room with 500 Bottle Cap", "Outdoor Fire Lounge", "State-of-the-Art Security",
      "Automated Solar Shading", "Dual Master Suites", "Designer Poliform Kitchen"
    ],
    agent: {
      name: "Victoria Sterling",
      role: "Senior Luxury Real Estate Advisor",
      phone: "+1 (310) 555-0192",
      email: "v.sterling@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      rating: "4.95 (52 reviews)"
    }
  },
  {
    id: 9,
    title: "The Grandview Modern Apartment",
    type: "Apartment",
    status: "For Rent",
    price: 4300,
    priceFormatted: "$4,300/mo",
    pricePerSqft: "$3.07 / sq ft",
    city: "Miami",
    location: "Miami, FL",
    address: "1421 Brickell Ave #32A, Miami, FL 33131",
    bedrooms: 2,
    bathrooms: 2,
    area: 1400,
    garages: 1,
    yearBuilt: 2023,
    featured: false,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Sleek Brickell avenue residence featuring expansive 10-foot glass balconies with Biscayne Bay and downtown skyline views. Equipped with porcelain tile flooring, European minimalist cabinetry, integrated stainless steel appliances, and access to building amenities including a rooftop infinity pool and co-working lounge.",
    amenities: [
      "Bay & Skyline View Balcony", "Rooftop Swimming Pool", "Fitness & Yoga Studio",
      "Co-Working Lounge", "24/7 Front Desk Doorman", "Assigned Covered Parking",
      "Pet Friendly With Dog Park", "Fiber Ready Internet"
    ],
    agent: {
      name: "Elena Rostova",
      role: "Luxury Coastal Specialist",
      phone: "+1 (305) 555-7721",
      email: "e.rostova@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
      rating: "4.92 (38 reviews)"
    }
  },
  {
    id: 10,
    title: "Scottsdale Desert Oasis Villa",
    type: "Villa",
    status: "For Sale",
    price: 2650000,
    priceFormatted: "$2,650,000",
    pricePerSqft: "$630 / sq ft",
    city: "Austin",
    location: "Scottsdale, AZ",
    address: "9410 E Pinnacle Peak Rd, Scottsdale, AZ 85255",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 4200,
    garages: 3,
    yearBuilt: 2022,
    featured: false,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An awe-inspiring desert contemporary residence with panoramic views of the McDowell Mountains. Complete with rammed earth walls, polished terrazzo floors, negative-edge resort pool with swim-up fire pit, and expansive xeriscaped botanical gardens with mature saguaros.",
    amenities: [
      "Resort Negative-Edge Pool", "Swim-Up Gas Fire Pit", "Mountain Panoramic Views",
      "Custom Rammed Earth Walls", "Polished Terrazzo Floors", "Outdoor Shower",
      "Gourmet Wolf & Sub-Zero Suite", "3-Car Climate-Controlled Garage"
    ],
    agent: {
      name: "David Chen",
      role: "Principal Tech & Relocation Advisor",
      phone: "+1 (512) 555-4309",
      email: "d.chen@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: "4.89 (41 reviews)"
    }
  },
  {
    id: 11,
    title: "Tribeca Cast-Iron Luxury Loft",
    type: "Loft",
    status: "For Sale",
    price: 3950000,
    priceFormatted: "$3,950,000",
    pricePerSqft: "$1,410 / sq ft",
    city: "New York",
    location: "Manhattan, NY",
    address: "74 Franklin St #4, New York, NY 10013",
    bedrooms: 3,
    bathrooms: 3,
    area: 2800,
    garages: 0,
    yearBuilt: 2020,
    featured: false,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Quintessential Tribeca authentic full-floor loft with private direct elevator entry. Boasts restored Corinthian cast-iron columns, 13-foot high ceilings, wide-plank French oak flooring, a 60-foot sunlit living salon, and a Bulthaup B3 architectural kitchen system.",
    amenities: [
      "Private Keyed Elevator", "Historic Cast-Iron Columns", "Bulthaup B3 Kitchen System",
      "13-Foot High Ceilings", "French Oak Flooring", "Zoned Lutron Lighting",
      "Private Storage Unit", "Multi-Zone Climate Control"
    ],
    agent: {
      name: "Marcus Vance",
      role: "Director of Manhattan Acquisitions",
      phone: "+1 (212) 555-8391",
      email: "m.vance@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      rating: "5.0 (64 reviews)"
    }
  },
  {
    id: 12,
    title: "Highland Park Contemporary House",
    type: "House",
    status: "For Sale",
    price: 2150000,
    priceFormatted: "$2,150,000",
    pricePerSqft: "$614 / sq ft",
    city: "Austin",
    location: "Dallas, TX",
    address: "3814 Beverly Dr, Dallas, TX 75205",
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3500,
    garages: 2,
    yearBuilt: 2023,
    featured: false,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An elegant blend of timeless architecture and contemporary luxury in prestigious Highland Park. Highlights include custom iron front doors, white oak beamed ceilings, marble waterfall kitchen island, outdoor covered loggia with gas fireplace, and a temperature-controlled glass wine display.",
    amenities: [
      "Highland Park Prestige", "Outdoor Covered Loggia", "Marble Waterfall Island",
      "Glass Enclosed Wine Display", "Designer Powder Bath", "Custom Beamed Ceilings",
      "Private Security System", "Lush Professional Landscaping"
    ],
    agent: {
      name: "David Chen",
      role: "Principal Tech & Relocation Advisor",
      phone: "+1 (512) 555-4309",
      email: "d.chen@estatepro.com",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      rating: "4.89 (41 reviews)"
    }
  }
];

// ==========================================
// 2. FAVORITES MANAGEMENT (localStorage)
// ==========================================
const FAVORITES_STORAGE_KEY = 'estatepro_favorites';

function getFavorites() {
  try {
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

function saveFavorites(favorites) {
  try {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
  } catch (e) {
    console.error("Could not save to localStorage", e);
  }
}

function isFavorite(id) {
  const favorites = getFavorites();
  return favorites.includes(Number(id));
}

function toggleFavorite(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const numericId = Number(id);
  let favorites = getFavorites();
  let added = false;

  if (favorites.includes(numericId)) {
    favorites = favorites.filter(favId => favId !== numericId);
    showToast("Removed property from your saved list", "info");
  } else {
    favorites.push(numericId);
    added = true;
    showToast("Saved property to your favorites!", "success");
  }

  saveFavorites(favorites);
  updateAllFavoriteButtons(numericId, added);
  updateFavoritesCount();
  renderFavoritesDrawer();
}

function updateAllFavoriteButtons(id, isFav) {
  const buttons = document.querySelectorAll(`[data-fav-id="${id}"]`);
  buttons.forEach(btn => {
    if (isFav) {
      btn.classList.add('active');
      btn.title = "Remove from favorites";
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
    } else {
      btn.classList.remove('active');
      btn.title = "Save to favorites";
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
      }
    }
  });
}

function updateFavoritesCount() {
  const favorites = getFavorites();
  const badges = document.querySelectorAll('.fav-badge');
  badges.forEach(badge => {
    badge.textContent = favorites.length;
  });
}

function renderFavoritesDrawer() {
  const drawerBody = document.getElementById('favDrawerBody');
  if (!drawerBody) return;

  const favorites = getFavorites();
  const favoriteProperties = PROPERTIES_DATA.filter(p => favorites.includes(p.id));

  if (favoriteProperties.length === 0) {
    drawerBody.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
        <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--emerald-500);"></i>
        <h4 style="color: var(--navy-900); font-size: 1.125rem; margin-bottom: 0.5rem;">No Saved Properties</h4>
        <p style="font-size: 0.875rem;">Click the heart icon on any property to easily save and compare your favorites here.</p>
        <a href="properties.html" class="btn btn-primary btn-sm" style="margin-top: 1.25rem;">Browse Properties</a>
      </div>
    `;
    return;
  }

  let html = '';
  favoriteProperties.forEach(p => {
    html += `
      <div class="fav-item">
        <img src="${p.image}" alt="${p.title}" class="fav-thumb">
        <div class="fav-info">
          <h4><a href="property-details.html?id=${p.id}">${p.title}</a></h4>
          <p>${p.priceFormatted}</p>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${p.location}</span>
        </div>
        <button type="button" class="fav-remove" title="Remove" onclick="toggleFavorite(${p.id}, event)">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  html += `
    <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-light); display: flex; gap: 0.75rem;">
      <a href="properties.html" class="btn btn-outline btn-sm" style="flex: 1; text-align: center;">View All</a>
      <button type="button" class="btn btn-primary btn-sm" style="flex: 1;" onclick="closeFavoritesDrawer()">Done</button>
    </div>
  `;

  drawerBody.innerHTML = html;
}

function openFavoritesDrawer() {
  renderFavoritesDrawer();
  const drawer = document.getElementById('favoritesDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.add('open');
  if (backdrop) backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFavoritesDrawer() {
  const drawer = document.getElementById('favoritesDrawer');
  const backdrop = document.getElementById('drawerBackdrop');
  if (drawer) drawer.classList.remove('open');
  if (backdrop) backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
// 3. TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const iconClass = type === 'success' ? 'fa-circle-check' : 'fa-circle-info';
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 50);

  // Auto remove after 3.5s
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================
// 4. CARD GENERATOR HELPER
// ==========================================
function createPropertyCardHtml(property) {
  const isFav = isFavorite(property.id);
  const badgeClass = property.status === 'For Sale' ? 'badge-sale' : 'badge-rent';
  const heartIconClass = isFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  const activeFavClass = isFav ? 'active' : '';

  return `
    <article class="property-card" data-id="${property.id}">
      <div class="property-media">
        <img src="${property.image}" alt="${property.title}" class="property-image" loading="lazy">
        <div class="property-badges">
          <span class="badge ${badgeClass}">${property.status}</span>
          <span class="badge badge-type">${property.type}</span>
        </div>
        <button type="button" class="btn-card-fav ${activeFavClass}" data-fav-id="${property.id}" onclick="toggleFavorite(${property.id}, event)" title="${isFav ? 'Remove from favorites' : 'Save to favorites'}">
          <i class="${heartIconClass}"></i>
        </button>
      </div>
      <div class="property-content">
        <div class="property-price">
          ${property.priceFormatted}
        </div>
        <h3 class="property-title">
          <a href="property-details.html?id=${property.id}">${property.title}</a>
        </h3>
        <div class="property-location">
          <i class="fa-solid fa-location-dot"></i>
          <span>${property.location}</span>
        </div>
        <div class="property-specs">
          <div class="spec-item" title="Bedrooms">
            <i class="fa-solid fa-bed"></i>
            <span>${property.bedrooms} Beds</span>
          </div>
          <div class="spec-item" title="Bathrooms">
            <i class="fa-solid fa-bath"></i>
            <span>${property.bathrooms} Baths</span>
          </div>
          <div class="spec-item" title="Square Footage">
            <i class="fa-solid fa-vector-square"></i>
            <span>${property.area.toLocaleString()} sqft</span>
          </div>
        </div>
        <div class="property-footer">
          <div class="property-agent-mini">
            <img src="${property.agent.avatar}" alt="${property.agent.name}">
            <span>${property.agent.name}</span>
          </div>
          <a href="property-details.html?id=${property.id}" class="btn btn-outline btn-sm">
            View Details <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `;
}

// ==========================================
// 5. PROPERTIES PAGE LOGIC (Filter & Sort)
// ==========================================
function initPropertiesPage() {
  const container = document.getElementById('propertiesGrid');
  if (!container) return;

  const searchInput = document.getElementById('filterKeyword');
  const locationSelect = document.getElementById('filterLocation');
  const typeSelect = document.getElementById('filterType');
  const statusSelect = document.getElementById('filterStatus');
  const minPriceSelect = document.getElementById('filterMinPrice');
  const maxPriceSelect = document.getElementById('filterMaxPrice');
  const sortSelect = document.getElementById('sortProperties');
  const resetBtn = document.getElementById('resetFiltersBtn');
  const resultsCount = document.getElementById('resultsCount');
  const emptyState = document.getElementById('emptyState');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');

  // Parse URL Parameters (from home page search bar)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('keyword') && searchInput) searchInput.value = urlParams.get('keyword');
  if (urlParams.get('location') && locationSelect) locationSelect.value = urlParams.get('location');
  if (urlParams.get('type') && typeSelect) typeSelect.value = urlParams.get('type');
  if (urlParams.get('status') && statusSelect) statusSelect.value = urlParams.get('status');
  if (urlParams.get('minPrice') && minPriceSelect) minPriceSelect.value = urlParams.get('minPrice');
  if (urlParams.get('maxPrice') && maxPriceSelect) maxPriceSelect.value = urlParams.get('maxPrice');

  // Handle View Modes (Grid vs List)
  let currentView = localStorage.getItem('estatepro_view_mode') || 'grid';
  applyViewMode(currentView);

  if (viewGridBtn && viewListBtn) {
    viewGridBtn.addEventListener('click', () => {
      currentView = 'grid';
      localStorage.setItem('estatepro_view_mode', 'grid');
      applyViewMode('grid');
    });
    viewListBtn.addEventListener('click', () => {
      currentView = 'list';
      localStorage.setItem('estatepro_view_mode', 'list');
      applyViewMode('list');
    });
  }

  function applyViewMode(mode) {
    if (mode === 'list') {
      container.classList.remove('properties-grid');
      container.classList.add('properties-list');
      if (viewListBtn) viewListBtn.classList.add('active');
      if (viewGridBtn) viewGridBtn.classList.remove('active');
    } else {
      container.classList.remove('properties-list');
      container.classList.add('properties-grid');
      if (viewGridBtn) viewGridBtn.classList.add('active');
      if (viewListBtn) viewListBtn.classList.remove('active');
    }
  }

  // Filter and Render Execution
  function filterAndRender() {
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const loc = locationSelect ? locationSelect.value : 'all';
    const type = typeSelect ? typeSelect.value : 'all';
    const status = statusSelect ? statusSelect.value : 'all';
    const minPrice = minPriceSelect && minPriceSelect.value ? parseFloat(minPriceSelect.value) : 0;
    const maxPrice = maxPriceSelect && maxPriceSelect.value ? parseFloat(maxPriceSelect.value) : Infinity;
    const sortVal = sortSelect ? sortSelect.value : 'featured';

    let filtered = PROPERTIES_DATA.filter(item => {
      // Keyword matching
      if (keyword) {
        const matchTitle = item.title.toLowerCase().includes(keyword);
        const matchLoc = item.location.toLowerCase().includes(keyword);
        const matchDesc = item.description.toLowerCase().includes(keyword);
        if (!matchTitle && !matchLoc && !matchDesc) return false;
      }
      // Location matching
      if (loc !== 'all' && item.city.toLowerCase() !== loc.toLowerCase()) {
        return false;
      }
      // Type matching
      if (type !== 'all' && item.type.toLowerCase() !== type.toLowerCase()) {
        return false;
      }
      // Status matching
      if (status !== 'all' && item.status.toLowerCase() !== status.toLowerCase()) {
        return false;
      }
      // Min price
      if (minPrice > 0 && item.price < minPrice) {
        return false;
      }
      // Max price
      if (maxPrice < Infinity && item.price > maxPrice) {
        return false;
      }
      return true;
    });

    // Sorting
    if (sortVal === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'area-high') {
      filtered.sort((a, b) => b.area - a.area);
    } else {
      // Featured or default order
      filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Results Counter
    if (resultsCount) {
      resultsCount.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${PROPERTIES_DATA.length}</strong> properties`;
    }

    // Render cards or empty state
    if (filtered.length === 0) {
      container.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
    } else {
      if (emptyState) emptyState.style.display = 'none';
      container.innerHTML = filtered.map(item => createPropertyCardHtml(item)).join('');
    }
  }

  // Attach Event Listeners
  if (searchInput) searchInput.addEventListener('input', filterAndRender);
  if (locationSelect) locationSelect.addEventListener('change', filterAndRender);
  if (typeSelect) typeSelect.addEventListener('change', filterAndRender);
  if (statusSelect) statusSelect.addEventListener('change', filterAndRender);
  if (minPriceSelect) minPriceSelect.addEventListener('change', filterAndRender);
  if (maxPriceSelect) maxPriceSelect.addEventListener('change', filterAndRender);
  if (sortSelect) sortSelect.addEventListener('change', filterAndRender);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (locationSelect) locationSelect.value = 'all';
      if (typeSelect) typeSelect.value = 'all';
      if (statusSelect) statusSelect.value = 'all';
      if (minPriceSelect) minPriceSelect.value = '';
      if (maxPriceSelect) maxPriceSelect.value = '';
      if (sortSelect) sortSelect.value = 'featured';
      filterAndRender();
      showToast("Filters have been reset", "info");
    });
  }

  // Initial Run
  filterAndRender();
}

// ==========================================
// 6. PROPERTY DETAILS PAGE LOGIC
// ==========================================
function initPropertyDetailsPage() {
  const detailsContainer = document.getElementById('propertyDetailsContainer');
  if (!detailsContainer) return;

  const urlParams = new URLSearchParams(window.location.search);
  const paramId = parseInt(urlParams.get('id'), 10);
  let property = PROPERTIES_DATA.find(p => p.id === paramId);

  // Fallback to property #1 if not found
  if (!property) {
    property = PROPERTIES_DATA[0];
  }

  // Set document title
  document.title = `${property.title} | EstatePro`;

  // Populate dynamic DOM elements
  const breadcrumbCurrent = document.getElementById('detailsBreadcrumbCurrent');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = property.title;

  const titleEl = document.getElementById('detailsTitle');
  if (titleEl) titleEl.textContent = property.title;

  const addressEl = document.getElementById('detailsAddress');
  if (addressEl) addressEl.innerHTML = `<i class="fa-solid fa-location-dot"></i> <span>${property.address}</span>`;

  const priceEl = document.getElementById('detailsPrice');
  if (priceEl) priceEl.textContent = property.priceFormatted;

  const priceSqftEl = document.getElementById('detailsPriceSqft');
  if (priceSqftEl) priceSqftEl.textContent = property.pricePerSqft;

  const badgeStatusEl = document.getElementById('detailsStatusBadge');
  if (badgeStatusEl) {
    badgeStatusEl.textContent = property.status;
    badgeStatusEl.className = `badge ${property.status === 'For Sale' ? 'badge-sale' : 'badge-rent'}`;
  }

  const badgeTypeEl = document.getElementById('detailsTypeBadge');
  if (badgeTypeEl) badgeTypeEl.textContent = property.type;

  // Specs
  const specBeds = document.getElementById('specBeds');
  if (specBeds) specBeds.textContent = `${property.bedrooms} Beds`;

  const specBaths = document.getElementById('specBaths');
  if (specBaths) specBaths.textContent = `${property.bathrooms} Baths`;

  const specArea = document.getElementById('specArea');
  if (specArea) specArea.textContent = `${property.area.toLocaleString()} sqft`;

  const specGarage = document.getElementById('specGarage');
  if (specGarage) specGarage.textContent = `${property.garages} Cars`;

  const specYear = document.getElementById('specYear');
  if (specYear) specYear.textContent = property.yearBuilt;

  const specType = document.getElementById('specType');
  if (specType) specType.textContent = property.type;

  // Description
  const descEl = document.getElementById('detailsDescription');
  if (descEl) descEl.textContent = property.description;

  // Amenities
  const amenitiesContainer = document.getElementById('detailsAmenities');
  if (amenitiesContainer && property.amenities) {
    amenitiesContainer.innerHTML = property.amenities.map(am => `
      <div class="amenity-item">
        <i class="fa-solid fa-circle-check"></i>
        <span>${am}</span>
      </div>
    `).join('');
  }

  // Gallery
  const mainImage = document.getElementById('mainGalleryImg');
  const thumbsContainer = document.getElementById('galleryThumbs');

  if (mainImage && property.gallery && property.gallery.length > 0) {
    mainImage.src = property.gallery[0];
    mainImage.alt = property.title;
  }

  if (thumbsContainer && property.gallery) {
    thumbsContainer.innerHTML = property.gallery.map((imgUrl, idx) => `
      <div class="thumbnail-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" onclick="changeMainImage('${imgUrl}', this)">
        <img src="${imgUrl}" alt="${property.title} thumbnail ${idx + 1}" loading="lazy">
      </div>
    `).join('');
  }

  // Detail Page Favorite Button
  const favBtn = document.getElementById('detailsFavBtn');
  if (favBtn) {
    favBtn.setAttribute('data-fav-id', property.id);
    const isFav = isFavorite(property.id);
    if (isFav) {
      favBtn.classList.add('active');
      const icon = favBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
    }
    favBtn.addEventListener('click', (e) => toggleFavorite(property.id, e));
  }

  // Agent Card
  const agentAvatar = document.getElementById('agentAvatar');
  const agentName = document.getElementById('agentName');
  const agentRole = document.getElementById('agentRole');
  const agentPhone = document.getElementById('agentPhone');
  const agentEmail = document.getElementById('agentEmail');
  const agentRating = document.getElementById('agentRating');

  if (agentAvatar) agentAvatar.src = property.agent.avatar;
  if (agentName) agentName.textContent = property.agent.name;
  if (agentRole) agentRole.textContent = property.agent.role;
  if (agentPhone) {
    agentPhone.textContent = property.agent.phone;
    agentPhone.href = `tel:${property.agent.phone.replace(/[^0-9+]/g, '')}`;
  }
  if (agentEmail) {
    agentEmail.textContent = property.agent.email;
    agentEmail.href = `mailto:${property.agent.email}`;
  }
  if (agentRating) agentRating.innerHTML = `<i class="fa-solid fa-star"></i> <span>${property.agent.rating}</span>`;

  // Contact Agent Form Validation & Submission
  const agentForm = document.getElementById('contactAgentForm');
  if (agentForm) {
    agentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (validateAgentForm(agentForm)) {
        const clientName = document.getElementById('agentClientName').value.trim();
        openDemoModal({
          title: "Inquiry Submitted Successfully!",
          badge: "Demo Inquiries Live Preview",
          message: `Thank you, <strong>${clientName}</strong>! Your inquiry regarding <strong>${property.title}</strong> has been logged. In a production environment, ${property.agent.name} would be notified immediately via secure webhook and SMS.`
        });
        agentForm.reset();
      }
    });
  }

  // Mortgage Calculator
  initMortgageCalculator(property.price);

  // Similar Properties (3 other properties)
  const similarContainer = document.getElementById('similarPropertiesGrid');
  if (similarContainer) {
    const similar = PROPERTIES_DATA
      .filter(p => p.id !== property.id)
      .slice(0, 3);
    similarContainer.innerHTML = similar.map(item => createPropertyCardHtml(item)).join('');
  }
}

// Global Image Gallery Switcher
window.changeMainImage = function(imgUrl, clickedThumb) {
  const mainImage = document.getElementById('mainGalleryImg');
  if (!mainImage) return;

  mainImage.style.opacity = '0.5';
  setTimeout(() => {
    mainImage.src = imgUrl;
    mainImage.style.opacity = '1';
  }, 120);

  const allThumbs = document.querySelectorAll('.thumbnail-item');
  allThumbs.forEach(thumb => thumb.classList.remove('active'));
  if (clickedThumb) clickedThumb.classList.add('active');
};

// ==========================================
// 7. MORTGAGE CALCULATOR
// ==========================================
function initMortgageCalculator(defaultPrice) {
  const priceInput = document.getElementById('calcHomePrice');
  const downInput = document.getElementById('calcDownPayment');
  const rateInput = document.getElementById('calcInterestRate');
  const termInput = document.getElementById('calcLoanTerm');
  const paymentOutput = document.getElementById('calcMonthlyPayment');

  if (!priceInput || !downInput || !rateInput || !termInput || !paymentOutput) return;

  if (defaultPrice) priceInput.value = defaultPrice;

  function calculate() {
    const homePrice = parseFloat(priceInput.value) || 0;
    const downPct = parseFloat(downInput.value) || 20;
    const annualRate = parseFloat(rateInput.value) || 6.5;
    const years = parseFloat(termInput.value) || 30;

    const principal = homePrice * (1 - downPct / 100);
    const monthlyRate = (annualRate / 100) / 12;
    const totalPayments = years * 12;

    if (principal <= 0 || monthlyRate <= 0 || totalPayments <= 0) {
      paymentOutput.textContent = '$0';
      return;
    }

    const monthlyPayment = (principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    paymentOutput.textContent = `$${Math.round(monthlyPayment).toLocaleString()} / mo`;
  }

  priceInput.addEventListener('input', calculate);
  downInput.addEventListener('input', calculate);
  rateInput.addEventListener('input', calculate);
  termInput.addEventListener('change', calculate);

  calculate();
}

// ==========================================
// 8. FORM VALIDATION HELPERS
// ==========================================
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 7;
}

function setFieldError(fieldId, errorId, isError) {
  const field = document.getElementById(fieldId);
  const errorMsg = document.getElementById(errorId);
  if (!field) return;

  if (isError) {
    field.classList.add('error');
    if (errorMsg) errorMsg.classList.add('visible');
  } else {
    field.classList.remove('error');
    if (errorMsg) errorMsg.classList.remove('visible');
  }
}

function validateAgentForm(form) {
  let isValid = true;
  const name = document.getElementById('agentClientName');
  const email = document.getElementById('agentClientEmail');
  const phone = document.getElementById('agentClientPhone');
  const message = document.getElementById('agentClientMessage');

  if (!name || name.value.trim().length < 2) {
    setFieldError('agentClientName', 'nameError', true);
    isValid = false;
  } else {
    setFieldError('agentClientName', 'nameError', false);
  }

  if (!email || !validateEmail(email.value.trim())) {
    setFieldError('agentClientEmail', 'emailError', true);
    isValid = false;
  } else {
    setFieldError('agentClientEmail', 'emailError', false);
  }

  if (!phone || !validatePhone(phone.value.trim())) {
    setFieldError('agentClientPhone', 'phoneError', true);
    isValid = false;
  } else {
    setFieldError('agentClientPhone', 'phoneError', false);
  }

  if (!message || message.value.trim().length < 6) {
    setFieldError('agentClientMessage', 'messageError', true);
    isValid = false;
  } else {
    setFieldError('agentClientMessage', 'messageError', false);
  }

  return isValid;
}

// ==========================================
// 9. CONTACT PAGE LOGIC
// ==========================================
function initContactPage() {
  const form = document.getElementById('contactPageForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const phone = document.getElementById('contactPhone');
    const subject = document.getElementById('contactSubject');
    const message = document.getElementById('contactMessage');

    if (!name || name.value.trim().length < 2) {
      setFieldError('contactName', 'contactNameError', true);
      isValid = false;
    } else {
      setFieldError('contactName', 'contactNameError', false);
    }

    if (!email || !validateEmail(email.value.trim())) {
      setFieldError('contactEmail', 'contactEmailError', true);
      isValid = false;
    } else {
      setFieldError('contactEmail', 'contactEmailError', false);
    }

    if (!phone || !validatePhone(phone.value.trim())) {
      setFieldError('contactPhone', 'contactPhoneError', true);
      isValid = false;
    } else {
      setFieldError('contactPhone', 'contactPhoneError', false);
    }

    if (!subject || subject.value.trim().length < 2) {
      setFieldError('contactSubject', 'contactSubjectError', true);
      isValid = false;
    } else {
      setFieldError('contactSubject', 'contactSubjectError', false);
    }

    if (!message || message.value.trim().length < 10) {
      setFieldError('contactMessage', 'contactMessageError', true);
      isValid = false;
    } else {
      setFieldError('contactMessage', 'contactMessageError', false);
    }

    if (isValid) {
      const clientName = name.value.trim();
      openDemoModal({
        title: "Message Sent Successfully!",
        badge: "Demo Mode Demonstration",
        message: `Thank you for reaching out, <strong>${clientName}</strong>. Our advisory concierge team has received your inquiry and will follow up with you within one business day.`
      });
      form.reset();
    }
  });

  // FAQs Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// ==========================================
// 10. DEMO MODAL SYSTEM
// ==========================================
function openDemoModal({ title, badge, message }) {
  let modal = document.getElementById('demoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'demoModal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-box">
        <div class="modal-icon-success">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <span class="modal-demo-badge" id="demoModalBadge">Frontend Demo Mode</span>
        <h3 class="modal-title" id="demoModalTitle">Success!</h3>
        <p class="modal-text" id="demoModalMessage">Your message has been safely received.</p>
        <button type="button" class="btn btn-primary" onclick="closeDemoModal()" style="width: 100%;">
          Close Window
        </button>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeDemoModal();
    });
  }

  if (title) document.getElementById('demoModalTitle').innerHTML = title;
  if (badge) document.getElementById('demoModalBadge').textContent = badge;
  if (message) document.getElementById('demoModalMessage').innerHTML = message;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

window.closeDemoModal = function() {
  const modal = document.getElementById('demoModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = '';
};

// ==========================================
// 11. HOMEPAGE HERO SEARCH SYSTEM
// ==========================================
function initHeroSearch() {
  const form = document.getElementById('heroSearchForm');
  if (!form) return;

  const tabs = document.querySelectorAll('.search-tab-btn');
  let selectedStatus = 'all';

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      selectedStatus = tab.getAttribute('data-status') || 'all';
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const loc = document.getElementById('heroSearchLocation')?.value || 'all';
    const type = document.getElementById('heroSearchType')?.value || 'all';
    const minPrice = document.getElementById('heroSearchMinPrice')?.value || '';
    const maxPrice = document.getElementById('heroSearchMaxPrice')?.value || '';

    const params = new URLSearchParams();
    if (selectedStatus !== 'all') params.append('status', selectedStatus);
    if (loc !== 'all') params.append('location', loc);
    if (type !== 'all') params.append('type', type);
    if (minPrice) params.append('minPrice', minPrice);
    if (maxPrice) params.append('maxPrice', maxPrice);

    window.location.href = `properties.html?${params.toString()}`;
  });
}

// Render Featured Properties on Homepage
function initHomeFeatured() {
  const container = document.getElementById('featuredPropertiesGrid');
  if (!container) return;

  const featured = PROPERTIES_DATA.filter(p => p.featured).slice(0, 6);
  container.innerHTML = featured.map(p => createPropertyCardHtml(p)).join('');
}

// ==========================================
// 12. NAVIGATION & GENERAL EVENT HANDLERS
// ==========================================
function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileNavClose');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const favTriggers = document.querySelectorAll('.btn-favorites, #mobileFavTrigger');

  // Sticky header with shadow on scroll
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // Mobile Drawer Toggle
  function openMobileNav() {
    if (mobileNav) mobileNav.classList.add('open');
    if (mobileBackdrop) mobileBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileNav() {
    if (mobileNav) mobileNav.classList.remove('open');
    if (mobileBackdrop) mobileBackdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileNav);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileNav);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileNav);

  // Favorites Drawer Triggers
  favTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileNav();
      openFavoritesDrawer();
    });
  });

  const drawerClose = document.getElementById('drawerClose');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  if (drawerClose) drawerClose.addEventListener('click', closeFavoritesDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeFavoritesDrawer);

  // Highlight active link in header based on current path
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Newsletter Subscriptions demo
  const newsletterForms = document.querySelectorAll('.newsletter-form');
  newsletterForms.forEach(nForm => {
    nForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = nForm.querySelector('input[type="email"]');
      if (input && validateEmail(input.value.trim())) {
        showToast("Subscribed! Thank you for joining our private newsletter.", "success");
        input.value = '';
      } else {
        showToast("Please enter a valid email address.", "info");
      }
    });
  });
}

// Global initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateFavoritesCount();
  initNavigation();
  initHeroSearch();
  initHomeFeatured();
  initPropertiesPage();
  initPropertyDetailsPage();
  initContactPage();
});
