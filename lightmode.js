let lightmode = localStorage.getItem('lightmode')// accesses the local storage of the browser and getitem retrieves the data from local browser storage
const themeSwitch = document.getElementById('theme-switch') // document=our html document and getelementbyid finds the element inside the document by it's id

themeSwitch.addEventListener("click", () => {
    lightmode = localStorage.getItem('lightmode')
        if(lightmode !== "active"){// checks if it's active when clicked on the themeswitch aka div
            enableLightmode()
            document.getElementById('mode-text').innerHTML = "lightmode"
        }
        else{
            disableLightmode()
            document.getElementById('mode-text').innerHTML = "darkmode"//replaces the text when pressed
        }
})

const enableLightmode = () => {
    document.body.classList.add('lightmode')// adds lightmode class to body
    localStorage.setItem('lightmode', 'active')// from the local storage sets the lightmode to active(later needed)
}

const disableLightmode = () => {
    document.body.classList.remove('lightmode')//removes the light mode class from body
    localStorage.setItem('lightmode', null)
}

if(lightmode === "active") enableLightmode()


// play audio

const note = document.getElementById('note')
const audio = document.getElementById('audio')

note.addEventListener('click', () => {
    if (audio.paused){ // if the current status of the audio is paused then when clicked it will play
        audio.play()
    }
    else{
        audio.pause()
    }
});

const container = document.getElementById('interactive')
const clicksfx = document.getElementById('clickingsound')

container.addEventListener('click', () => {
    if(clicksfx.paused){
        clicksfx.play()
    }
    else{
        clicksfx.pause()
    }
})

