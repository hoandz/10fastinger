var countDownDuration = 6;

$(document).ready(function(){
  var str = ['ghê','lorem','ipsum','is','lắm','dummy',
  'text','of','the','toàn','and','lái','thsettinge','the','industry','viết'];

  for(var i = 0; i < str.length; i++){
    $("#wrap").append(`<span id="elm`+i+`" class="sdf">`+ str[i] +`</span>`);
  }
  $("#elm"+0).addClass("mauxam");
  var number = 0;
  var timer = $("#timer");
  var count = countDownDuration;
  timer.html(count);
  var timerId = 0;
  var typeRight = 0;
  var misTyped = 0;
  function countDown(){
    timerId = setInterval(function(){ 
      count--;
      timer.html(count);
      if(count == 0){
        clearInterval(timerId);
        $("#input-text").prop('disabled', true);
        console.log("Da het thoi gian nhe");
        // tinh ty le phan tram
        var accuracyP = typeRight/(typeRight+misTyped)*100;
        // end tinh ty le phan tram
        $("#wpm").html(misTyped + typeRight);
        $("#accuracy").html(accuracyP.toFixed(2));
        $("#correctWords").html(typeRight);
        $("#wrongWords").html(misTyped);
        $(".thongke").addClass("active");
      }
    }, 1000);
  }

  var isCountDown = false;
  $("#input-text").keypress(function(){
    if(isCountDown == false){
      countDown();
      isCountDown = true;
    }
  });

  $("#reset-btn").click(function(){
    clearInterval(timerId);
    count = countDownDuration;
    timer.html(count);
    isCountDown = false;
    $("#input-text").val("");
    number = 0;
    $(".sdf").removeClass("maudo");
    $(".sdf").removeClass("mauxam");
    $("#elm"+number).addClass("mauxam");
    typeRight = 0;
    misTyped = 0;
    $("#input-text").prop('disabled', false);
  });

  // xử lý so sánh text
  //get value input
   $('#input-text').bind('keypress', function(e) {
    //space bar 
    if(e.which == 32){
      $(".sdf").removeClass("mauxam");
      var number2 = number + 1;
      $("#elm"+number2).addClass("mauxam");
      var newText = $("#input-text").val();
      console.log(str[number]);
      $("#input-text").val("");
      var newArray = newText.trim();
      console.log(newArray);
      if(newArray === str[number]){
        console.log("dung roi");
        number ++;
        typeRight ++;
      }else{
        console.log("sai roi");
        $("#elm"+number).addClass("maudo");
        number ++;
        misTyped ++;
      }
      //so sanh text
      //end so sanh text
    }
  });

  //end get value input
});


















