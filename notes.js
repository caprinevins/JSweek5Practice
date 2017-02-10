for...in loops

Iterates a specified variable over all the
properties of an object.

var obj = { “a” : “aaa”, “b” : “bbb” }

for(var key in obj) { }

example:

var obj = { “a” : “aaa”, “b” : “bbb” }
for(var key in obj) {
console.log( obj[key] );
}
=> aaa
=> bbb

PRACTICE

var album = {
  "title": "Purple Rain",
  "artist": "Prince",
  "songs": "10"
}

for(var key in album){
  console.log(key);
    console.log(album[key]);
}