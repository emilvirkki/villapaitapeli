window.onload = function() {
  var sounds = {
    'villapaitapeli': document.getElementById('villapaitapeli'),
    'pue': document.getElementById('pue'),
    'hihi': document.getElementById('hihi'),
    'voitit': document.getElementById('voitit'),
    'havisit': document.getElementById('havisit'),
  };

  var screens = {
    'run': run,
    'intro': intro,
    'choice': choice,
    'yes': yes,
    'done': done,
    'win': win,
    'no': no,
  }

  function play(soundName) {
    Object.values(sounds).forEach(function(sound) {
      sound.pause();
      sound.currentTime = 0;
    });
    if (soundName) {
      sounds[soundName].play();  
    }
  }

  function show(screen) {
    document.querySelectorAll('.screen').forEach(function(elem) {
      elem.classList.add('hidden');
    });
    document.getElementById(screen).classList.remove('hidden');
    screens[screen]();
  }

  function run() {
    // no-op
  }

  function intro() {
    play('villapaitapeli');
  }

  function choice() {
    play('pue');
  }

  function yes() {
    play(null);
    setTimeout(function() { show('done') }, 1700);
  }

  function done() {
    play('hihi');
    setTimeout(function() { show('win') }, 1700);
  }

  function win() {
    console.log('voitit')
    play('voitit');
  }

  function no() {
    play('havisit');
  }

  document.getElementById('loader').classList.add('hidden');
  document.getElementById('main').classList.remove('hidden');

  document.querySelectorAll('a[data-goto]').forEach(function(link) {
    var target = link.getAttribute('data-goto');
    link.onclick = function(e) {
      show(target);
      return false;
    }
  });

  show('run');
}