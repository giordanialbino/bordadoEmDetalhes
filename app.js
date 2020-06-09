'use strict'

let today = new Date();
let formDate = today.toDateString();
let selectElement = document.getElementById('date');
selectElement.innerHTML = formDate;