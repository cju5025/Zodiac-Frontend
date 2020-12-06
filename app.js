const $signSection = document.querySelector('#signs')

fetch("http://localhost:3000/zodiacs")
    .then(response => response.json())
    .then(zodiacs => zodiacs.forEach(zodiac => {
        displayZodiac(zodiac)
        

}))

function displayZodiac(zodiac){
    const $signCard = document.createElement('div')
        
        const $zodiacLink = document.createElement('p')

        $signCard.className = "tick"
        
        const $zodiacImage = document.createElement('img')

        $zodiacImage.src = zodiac.image
        $zodiacImage.alt = zodiac.name
        $zodiacImage.title = zodiac.name
        
        // $zodiacLink.href = `show-zodiac.html?name=${zodiac.name}`

        $zodiacLink.appendChild($zodiacImage)

        $signSection.append($signCard)
        $signCard.append($zodiacLink)

        $zodiacImage.addEventListener('mouseover', mouseoverEvent)
        $zodiacImage.addEventListener('mouseout', mouseoverEvent)

        function mouseoverEvent() {
            $zodiacImage.classList.toggle('mouseover')
        }

    const $zodiacCard = document.querySelector('.zodiac-info')

    $zodiacImage.addEventListener('click', clickEvent)

    function clickEvent(){
        fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=${zodiac.name}`, {
        "method": "POST",
        "headers": {
            "x-rapidapi-key": "bbad202a72msh4a869d328b03672p1e0647jsnf0b3ca6028a0",
            "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(sign => {
            console.log(sign)
            
            displayName(sign);
            displayDateInfo(sign);
            displayMood(sign);
            displayHoroscope(sign);
            displayColor(sign);
            displayCompatability(sign);
            displayLuckyTime(sign);
            displayLuckyNumber(sign)

        })
        .catch(err => {
            console.error(err);
        });

        function displayName(sign){
            $zodiacCard.innerHTML= ""
            const $signName = document.createElement('h1')
            $signName.textContent = zodiac.name 
            $zodiacCard.append($signName)
        }

        function displayDateInfo(sign){
            const $signDateRange = document.createElement('p')
            $signDateRange.textContent =  sign.date_range
            $zodiacCard.append($signDateRange)

            const $signCurrentDate = document.createElement('p')
            $signCurrentDate.textContent = `Date: ${sign.current_date}`
            $zodiacCard.append($signCurrentDate)
        }

        function displayMood(sign) {
            const $signMood = document.createElement('p')
            $signMood.textContent = `Mood: ${sign.mood}`
            $zodiacCard.append($signMood)
        }

        function displayHoroscope(sign) {
            const $signHoroscope = document.createElement('p')
            $signHoroscope.classList.add('horoscope')
            $signHoroscope.textContent = `Today's Horoscope: ${sign.description}`
            $zodiacCard.append($signHoroscope)
        }

        function displayColor(sign){
            const $signColor = document.createElement('p')
            $signColor.textContent = `Color: ${sign.color}`
            $zodiacCard.append($signColor)
        }

        function displayCompatability(sign){
            const $signCompatibility = document.createElement('p')
            $signCompatibility.textContent = `Compatibility: ${sign.compatibility}`
            $zodiacCard.append($signCompatibility)
        }

        function displayLuckyTime(sign){
            const $signLuckyTime = document.createElement('p')
            $signLuckyTime.textContent = `Lucky Time: ${sign.lucky_time}`
            $zodiacCard.append($signLuckyTime)
        }

        function displayLuckyNumber(sign){
            const $signLuckyNumber = document.createElement('p')
            $signLuckyNumber.textContent = `Lucky Number: ${sign.lucky_number}`
            $zodiacCard.append($signLuckyNumber)
            
            }
        }
            

}

// function exaltedZodiac(zodiac){
//     const $selectedZodiacName = document.createElement('h2')

//     $selectedZodiacName.textContent = zodiac.name

// }



// fetch(`https://sameer-kumar-aztro-v1.p.rapidapi.com/?day=today&sign=${name}`, {
// 	"method": "POST",
// 	"headers": {
// 		"x-rapidapi-key": "bbad202a72msh4a869d328b03672p1e0647jsnf0b3ca6028a0",
// 		"x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com"
// 	}
// })
// .then(response => response.json())
// .then(sign => {
// 	console.log(sign)
	
// 	displayName(sign);
// 	displayDateInfo(sign);
// 	displayMood(sign);
// 	displayHoroscope(sign);
// 	displayColor(sign);
// 	displayCompatability(sign);
// 	displayLuckyTime(sign);
// 	displayLuckyNumber(sign)

// })
// .catch(err => {
// 	console.error(err);
// });

// function displayName(sign){
// 	const $signName = document.createElement('h1')
//     $signName.textContent = name 
// 	$zodiacCard.append($signName)
// }

// function displayDateInfo(sign){
// 	const $signDateRange = document.createElement('p')
// 	$signDateRange.textContent =  sign.date_range
// 	$zodiacCard.append($signDateRange)

// 	const $signCurrentDate = document.createElement('p')
// 	$signCurrentDate.textContent = `Date: ${sign.current_date}`
// 	$zodiacCard.append($signCurrentDate)
// }

// function displayMood(sign) {
// 	const $signMood = document.createElement('p')
// 	$signMood.textContent = `Mood: ${sign.mood}`
// 	$zodiacCard.append($signMood)
// }

// function displayHoroscope(sign) {
// 	const $signHoroscope = document.createElement('p')
// 	$signHoroscope.textContent = `Today's Horoscope: ${sign.description}`
// 	$zodiacCard.append($signHoroscope)
// }

// function displayColor(sign){
// 	const $signColor = document.createElement('p')
// 	$signColor.textContent = `Color: ${sign.color}`
// 	$zodiacCard.append($signColor)
// }

// function displayCompatability(sign){
// 	const $signCompatibility = document.createElement('p')
// 	$signCompatibility.textContent = `Compatibility: ${sign.compatibility}`
// 	$zodiacCard.append($signCompatibility)
// }

// function displayLuckyTime(sign){
// 	const $signLuckyTime = document.createElement('p')
// 	$signLuckyTime.textContent = `Lucky Time: ${sign.lucky_time}`
// 	$zodiacCard.append($signLuckyTime)
// }

// function displayLuckyNumber(sign){
// 	const $signLuckyNumber = document.createElement('p')
// 	$signLuckyNumber.textContent = `Lucky Number: ${sign.lucky_number}`
// 	$zodiacCard.append($signLuckyNumber)
// }