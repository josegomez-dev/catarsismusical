// function that will clone the audio node, and play it
function cloneAndPlay(audioNode) {
  // the true parameter will tell the function to make a deep clone (cloning attributes as well)
  var clone = audioNode.cloneNode(true);
  clone.play();
}
$('#string-E1').mousedown(function () {
  cloneAndPlay(E1);
});
$('#string-B2').mousedown(function () {
  cloneAndPlay(B2);
});
$('#string-G3').mousedown(function () {
  cloneAndPlay(G3);
});
$('#string-D4').mousedown(function () {
  cloneAndPlay(D4);
});
$('#string-A5').mousedown(function () {
  cloneAndPlay(A5);
});
$('#string-E6').mousedown(function () {
  cloneAndPlay(E6);
});
