
function showmore(){
  document.getElementById('less').classList.remove('hide_project')
  document.getElementById('more').classList.add('hide_project')
  const b=document.getElementsByClassName('work')
  for(let i=0;i<b.length;i++)
  {
      b[i].classList.remove('hide_project')
  }
}

function showless(){
  document.getElementById('more').classList.remove('hide_project')
  document.getElementById('less').classList.add('hide_project')
  const c=document.getElementsByClassName('hide')
  for(let i=0;i<c.length;i++)
  {
      c[i].classList.add('hide_project')
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycby0qF7s-b2KsyvtjRDPDwnnaFIJgezAnFe_VXwlw72rzCbxA42QZCsHajUgvELRiiU1sw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form) })
  .then(response => {
    msg.innerHTML = "Message Sent successfully"
    setTimeout(function() {
      msg.innerHTML = ""
    }, 5000)
    form.reset()
  })
  .catch(error => console.error('Error!', error.message))
})
