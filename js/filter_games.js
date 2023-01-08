filterSelection("all")
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
  var x = document.getElementsByClassName("filter-show");
  var rowNumber = x.length/4;
  var grid = document.getElementsByClassName("grid-video-game-1");
  if (rowNumber <= 1) {
    grid[0].style.height = "calc(3vw * 11 + .1em)";
  } else if (rowNumber <= 2 && rowNumber > 1) {
    grid[0].style.height = "calc(3vw * 18 + .1em)";
  } else if (rowNumber <= 3 && rowNumber >2) {
    grid[0].style.height = "calc(3vw * 25 + .1em)";
  } else if (rowNumber <= 4 && rowNumber > 3) {
    grid[0].style.height = "calc(3vw * 32 + .1em)";
  } 
}
