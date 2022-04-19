const getCharactersData =
    async function() {
  const response =
      await fetch('https://bobsburgers-api.herokuapp.com/characters/')
  console.log(await response.status)
  if (response.status == 200) {
    let data = await response.json()
    console.dir(await data)
    return data
  }
  else {
    new Error(response.statusText)
  }
}

export default getCharactersData