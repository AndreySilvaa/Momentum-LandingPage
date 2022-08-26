const barsIcon = document.querySelector("#iconbars > i")
const NavMenu = document.querySelector(".navmenu")

// Show/Hide menu

barsIcon.addEventListener("click", () =>{
    NavMenu.classList.toggle('show')
})

window.onscroll = () =>{
    NavMenu.classList.remove('show')
}