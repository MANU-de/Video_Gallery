var myMp4 = document.getElementById("mp4"),
	myWebm = document.getElementById("webm"),
	myVid = document.getElementById("myVideo"),
	mp4Url = "",
	webmUrl = "";

function playVid(ID) {
	switch (ID) {
		case "one":
			mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_1.mp4";
			webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_1.webm";
			break;
		case "two":
			mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_2.mp4";
			webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_2.webm";
			break;
		case "three":
			mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_3.mp4";
			webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_3.webm";
			break;
		case "four":
			mp4Url = "https://frontenddevelopment.tech/video-gallery/mp4/vid_4.mp4";
			webmUrl = "https://frontenddevelopment.tech/video-gallery/webm/vid_4.webm";
			break;
	}
	myMp4.setAttribute("src", mp4Url);
	myWebm.setAttribute("src", webmUrl);
	myVid.load();
	myVid.play();
	myVid.poster = "";
}
