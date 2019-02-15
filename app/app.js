/*
Init app
interact with DOM
interact with localstorage

 */

$(document).ready(function(){

  var circle= $('.circle');
  // var decrease= $('.circle');
  var count1=0;

//   increase.click(function(){
//     if($('.circle').css("background-color"),'red'){
//       count1 += 1;
//     $('.number1').replaceWith('<div class="number1">'+ count1 +'</div>');
//   }
// });

//false
  circle.click(function(){
    if($(this).css('background-color')=== 'rgb(255, 0, 0)'){
      count1 += 3;
    }
    else{
      count1 -= 1;
    }
    $('.number1').replaceWith('<div class="number1">'+ count1 +'</div>');
    localStorage.setItem("score", count1);
  });


//function setbackground(){

  //makes sure this function gets called every few seconds
  window.setInterval( setColor , 500); // 5000 milliseconds delay

  function setColor(){

  for(var i=0; i<circle.length; i++){
    var index = Math.round(Math.random() * 9);
    var ColorValue = "FFFFFF"; // default color - white (index = 0)
    if(index == 1)
        ColorValue = 'red'; //peach
      if(index == 2)
        ColorValue = "pink"; //violet
      if(index == 3)
        ColorValue = "green"; //lt blue
      if(index == 4)
        ColorValue = "yellow"; //cyan
      if(index == 5)
        ColorValue = "blue"; //tan
      if(index == 6)
        ColorValue = "brown"; //lt green
      if(index == 7)
        ColorValue = "white"; //lt yellow
      if(index == 8)
        ColorValue = "orange"; //lt orange
      if(index == 9)
        ColorValue = "purple"; //lt grey

      circle[i].style.backgroundColor = ColorValue;
  }
}

  // decrease.click(function(){
  //   count2 -=1;
  //   $('.number2').replaceWith('<div class="number2">'+ count2 +'</div>');
  // });

    // increase.click(function(){
    //   increase.css({
    //     animation:function(){
    //       if('background-color'==='red'){
    //         count +=1
    //       }

    //     }
    //   })
    // })




  // $('.btn-add').on('click', function(e){
  //   console.log(e);
  //   var keyData = $('.input-key').val();
  //   var valueData = $('.input-value').val();
  //   // write to db
  //   localStorage.setItem(keyData, JSON.stringify({bestTeam: "Warriors"}));
  //   console.log(typeof JSON.parse(localStorage.getItem(keyData)));
  //   // read from db
  //   var displayText = keyData + ' | ' + localStorage.getItem(keyData);
  //   // this only displays the last one? might want to switch to html
  //   // and append a div
  //   // <div class="display-data-item" data-keyValue="keyData">valueData</div>
  //   // if you use backticks ` you can use ${templateLiterals}
  //   // TODO make this vars make sense across the app
  //   $('.container-data').html('<div class="display-data-item" data-keyValue="'+ keyData +'">'+valueData+'</div>');
  //   $('.input-key').val('');
  //   $('.input-value').val('');
  // });


  // // update db
  //   // need to expand when  more than 1 item is added

  // // delete item
  // $('.container-data').on('click', '.display-data-item', function(e){
  //   console.log(e.currentTarget.dataset.keyvalue);
  //   var keyData = e.currentTarget.dataset.keyvalue;
  //   localStorage.removeItem(keyData);
  //   $('.container-data').text('');
  // });
  // // delete all?
  // $('.btn-clear').click(function(){
  //   localStorage.clear();
  //   $('.container-data').text('');
  // });

});