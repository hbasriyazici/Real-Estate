export const productFilter = (arr, rooms, locations) => {
  if(!rooms && !locations) return arr;

  if(rooms && !locations) {
    return arr.filter(product => rooms.includes(product.rooms))
  }

  if(!rooms && locations) {
    return arr.filter(product => locations.includes(product.location))
  }

  if(rooms && locations) {
    return arr.filter(product => locations.includes(product.location)).filter(product => rooms.includes(product.rooms))
  }
};