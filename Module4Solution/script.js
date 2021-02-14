(function (window) {
  var names = ["John", "Jarry", "Jack", "Anna", "Barney", "Dennis", "Ed", "Mark", "Bob", "Paula", "Zack"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})(window);

