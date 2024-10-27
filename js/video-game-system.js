let videoGameElements = [];
let videoGameLinks = [];
let videoGameContainer = document.getElementById("video-game-container");

for (let i = 0; i < videoGameDatas.length; i++) {
  var _videoGameCardContainer = document.createElement("div");
  _videoGameCardContainer.setAttribute(
    "class",
    "video-game-card-container object-to-filter " +
    videoGameDatas[i]["filter-type"]
  );
  // Redirige vers la page correspondante en cliquant sur la carte
  _videoGameCardContainer.addEventListener("click", function() {
    window.location.href = videoGameDatas[i].link;
  });
  // Crée une div parent qui contiendra "video-game-card" et "video-game-card-bottom"
  var _videoGameCardWrapper = _videoGameCardContainer.appendChild(
    document.createElement("div")
  );
  _videoGameCardWrapper.setAttribute("class", "video-game-card-wrapper");
  // Ajoute la div "video-game-card" dans le parent
  var _videoGameProject = _videoGameCardContainer.appendChild(
    document.createElement("div")
  );
  _videoGameProject.setAttribute("class", "video-game-card");

  _videoGameProject.appendChild(
    Object.assign(document.createElement("img"), {
      classList: "video-game-card-img text-zone",
      src: videoGameDatas[i].image1,
      id: i,
    })
  );

  
  var _videoGameCardDiv = _videoGameCardContainer.appendChild(
    Object.assign(document.createElement("div"), {
      classList: "video-game-card-bottom",
    })
  );
  _videoGameCardDiv.appendChild(
    Object.assign(document.createElement("b"), {
      innerHTML: videoGameDatas[i].name,
    })
  );
  if (videoGameDatas[i]["tags"] != "") {
    var _tagDiv = _videoGameProject.appendChild(
      Object.assign(
        document.createElement("div"), {
          classList: "video-game-tag-div"
        }
      )
    );
    var _scrollDiv = _tagDiv.appendChild(
      Object.assign(
        document.createElement("div"), {
          classList: "scroll-text-new-div"
        }
      )
    );
    var _sizeDiv = _scrollDiv.appendChild(
      Object.assign(
        document.createElement("div"), {
          style: "width: 1000px;"
        }
      )
    );
  }

  var videoGameLink = _videoGameProject.appendChild(
    Object.assign(document.createElement("a"), {
      href: videoGameDatas[i].link,
      style: "display:none",
    })
  );

  videoGameContainer.appendChild(_videoGameCardContainer);
  _videoGameCardContainer.appendChild(_videoGameCardWrapper);
  _videoGameCardWrapper.appendChild(_videoGameProject);
  _videoGameCardWrapper.appendChild(_videoGameCardDiv);

  videoGameElements.push(_videoGameProject);
  videoGameLinks.push(videoGameLink);
}