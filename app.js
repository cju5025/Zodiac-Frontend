// fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=aries", {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-key": "bbad202a72msh4a869d328b03672p1e0647jsnf0b3ca6028a0",
// 		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(console.log)
// .catch(err => {
// 	console.error(err);
// });

// const $p = document.querySelectorAll('.zodiac-name')
// console.log($p.textContent)

const $main = document.querySelector('main')

fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(zodiacs => zodiacs.forEach(zodiac => {
        const $zodiacName = document.createElement('p')
        $zodiacName.innerHTML = `<a href="show-zodiac.html?name=${zodiac.name}">${zodiac.name}</a>` 

        $main.append($zodiacName)
    }))
        
