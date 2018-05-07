


btnPast.addEventListener("click", e =>{
 document.getElementById('present').classList.add('hide');
 document.getElementById('future').classList.add('hide');
 document.getElementById('past').classList.remove('hide');
});

btnPresent.addEventListener("click", e =>{
 document.getElementById('present').classList.remove('hide');
 document.getElementById('future').classList.add('hide');
 document.getElementById('past').classList.add('hide');
});

btnFuture.addEventListener("click", e =>{
 document.getElementById('present').classList.add('hide');
 document.getElementById('future').classList.remove('hide');
 document.getElementById('past').classList.add('hide');
});

