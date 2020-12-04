const $signSection = document.querySelector('#signs')

fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(zodiacs => zodiacs.forEach(zodiac => {
        

        const $signCard = document.createElement('div')
        const $zodiacName = document.createElement('p')

        $signCard.className = "tick"
        
        const $zodiacImage = document.createElement('img')
        
        $zodiacImage.src = zodiac.image
        $zodiacImage.alt = zodiac.name
        $zodiacImage.title = zodiac.name
        
        $zodiacName.innerHTML = `<a href="show-zodiac.html?name=${zodiac.name}">${zodiac.name}</a>` 

        $signSection.append($signCard)
        $signCard.append($zodiacName,$zodiacImage)
    }))
        
