const checkbox = document.querySelector('.check__input')
const btn_play = document.querySelector('.button-play')

function check_btn() {
  if(checkbox.checked) {
    btn_play.style.display = 'none'
  } else {
    btn_play.style.display = 'block'
  }
}