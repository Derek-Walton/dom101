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

function replaceText(elem, str){
    elem.textContent = str;
}

function addTextTo(elem, str){
    elem.textContent += str;
}

function moreBears(){
    const img = document.querySelector("#animals");
    img.src = "http://placebear.com/400/200";
    img.alt = "A bear.";
    img.title = "A BEAR!";
}

function setId(elem, str){
    elem.id = str;
    return elem;
}

function setClass(elem, str){
    elem.classList = str;
    return elem;
}

function addAClass(elem, str){
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str){
    elem.classList.remove(str);
    return elem;
}

function newElement(name){
    return document.createElement(name); 
}

function findElementById(id){
    return document.getElementById(id);
}

function findElementsByQuery(query){
    return document.querySelectorAll(query);
}

function reverseList(query){
    const myList = document.querySelector(query);
    
    for (let i = myList.children.length; i >= 0; i--){
        myList.append(myList.children[i]);
    }
    
    return myList;
}

function mover(moveThis, appendToThis){
    const moveMe = document.querySelector(moveThis);
    const list = document.querySelector(appendToThis);

    list.append(moveMe);
}

function filler(list, candidates){
    candidates.forEach(candidate => {
        const newElement = document.createElement("li");
        newElement.textContent = candidate;
        list.appendChild(newElement);
    });
}

function dupe(selector){
    const element = document.querySelector(selector);
    element.parentElement.append(element.cloneNode(true));
}

function removeAll(selector){
    const allElements = document.querySelectorAll(selector);
    allElements.forEach(element => {
        element.remove();
    });
}

function getUserData(){
    const name = document.querySelector("#username");
    const speed = document.querySelector("#speed");
    const student = document.querySelector("#student");

    // console.log(name.attributes);

    const myObject = {
        "name": name.value,
        "speed": parseInt(speed.value),
        "student": student.checked,
    }
    return myObject;
}