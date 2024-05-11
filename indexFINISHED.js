/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

"use strict";

// add your functions here

/*
function replaceText(elem, str) {
  elem.innerText = str;
}

function addTextTo(elem, str) {
  elem.innerText += str;
}

function moreBears() {
  let bear = document.querySelector("#animals");

  bear.setAttribute("src", "http://placebear.com/400/200");
  bear.setAttribute("alt", "A bear.");
  bear.setAttribute("title", "A BEAR!");
}

function setId(elem, str) {
  elem.setAttribute("id", str);
  return elem;
}

function setClass(elem, str) {
  elem.className = str;
  return elem;
}

function addAClass(elem, str) {
  elem.classList.add(str);
  return elem;
}

function removeAClass(elem, str) {
  elem.classList.remove(str);
  return elem;
}

function newElement(name) {
  return document.createElement(name);
}

function findElementById(id) {
  return document.querySelector("#" + id);
}

function findElementsByQuery(query) {
  return document.querySelectorAll(query);
}

function reverseList(query) {
  const list = document.querySelector(query);

  const items = list.children;

//   console.log(list);

  for (let i = items.length - 1; i >= 0; i--) {
    // console.log(items[i]);
    list.append(items[i]);
  }

//   console.log(list);

  return list;
}

function mover(moveThis, appendToThis) {
  const element = document.querySelector(moveThis);
  const appendTo = document.querySelector(appendToThis);
  appendTo.append(element);
}

function filler(list, candidates){
    // const myList = document.querySelector(list);
    // console.log(candidates);
    candidates.forEach(candidate => {
        const listItem = document.createElement("li");
        listItem.textContent = candidate;
        list.append(listItem);
    });
}

function dupe(selector){
    const element = document.querySelector(selector);

    const newElement = document.createElement(element.nodeName);
    newElement.textContent = element.textContent;
    element.parentElement.appendChild(newElement);
}

function removeAll(selector){
    const element = document.querySelectorAll(selector);
    element.forEach(indididualElement => {
      indididualElement.remove()
    });
}

function getUserData(){
  const name = document.querySelector("#username");
  const speed = document.querySelector("#speed");
  const student = document.querySelector("#student");

  const myObject = {
    "name": name.value,
    "speed": parseInt(speed.value),
    "student": student.checked,
  };

  return myObject;
}
*/