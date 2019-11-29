// установить время по принципу: 24 * 3600 * 1000; // 24 часа
var timeBeforeStart = 3000;//минимальный период времени, после которого можно показывать попап
var timeToQuiteStart = 10000;//через какое время ловец запустится автоматически
var timeToRestart = 20000; //через какое время ловец снова получит возможность показаться пользователю

var localStorageInitTime = localStorage.getItem('localStorageInitTime');
if (localStorageInitTime === null) {
	localStorage.setItem('localStorageInitTime', +new Date());
} 
else if(+new Date() - localStorageInitTime > timeToRestart){
	localStorage.clear();
	localStorage.setItem('localStorageInitTime', +new Date());
}
var inWin=0;
//проверка, был ли показан попап 
if(localStorage.getItem('popupIsShowed') == undefined ){
	var count = false;
	localStorage.setItem('popupIsShowed', count);
}

//проверка на движение мыши вне странички
setTimeout(function(){
	window.addEventListener('mousemove', function(e) {
		window.onmouseout = function(e)
		{
			inWin = 0;
			setTimeout(checkIfOut(e), 1);
		}
		window.onmouseover = function(e)
		{
			inWin = 1;
		}		
	})	
},timeBeforeStart);
	
//показывает попап при условии, что он еще не был показан, и мышка покидает страничку, передвигаясь в сторону вкладок
function checkIfOut(e)
{
	if(!inWin && e.clientY < 5 && localStorage.getItem('popupIsShowed')=='false')
	{
		count = true;
		localStorage.setItem('popupIsShowed', count);
		// confirm(localStorage.getItem('popupIsShowed'));
		jQuery_3_4_1(".leadCatcher_background").show();
		jQuery_3_4_1(".leadCatcher").show();
		jQuery_3_4_1("html,body").css("overflow","hidden")
	}
}



//вызов попапа спустя три минуты на странице
setTimeout(function(){
	if(localStorage.getItem('popupIsShowed')=='false' || localStorage.getItem('popupIsShowed')==false){
		jQuery_3_4_1(".leadCatcher_background").show();
		jQuery_3_4_1(".leadCatcher").show();
		jQuery_3_4_1("html,body").css("overflow","hidden");
		count = true;
		localStorage.setItem('popupIsShowed', count);
	}
}, timeToQuiteStart);

function hideLeadCatcher(){
	jQuery_3_4_1(".leadCatcher_background").hide();
	jQuery_3_4_1(".leadCatcher").hide();
	jQuery_3_4_1("html,body").css("overflow","visible");
}
//вставка на страницу html разметки попапа
jQuery_3_4_1(function (){
    jQuery_3_4_1('body').append(
    	'<div onclick="hideLeadCatcher()" class="leadCatcher_background"></div>'+
		'<div class="leadCatcher">'+
			'<h2 class="leadCatcher_header">Не нашли то, что искали?</h2>'+
			'<p class="leadCatcher_text">Мы перезвоним вам, ответим на все вопросы и подберём программу под ваш запрос.</p>'+
			'<form action="" method="post">'+
				'<input required class="leadCatcher_tel leadCathcher_input__fullsize leadCathcher_input__field" name="FormCallback[phone]" placeholder="Введите ваш телефон" type="tel">'+
				'<input required class="leadCatcher_name leadCathcher_input__fullsize leadCathcher_input__field" name="FormCallback[name]" placeholder="Как вас зовут?" type="text">'+
				'<label><input required class="leadCatcher_rights" type="checkbox" checked>Ознакомлен и согласен с <a href="https://excurspb.ru/politika-konfidentsialnosti/" target="_blank">"Политикой конфиденциальности"</a> ООО "Прогулки по Петербургу".</label>'+
				'<input class="leadCatcher_button leadCathcher_input__fullsize" type="submit" value="Жду звонка">'+
			'</form>'+
		'</div>'
	);
});

//вставка стилей попапа
jQuery_3_4_1(document).ready(function() {
	jQuery_3_4_1(".leadCatcher_background").hide();
	jQuery_3_4_1(".leadCatcher").hide();
	jQuery_3_4_1(".leadCatcher_background").css(
	    {
	    	'background': 'rgba(0,0,0,0.5)',
		    'text-align': 'center',
		    'position': 'fixed',
		    'top': '0',
		    'left': '0',
		    'width': '100vw',
		    'height': '100vh',
		    'cursor': 'pointer'
		}
	);			
	jQuery_3_4_1(".leadCatcher").css(
	    {
	    	'position': 'fixed',
			'top':'20px',
			'left': '37%',
			'background': 'white',
			'width': '25vw',
			'border': '2px LightSeaGreen solid',
			'border-radius': '10px',
			'padding': '1.5% 1% 1.5% 1%',
			'-webkit-box-sizing': 'border-box',
			'-moz-box-sizing': 'border-box',
			'box-sizing': 'border-box',
			'font-family': 'pt_sansregular,sans-serif' 
		}
	);
	jQuery_3_4_1(".leadCatcher_header").css(
		{
			'color': 'LightSeaGreen',
			'margin-bottom': '1em'
		}
	);
	jQuery_3_4_1(".leadCatcher_text").css(
		{					
			'margin-bottom': '1em'
		}
	);
		jQuery_3_4_1(".leadCathcher_input__fullsize").css(
		{
			'width': '100%'
		}
	);
	jQuery_3_4_1(".leadCathcher_input__field").css(
		{
			'height': '30px',
			'font-size': '1em',
			'margin-bottom': '1em',
			'padding': '0 1em',
			'-webkit-box-sizing': 'border-box',
			'-moz-box-sizing': 'border-box',
			'box-sizing': 'border-box',
			'border': '1px LightSeaGreen solid'
		}
	);
	jQuery_3_4_1(".leadCathcher_input__field:focus").css(
		{
			'border': '1px SeaGreen solid'
		}
	);
	jQuery_3_4_1(".leadCatcher label").css(
		{
			'font-size': '0.7em',
			'padding-bottom': '7px'
		}
	);
	jQuery_3_4_1(".leadCatcher_rights").css(
		{
			'cursor': 'pointer',
			'margin-right': '5px'	
		}
	);
	jQuery_3_4_1(".leadCatcher a").css(
		{
			'text-decoration': 'none',
			'color': 'DarkCyan'
		}
	);
	jQuery_3_4_1(".leadCatcher_button").css(
		{
			'cursor': 'pointer',
			'height': '35px',
			'background': 'LightSeaGreen',
			'color': 'white',
			'font-size': '1em',
			'border': 'none',
			'border-bottom': '2px DarkCyan solid',
			'border-radius': '5px',
			'margin-top': '1em'
		}
	);
	jQuery_3_4_1(".leadCatcher_button:active").css(
		{
			'background': 'DarkCyan'
		}
	);
	document.querySelector('style').textContent += "@media (max-width: 768px) {.leadCatcher{top:20px;left: 10% !important;width: 80vw !important;}";
});
