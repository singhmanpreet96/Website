window.onload = function()
{
	updateTimeAndDate();
	enterButton();
}

function updateTimeAndDate()
{
	var now = new Date();
	var minutes = now.getMinutes().toString();
	var hours = now.getHours().toString();
	var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	var date = now.getDate().toString();
	var year = now.getFullYear().toString();
	var ampm;

	//Figures out AM/PM
	if(hours >= 12)
	{
		ampm = "pm";
	}
	else
	{
		ampm = "am";
	}

	//Convert to traditional time
	if(hours > 12)
	{
		hours = hours - 12;
	}
	else if(hours == 12 || hours == 0)
	{
		hours = 12;
	}

	//Add extra 0 for minutes under 10
	if(minutes < 10)
	{
		minutes = "0" + minutes;
	}


	document.getElementById('date').innerHTML = month[now.getMonth().toString()] + " " + date + ", " + year;
	document.getElementById('day').innerHTML = day[now.getDay().toString()];
	document.getElementById('time').innerHTML = hours + ":" + minutes + " " + ampm;

	//call function again after 1000ms
	setTimeout(updateTimeAndDate, 1000);
}

function enterButton()
{
	var continueButton = document.getElementById('continueButton');
	var mainBackground = document.getElementById('skylineBackgroundAnimated');
	var timeHolder = document.getElementById('timeDateHolderAnimated');
	var caption = document.getElementById('caption');
	var buttonHolder = document.getElementById('buttonHolder');

	//mouse hovered over button
	continueButton.addEventListener("mouseover", function()
	{
		mainBackground.setAttribute('class', "skylineBackgroundBlurred");
		timeHolder.setAttribute('class', "timeDateHolderBlurred");
	})

	//mouse not hovering over button
	continueButton.addEventListener("mouseout", function()
	{
		mainBackground.setAttribute('class', "skylineBackground");
		timeHolder.setAttribute('class', "timeDateHolder");
	})

	continueButton.addEventListener("click", function(){
		mainBackground.setAttribute('class', "skylineBackgroundExit");
		timeHolder.setAttribute('class', "timeDateHolderExit");
		caption.setAttribute('class', "captionExit");
		buttonHolder.setAttribute('class', "buttonHolderExit")
	})
}

function delay(page)
{
	switch(page)
	{
		case 1: 
		setTimeout(aboutPage, 2300);
		break;
	}
}

function aboutPage()
{
	window.location.href = "./home.html";
}
