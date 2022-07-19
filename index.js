var width=20;
function showProgress(){
console.log('JJ')
const interval = setInterval(changeProgress,10);

function changeProgress(){
const progress = document.querySelector('#progressTrack');
if(width>100)
{
	      clearInterval(interval);
}else{
  width++;
  progress.style.width=width+'%';
}
}

}
