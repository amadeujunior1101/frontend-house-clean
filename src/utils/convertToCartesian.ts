const convertToCartesian = (lat: number, lng: number) => {
  const earthRadius = 6371
  const x = earthRadius * Math.cos(lat) * Math.cos(lng)
  const y = earthRadius * Math.cos(lat) * Math.sin(lng)
  return { x, y }
}

export { convertToCartesian }
