const hamburger = document.querySelector(".hamburger")
const closer = document.querySelector(".close")
const nav = document.querySelector("nav")

const open = () => {
  nav.style.transform = "translateX(0)"
}

const close = () => {
  nav.style.transform = "translateX(100rem)"
}

setInterval(()=>{
    if (window.innerWidth < 769) {
      hamburger.onclick = open
      closer.onclick = close
    } else {
      nav.style.transform = "none"
    }

})

const video = document.querySelector("video")
const play = document.querySelectorAll(".player")[0]
const pause = document.querySelectorAll(".player")[1]

play.onclick = () => {
  video.play()
  play.style.display = "none"
  pause.style.display = "block"
}

pause.onclick = () => {
  video.pause()
  pause.style.display = "none"
  play.style.display = "block"
}