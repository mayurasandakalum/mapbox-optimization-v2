export const featureToShowShipmentPopup = (feature) => {
  const properties = feature.properties;
  const description = `
      From: ${properties.from} <br/>
      To: ${properties.to} <br/>
      ${properties.size ? `Size: ${properties.size}<br/>` : ""} 
      ${
        properties.requirements
          ? `Requirements: ${properties.requirements}<br/>`
          : ""
      } 
      ${
        properties.dropoffTimeEarliest
          ? `Drop Off SLA (Earliest): ${properties.dropoffTimeEarliest}<br/>`
          : ""
      } 
      ${
        properties.dropoffTimeLatest
          ? `Drop Off SLA (Latest): ${properties.dropoffTimeLatest}<br/>`
          : ""
      } 
      ${
        properties.pickupTimeEarliest
          ? `Pickup SLA (Earliest): ${properties.pickupTimeEarliest}<br/>`
          : ""
      } 
      ${
        properties.pickupTimeLatest
          ? `Pickup SLA (Latest): ${properties.pickupTimeLatest}<br/>`
          : ""
      } 
      `;
  return description;
};
