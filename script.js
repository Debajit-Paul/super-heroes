// https://superheroapi.com/api/access-token/character-id

const SUPERHERO_TOKEN = "1876953152663276"
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
const newHeroBtn = document.getElementById("newHero")
const heroImageDiv = document.getElementById("heroImage")
const searchButton = document.getElementById("searchBtn")
const searchInput = document.getElementById("searchInput")

const getSuperHero = (id, name) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
      const hero = json
      showHeroInfo(hero)
      console.log()
    })
}

const getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0]
      showHeroInfo(hero)
    })
}

const showHeroInfo = (character) => {
  const name = `<h2 style="text-align:center">${character.name}</h2>`
  const img = `<img style="display:block;margin:auto" src="${character.image.url}" height=200 width=200/>`
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p style="text-align:center">${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
  }).join(" ")

  heroImageDiv.innerHTML = `${name}${img}${stats}`
}


const randomHero = () => {
  return Math.floor(Math.random() * 731) + 1
}

newHeroBtn.onclick = () => getSuperHero(randomHero())
searchButton.onclick = () => getSearchSuperHero(searchInput.value)



