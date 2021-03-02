# ZodiHack

ZodiHack is a webpage designed to read a given zodiac sign's horoscope for the current date as well as the day prior and the day after. Note that this is only the frontend portion of a full stack project. See below for link to backend repository.

Check out my blog post on adding audio to your vanilla javascript apps here-
* https://alexandermgabriel.medium.com/adding-audio-to-a-html-webpage-e19c8cb72705

* https://github.com/cju5025/Zodiac-Backend

## Video Demonstration
https://youtu.be/U7sj0LYnTHs

## Technologies Used

* Javascript
* HTML
* CSS

## How To Use

### Start Up

* Fork and Clone GitHub repository
* Open in editor of choice
* Make sure Lite Server is installed 
```
npm install lite-server
```
* Run the following in terminal
```
$ npx lite-server
```
## Frontend Description

Uses Javascript, HTML and CSS to display zodiac sign's and their corresponding horoscopes in the web browser by fetching data from a third party API titled Aztro.


### Code Examples

``` CSS
    .circle .tick {
        width: 678px;
        height: 10px;
        position: absolute;
        border-radius: 0%;
        left: 26%;
        top: 56%;
        margin-left: -5px;
        margin-top: -5px;
    }

    .circle .tick:nth-child(1) {
        transform: rotate(0deg) translate(0%, 0%);
    }
    .circle .tick:nth-child(2) {
        transform: rotate(30deg) translate(0%, 0%);
    }
    .circle .tick:nth-child(2) img {
        transform: rotate(-30deg) translate(0%, 0%);
    }
```
* Uses CSS to place images in a circle

``` Javascript
    $zodiacImage.addEventListener('mouseover', mouseoverEvent)
    $zodiacImage.addEventListener('mouseout', mouseoverEvent)

    function mouseoverEvent() {
        $zodiacImage.classList.toggle('mouseover')
    }
```
* Uses Javascript to magnify image size while the mouse hovers over an icon.

``` HTML
<audio src="music/2019-12-13_-_In_The_Light_-_FesliyanStudios.com_-_David_Renda.mp3" controls loop></audio>
<video playsinline autoplay muted loop src="videos/Pexels Videos 4645.mp4"type="video/mp4"></video>
```
* Uses HTML to add audio and video to webpage.


## Contributors

* Alexander Gabriel - @kosmos02
* Colter Ulrich - @cju5025