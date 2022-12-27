const watch = document.querySelector("#watch");
let miliseconds = 0;
let timer;

const StartWatch = () => {
			watch.classList.remove('pause');
			clearInterval(timer);
			timer = setInterval(()=> {
				miliseconds += 10;
				let dateTimer = new Date(miliseconds);
				watch.innerHTML =
								('0'+dateTimer.getUTCHours()).slice(-2) + ':' +
								('0'+dateTimer.getUTCMinutes()).slice(-2) + ':' +
								('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
								('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
							},10)

};

const PauseWatch = () => {
	watch.classList.add('pause');
	clearInterval(timer);
};
 const ResetWatch = () => {
	watch.classList.remove('pause');
	clearInterval(timer);
	miliseconds = 0;
	watch.innerHTML = '00:00:00:00';

 };
 document.addEventListener('click', (e) =>{
  const element = e.target;
	if (element.id === 'start') StartWatch();
	if (element.id === 'pause') PauseWatch();
	if (element.id === 'reset') ResetWatch();
 })