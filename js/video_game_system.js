let videoGameElements = [];
let videoGameContainer = document.getElementById("video-game-container");

for (let i = 0; i < videoGameDatas.length; i++) {
    var _videoGameProject = document.createElement("div");
    _videoGameProject.setAttribute('class', 'video-game-card object-to-filter ' + videoGameDatas[i]["filter-type"]);

    _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-card-arrow'}));

    _videoGameProject.appendChild(Object.assign(document.createElement('img'), {classList: 'video-game-card-img', src: videoGameDatas[i].image1}));
    var scrollDiv = _videoGameProject.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-scroll-div'}));
    var scrollContainer = scrollDiv.appendChild(Object.assign(document.createElement('div'), {classList: 'video-game-scroll-container'}));
    scrollContainer.appendChild(Object.assign(document.createElement('h4'), {classList: 'video-game-scroll-text1'}, {innerHTML: videoGameDatas[i].name + ' • '}));
    scrollContainer.appendChild(Object.assign(document.createElement('h4'), {classList: 'video-game-scroll-text2'}, {innerHTML: videoGameDatas[i].name + ' • '}));
    _videoGameProject.appendChild(Object.assign(document.createElement('a'), {href: videoGameDatas[i].link, innerHTML: '►'}));

    videoGameContainer.appendChild(_videoGameProject);


    videoGameElements.push(_videoGameProject);
    
} 
