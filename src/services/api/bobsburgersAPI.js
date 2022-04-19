const getCharactersData =
    async function() {
  const response =
      await fetch('https://bobsburgers-api.herokuapp.com/characters/')
  if (response.status == 200) {
    return response.json
  }
  else {
    new Error(response.statusText)
  }
}

export {
  getCharactersData
}