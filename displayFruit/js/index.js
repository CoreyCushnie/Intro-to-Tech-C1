var myArray = [];
function fruits(){
  var a = prompt("Enter a new fruit!");
  a = a[0].toUpperCase() + a.substr(1).toLowerCase();
  myArray.push(a);
  myArray.sort();
  document.getElementById("display").innerHTML = myArray.join(" with ");
        }