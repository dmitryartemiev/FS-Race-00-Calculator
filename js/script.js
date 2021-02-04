"use strict";

let $resultLane = document.getElementsByClassName("result_lane")[0];
let $inputLane = document.getElementsByClassName("input_lane")[0];

function insert(num) {
  $resultLane.value += num;
}

function operation(value) {
  $inputLane.textContent += $resultLane.value;
  $inputLane.textContent += value;
  $resultLane.value = "";
}

function clean() {
  $inputLane.textContent = "";
  $resultLane.value = "";
}

function equal() {
  $inputLane.textContent += $resultLane.value;
  $resultLane.value = eval($inputLane.textContent);
  $resultLane.value = Number($resultLane.value);
  console.log(Number.isInteger($resultLane.value));
  $inputLane.textContent = "";
}
