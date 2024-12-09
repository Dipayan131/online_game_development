function generateUniqueId() {
  const randomString = Math.random().toString(36).substr(2)

  const timestamp = new Date().getTime().toString(36)

  const uniqueId = randomString + timestamp

  return uniqueId
}

export default generateUniqueId
