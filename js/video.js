var video = document.querySelector("#player1");
var volume = document.querySelector('#volume');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});
// play video
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume*100 +"%"
});
//pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

//slow down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Slow Down Video");
	// video.playbackRate = video.playbackRate * 0.95;
	video.playbackRate *= 0.95;
	console.log("New speed is "+video.playbackRate );
});

//speed up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Speed Up Video");
	video.playbackRate /= 0.95;
	console.log("New speed is "+video.playbackRate );
});

//skip ahead
document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time " +video.currentTime)

	if (video.currentTime + 15 < video.duration){
		video.currentTime = video.currentTime +15
		console.log ("New time "+video.currentTime)
	}
	else {
		console.log ("Go back", video.currentTime)
		video.currentTime = 0;
	}
});

//mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		console.log("Not Muted");
		this.innerHTML = "Mute";
		video.muted = false;
	}
	else{
		console.log("Muted");
		this.innerHTML = "Unmute";
		video.muted = true;
	}
});

//volume slider
document.querySelector("#slider").addEventListener("click", function() {
	console.log("Changing volume ");
	console.log(this.value);
	video.volume = this.value /100;
	document.querySelector("#volume").innerHTML=video.volume*100 +"%"
});

//old school button
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Changing CSS");
	video.classList.add("oldSchool");
});

//original button
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Removing CSS");
	video.classList.remove("oldSchool");
});