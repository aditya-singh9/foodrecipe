const darkBtn = document.getElementById('checkbox');

darkBtn.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
})