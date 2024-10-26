document.addEventListener("DOMContentLoaded", function() {
  filterSelection("all");
});
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("object-to-filter");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "filter-show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "filter-show");
  }
  SetGridSizeFromRowNumber();
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("filter-btn-container");
var btns = btnContainer.getElementsByClassName("btn1");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("filter-active-btn");
    current[0].className = current[0].className.replace("filter-active-btn", " ");
    this.className += " filter-active-btn";
  });
}

function SetGridSizeFromRowNumber() {
  document.getElementById("video-game-section").style.marginBottom = .3 * window.innerWidth;
  var x = document.getElementsByClassName("filter-show");
  var rowNumber = x.length/4;
  var grid = document.getElementsByClassName("grid-video-game-1");
  // grid[0].style.height = "calc(3vw * 1 + .1em)";
  console.log(document.getElementById("video-game-section").offsetHeight);
  var lineCount = document.getElementById("video-game-section").offsetHeight / (.03 * window.innerWidth);
  lineCount = Math.round(lineCount) + 3;
  var paddingBottom = "5vw";
  if (rowNumber <= 1) 
  {
    console.log("here doing thing : " + window.innerHeight);
    lineCount = (window.innerHeight - (window.innerHeight * 0.5)) / (.03 * window.innerWidth);
    lineCount = Math.round(lineCount) + 4;
    paddingBottom = window.innerHeight - (window.innerHeight * 0.35) - document.getElementById("video-game-section").offsetHeight;
    document.getElementById("video-game-section").style.marginBottom = paddingBottom.toString() + "px";
  } else {
    document.getElementById("video-game-section").style.marginBottom = paddingBottom.toString();
  }

    
  var text = 'calc(3vw *' + lineCount + ' + .1em)';
  console.log(lineCount);
  // grid[0].style.height = text;
  console.log(grid[0].style.height);

  // if (rowNumber <= 1) {
  //   grid[0].style.height = "calc(3vw * " + lineCount + "+ .1em)";
  // } else if (rowNumber <= 2 && rowNumber > 1) {
  //   grid[0].style.height = "calc(3vw * 19 + .1em)";
  // } else if (rowNumber <= 3 && rowNumber >2) {
  //   grid[0].style.height = "calc(3vw * 27 + .1em)";
  // } else if (rowNumber <= 4 && rowNumber > 3) {
  //   grid[0].style.height = "calc(3vw * 35 + .1em)";
  // } 
}
