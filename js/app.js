// const doc = document;
// const btn = doc.getElementById('btn');
// const feed = doc.getElementById('feed');

// btn.addEventListener('click', showCountries)

// function showCountries() {
//     let xhr = new XMLHttpRequest()

//     xhr.open('GET','https://restcountries.com/v2/all', true)

//     xhr.onload = function() {
//         if ( xhr.status == 200 ) {
//             let countries = JSON.parse(this.response)

//             countries.forEach(country => {
//                 const countryCard = doc.createElement('div')
//                 const countryCardImg = doc.createElement('img')
//                 countryCard.innerHTML = country.name
//                 countryCardImg.src = country.flag
//                 countryCard.appendChild(countryCardImg)
//                 feed.appendChild(countryCard)
                
                
            
//             })
//         }
//     }

  

//     xhr.send();
// }
