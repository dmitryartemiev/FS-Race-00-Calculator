"use strict";

let $resultLane = document.getElementsByClassName("result_lane")[0];
let $inputLane = document.getElementsByClassName("input_lane")[0];

function insert(num) {
  if ($resultLane.value == 0) {
    $resultLane.value = "";
  }

    $resultLane = document.getElementsByClassName("result_lane")[0];
    $resultLane.value += num;

}

function operation(value) {
  let x = !$inputLane.textContent.slice(-1);
  if ($resultLane.value == 0) {
    $resultLane.value = "";
  } else if (x !== "+" && x !== "-" && x !== "/" && x !== "*" && x !== "%") {
    $inputLane.textContent += $resultLane.value;
    $inputLane.textContent += value;
    $resultLane.value = "";
  }
}

function clean() {
  $inputLane.textContent = "";
  $resultLane.value = "0";
}

function equal() {
  $inputLane.textContent += $resultLane.value;
  $resultLane.value = eval($inputLane.textContent);
  $resultLane.value = Number($resultLane.value);
  console.log(Number.isInteger($resultLane.value));

  if (Number.isInteger($resultLane.value)) {
    $resultLane.value = Number($resultLane.value).toFixed(2);
  }

  $inputLane.textContent = "";
}

function percent() {
  $resultLane.value = Number($resultLane.value) / 100;
}

function toggle() {
  $resultLane.value = Number($resultLane.value) * -1;
}
