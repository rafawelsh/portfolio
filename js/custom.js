$(function() {
  $(".container").typed({


  strings: ["Full Stack Developer", "Degree in Marketing", "Bilingual in Spanish", "Enjoys a good challenge"],
  stringsElement: null,

  // typing speed
  typeSpeed: 20,

  // time before typing starts
  startDelay: 100,

  // backspacing speed
  backSpeed: 50,

  // shuffle the strings
  shuffle: false,

  // time before backspacing
  backDelay: 500,

  // Fade out instead of backspace
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500, // milliseconds

  // loop
  loop: true,

  // false = infinite
  loopCount: false,

  // show cursor
  showCursor: true,

  // character for cursor
  cursorChar: "|",

  // attribute to type (null == text)
  attr: null,

  // either html or text
  contentType: 'html'
 });
});
