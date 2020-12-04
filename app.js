const $signSection = document.querySelector('#signs')

fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(zodiacs => zodiacs.forEach(zodiac => {
        displayZodiac(zodiac)
        

}))

function displayZodiac(zodiac){
    const $signCard = document.createElement('div')
        const $zodiacLink = document.createElement('a')

        $signCard.className = "tick"
        
        const $zodiacImage = document.createElement('img')

        $zodiacImage.src = zodiac.image
        $zodiacImage.alt = zodiac.name
        $zodiacImage.title = zodiac.name
        
        $zodiacLink.href = `show-zodiac.html?name=${zodiac.name}`

        $zodiacLink.appendChild($zodiacImage)

        $signSection.append($signCard)
        $signCard.append($zodiacLink)

        $zodiacImage.addEventListener('mouseover', mouseoverEvent)
        $zodiacImage.addEventListener('mouseout', mouseoverEvent)

        function mouseoverEvent() {
            $zodiacImage.classList.toggle('mouseover')
        }
}
