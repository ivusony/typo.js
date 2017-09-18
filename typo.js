// The MIT License (MIT)

// Copyright (c) 2017 Ivan Radulov
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.





(function($){
  $.fn.typo = function(txt_to_be_typed, size, color) {
    if(txt_to_be_typed==="" || txt_to_be_typed===undefined){
      txt_to_be_typed = "Type whatever you want"
    }
    if(size===undefined){
      size = 100;
    }
    if(color===undefined){
      color = "white";
    }
    var h1 = $(this);
    var span = $("<span>|</span>").insertAfter(h1);
    var str = txt_to_be_typed;
    var str_len = str.length;
    var counter = 0;
    h1.css({
      'display' : 'inline',
      'font-size' : size+'px',
      'color': color
    });
    span.css({
      'font-size' : size+'px',
      'color': color
    });
    var typeInterval = setInterval(type,100);
    var blinkInterval = setInterval(cursorBlinker, 600);
    //typing
    function type(){
      if(counter>str_len){
        setTimeout(function(){
          var del = setInterval(function() {
            h1.text((str.substring(0,[counter])));
            counter--;
            if(counter<0){
              clearInterval(del);
            }
          },100);
        },2000)
      }else {
        h1.text((str.substring(0,[counter])));
        counter++
      }
    }
    //cursor
    function cursorBlinker() {
        span.animate({
            opacity: 0
        }, 300).animate({
            opacity: 1
        }, 300);
    }
  }
})(jQuery)
