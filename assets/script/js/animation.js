ScrollReveal({ reset: true })

var up = {
  distance: "300%",
  origin: "bottom",
  opacity: null,

}

var left = {
  distance: "700%",
  origin: "left",
  opacity: null,
  delay: '900',

}

var right = {
  distance: "700%",
  origin: "right",
  opacity: null,
  delay: '900',
}

ScrollReveal().reveal(".anime-normal", {
  delay: '500',
})
ScrollReveal().reveal(".anime-top", up)
ScrollReveal().reveal(".anime-left", left)
ScrollReveal().reveal(".anime-right", right)
