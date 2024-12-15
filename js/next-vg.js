var rightButton = document.getElementById('right-project-button');
var leftButton = document.getElementById('left-project-button');
var rightTitle = document.getElementById('right-project');
var leftTitle = document.getElementById('left-project');
SetupVideoGamePage();

function SetupVideoGamePage() {
    var actualIndex = parseInt(videoGameDatas.findIndex(x => x.link == "video-games/" + location.href.split("/").pop().split("?").shift()));
    var rightIndex = 0;
    var leftIndex = 0;
    if (actualIndex === 0) {
        leftIndex = videoGameDatas.length-1;
    } else {
        leftIndex = actualIndex-1;
    }
    if (actualIndex === videoGameDatas.length-1) {
        rightIndex = 0;
    } else {
        rightIndex = actualIndex+1;
    }
    leftButton.setAttribute('onclick', "window.location.href='../" + videoGameDatas[leftIndex].link + "'");
    rightButton.setAttribute('onclick', "window.location.href='../" + videoGameDatas[rightIndex].link + "'");
    leftTitle.innerText = videoGameDatas[leftIndex].name;
    rightTitle.innerText = videoGameDatas[rightIndex].name;

}