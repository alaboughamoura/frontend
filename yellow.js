// alert function
setTimeout(function(){alert("the ninja has won")},13000);

// removing function after clicking at subscribe
function hide(accept){ 
    accept.remove(); }
     


var nums = [319, 164];
var spans = [
  document.querySelector("#score-11"),
  document.querySelector("#score-12"),
];
// increasing fuction 

function add(id) {
  nums[id]++;
  spans[id].innerHTML = nums[id];
} 

   