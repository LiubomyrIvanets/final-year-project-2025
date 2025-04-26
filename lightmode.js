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
