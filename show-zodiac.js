const $main = document.querySelector('main')

fetch("https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=aries", {
	"method": "POST",
	"headers": {
		"x-rapidapi-key": "bbad202a72msh4a869d328b03672p1e0647jsnf0b3ca6028a0",
		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(sign => {
    const $signColor = document.createElement('h1')
    $signColor.textContent = `Color: ${sign.color}` 
    $main.append($signColor)
})
.catch(err => {
	console.error(err);
});