(function(){
  "use strict";

  var Kell = function(){
    // SINGELTON PATTERN

    if(Kell.instance){
      return Kell.instance;
    }
    Kell.instance = this; //this viitab moosipurgile

    this.Kell = document.getElementById("Kell");

    //panen rakenduse tööle
    this.init();
  };

  // kõik moosipurgi funktsioonid tulevad siia sisse
  Kell.prototype = {
    init: function(){
      console.log('rakendus käivitus');

      // selleks, et ei oleks näha 0:0:0-i
      this.writeDate();
      // käivitan intervalli / 500ms = 0.5s
      window.setInterval(this.writeDate.bind(this), 500);
      this.bindMouseEvents();
    },
    // võtab aja ja kirjutab #clock elemendi sisse
    writeDate: function (){
      var today = new Date();
      var year = today.getFullYear();
      var month = today.getMonth() + 1;
      var day = today.getDate();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
      clock.innerHTML = this.addZeroBefore(hours) + ':' + this.addZeroBefore(minutes) + ':' + this.addZeroBefore(seconds);
      date.innerHTML = this.addZeroBefore(day) + '/' + this.addZeroBefore(month) + '/' + this.addZeroBefore(year);
    },
    addZeroBefore: function(number){
      if (number < 10){
        number = '0' + number;
      }
      return number;
    },

    bindMouseEvents: function(){
      button1.addEventListener('click', function(){
        var ear_1 = document.getElementById('ear_1');
        ear_1.style.background = "grey";
        var ear_2 = document.getElementById('ear_2');
        ear_2.style.background = "grey";
        var leg_1 = document.getElementById('leg_1');
        leg_1.style.background = "grey";
        var leg_2 = document.getElementById('leg_2');
        leg_2.style.background = "grey";
        var circle_1 = document.getElementById('circle_1');
        circle_1.style.background = "grey";
        var circle_2 = document.getElementById('circle_2');
        circle_2.style.background = "black";
        var clock = document.getElementById('clock');
        clock.style.color = "white";
        var date = document.getElementById('date');
        date.style.color = "white";
      });
      button2.addEventListener('click', function(){
        var music = new Audio('alarm.mp3');
        music.play();
      });
    }

  };

  window.onload = function(){
    var app = new Kell();


  };

})();
