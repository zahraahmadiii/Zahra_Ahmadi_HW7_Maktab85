
// map.keys() returns an iterable, but we need an array.so we should convert it into an array with Array.from


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 