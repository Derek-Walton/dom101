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

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str){
    elem.textContent += str;
}

function moreBears() {
    const bear = document.querySelector('#animals');
    bear.src = 'http://placebear.com/400/200';
    bear.alt = 'A bear.';
    bear.title = 'A BEAR!';
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.classList = str;
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

function newElement(name){
    const newElem = document.createElement(name);
    return newElem;
}

function findElementById(id) {
    return document.querySelector('#' + id);
}

function findElementsByQuery(query) {
    return document.querySelectorAll(query);
}

function reverseList(query){
    const listElem = document.querySelector(query);
    
    const list = listElem.children;
    
    for (let index = list.length; index >= 0; index--) {
        listElem.append(list[index]);
    }
    return listElem;
}

function mover(moveThis, appendToThis) {
    const movingItem = document.querySelector(moveThis);
    const appendingThis = document.querySelector(appendToThis);

    appendingThis.append(movingItem);
}

function filler(list, candidates) {
    candidates.forEach(listStr => {
        const newElement = document.createElement('li');
        newElement.textContent = listStr;
        list.append(newElement);
    });
}

function dupe(selector) {
    const element = document.querySelector(selector);

    const newElement = document.createElement(element.nodeName);
    newElement.textContent = element.textContent;
    element.parentElement.append(newElement);
}

function removeAll(selector){
    const elementsToRemove = findElementsByQuery(selector);
    elementsToRemove.forEach(element => {
        element.parentElement.removeChild(element);
    });
}

function getUserData(){
    const name = document.querySelector('#username');
    const speed = document.querySelector('#speed');
    const student = document.querySelector('#student');

    return {
        name: name.value,
        speed: parseInt(speed.value),
        student: student.checked
    }
}