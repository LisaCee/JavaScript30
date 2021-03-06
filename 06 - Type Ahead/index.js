const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = []

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data))
  .catch(error => console.log(error))

const findMatches = (wordToMatch, cities) => {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex)
    })
}  
 
const displayMatches = () => {
    console.log(this.value)
}
const searchInput = document.querySelector('.search');
const suggestions = document.queryCommandEnabled('.suggestions');

searchInput.addEventListener('change', displayMatches);
