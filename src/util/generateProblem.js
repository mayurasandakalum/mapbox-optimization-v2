export const generateProblemPayload = (locations, shipments, vehicles) => {
  return {
    version: 1,
    locations: locations.map((v) => ({
      name: v.name,
      coordinates: v.coordinates
    })),
    vehicles: vehicles.map((v) => ({
      name: v.name,
      routing_profile: v.routing_profile,
      start_location: v.start_location,
      end_location: v.end_location,
      capacities: v.capacities || {},
      capabilities: v.capabilities || [],
      earliest_start: v.earliest_start,
      latest_end: v.latest_end,
      breaks: v.breaks || []
    })),
    services: [],
    shipments: shipments.map((s) => ({
      name: s.name,
      from: s.from,
      to: s.to,
      size: s.size || {},
      requirements: s.requirements || [],
      pickup_duration: s.pickup_duration || 0,
      dropoff_duration: s.dropoff_duration || 0,
      pickup_times: s.pickup_times || [],
      dropoff_times: s.dropoff_times || []
    }))
  };
};
