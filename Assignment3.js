

var library = [
{
author: 'Bill Gates',
title: 'The Road Ahead',
readingStatus: true
},
{
author: 'Steve Jobs',
title: 'Walter Isaacson',
readingStatus: true
},
{
author: 'Suzanne Collins',
title: 'Mockingjay: The Final Book of The Hunger Games',
readingStatus: false
}];

/*Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne
Collins.*/

var i=0;
for(i; i< library.length ; i++){
    if(library[i]['readingStatus'] == true){
        console.log("Already read \'" +library[i]['author']+ "\' by "+library[i]['title']);}
    else{
        console.log("You still need to read \'" +library[i]['title']+ "\' by " +library[i]['author'] +"Book");}
}


var age;
age = window.prompt("Enter your age(integer): ");
if (age <18){
    alert("Not legal age to drive");
} else {
    alert("Drive safely you are allowed to drive");
}
