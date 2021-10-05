
function show() {
  setTimeout(
    function () {
      document.getElementById('discord-shoutout').classList.add('online');
    },
    200
  );
}

function reset() {
  hide();
  setTimeout(show, 1500);
}

function hide() {
  document.getElementById('discord-shoutout').classList.remove('online');
}

show();