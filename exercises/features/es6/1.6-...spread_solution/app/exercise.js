'use strict';

const element = document.getElementById('example');
const aToJ = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const kToR = ['k', 'l', 'm', 'n', 'o', 'p', 'q', 'r'];
const sToZ = ['s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const allLetters = [...aToJ, ...kToR, ...sToZ];


element.innerHTML = allLetters.join(', ');
