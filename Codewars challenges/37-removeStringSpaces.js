// Codewars - Coding Challenge 37

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

let noSpace = (x) => x.split(' ').join('');

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')); // '8j8mBliB8gimjB8B8jlB'
console.log(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')); // '88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace('8aaaaa dddd r     ')); // '8aaaaaddddr'