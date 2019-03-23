var goPlay;
var totalSeconds;

var app = (function () {

	var timer;

	var start = function() {
		timer = setInterval(updateClock, 1000);
		totalSeconds = 3000;
		goPlay = false;
	}	
	
	var updateClock = function() {
		if(goPlay == true)
		{
		    --totalSeconds;
		}
		var hour = Math.floor(totalSeconds / 3600);
	    var minute = Math.floor((totalSeconds - hour * 3600) / 60);
	    var seconds = totalSeconds - (hour * 3600 + minute * 60);

		if(hour < 10) {
			hour = "0" + hour;
		}
		
		if(minute < 10) {
			minute = "0" + minute;
		}
		
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		
		$("div1").text(minute + ":" + seconds);

		if(totalSeconds == 0)
		{
			totalSeconds = 3000;
		}
	}

	return {
		start: start
	}		
})();


document.onkeyup = function(e) 
{ 
	if (e.which == 77) 
	{
	  goPlay = true;
	}

	if (e.which == 66) 
	{
	  goPlay = false;
	  totalSeconds = 3000;
	}
};

app.start();