var library = [
 { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];

function isRead(){
  for(let a of library)
    (a.readingStatus == true) ? document.getElementById("read").innerHTML += "You have read " + a.title + " by " + a.author + "<br>" : document.getElementById("nRead").innerHTML = "You still need to read " + a.title + " by " + a.author + "<br>"
 
}
isRead();