// alert("script ran")
function changeOnClick(){
  // generate a random number between 1-6
  var random_number1 = Math.floor(Math.random()*6)+1;
  var random_number2 = Math.floor(Math.random()*6)+1;
  // select the image based on the random number
  var randomDiceImage1 = "images/dice"+random_number1+".png"
  var randomDiceImage2 = "images/dice"+random_number2+".png"
  // change the images by query selector
  image1_tag = document.querySelectorAll("img")[0];
  image1_tag.setAttribute("src",randomDiceImage1)
  image2_tag = document.querySelectorAll("img")[1];
  image2_tag.setAttribute("src",randomDiceImage2)

  // logic begins here to see who wins
  // logic begins here to see who wins
  if(random_number1>random_number2){
    document.getElementById("tag_line").innerHTML = "You should go with <span style='color: #f7a440;'>option1</span>";
  }
  else if (random_number1 < random_number2) {
    document.getElementById("tag_line").innerHTML = "You should go with <span style='color: #f7a440;'>option2</span>";
  }
  else
  {
    document.getElementById("tag_line").innerHTML = "Its a <span style='color: #fb3640;'>tie!</span> Try again";
  }

}
