document.addEventListener("DOMContentLoaded", function() {

var summonCats = document.querySelector('.summon-cats');
var catBoxes = document.querySelectorAll('.cat-box');

summonCats.addEventListener('click', function() {
  $.ajax({
  url: "http://bitkittens.herokuapp.com/cats.json",
  method: "GET",
  data: {number: 3},
  dataType: 'json'
}).done(function (responseData) {
    var catResults = responseData.cats;
    for (var i = 0; i < catResults.length; i++) {
      
      var img = document.createElement('img');
      var catPic = catResults[i]['photo'];
      var catBox = catBoxes[i];
      img.src = catPic;
      catBox.appendChild(img);
    }

});
});
});
