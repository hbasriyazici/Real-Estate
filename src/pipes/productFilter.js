export const productFilter = (arr, rooms, brands) => {
  if(!rooms && !brands) return arr;

  if(rooms && !brands) {
    return arr.filter(product => rooms.includes(product.rooms))
  }

  if(!rooms && brands) {
    return arr.filter(product => brands.includes(product.brand))
  }

  if(rooms && brands) {
    return arr.filter(product => brands.includes(product.brand)).filter(product => rooms.includes(product.rooms))
  }
  /* return arr.filter(product => rooms.includes(product.rooms)); */
  
};