/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str){
    elem.innerText = str;
}

function addTextTo(elem, str){
    elem.innerText += str;
}

function moreBears(){
    let bear = document.querySelector('#animals');

    bear.setAttribute('src', 'http://placebear.com/400/200');
    bear.setAttribute('alt', 'A bear.');
    bear.setAttribute('title', 'A BEAR!');
}

function setId(elem, str){
    elem.setAttribute('id', str);
    return elem;
}

function setClass(elem, str){
    elem.className = str;
    return elem
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
    return document.querySelector('#' + id);
}

function findElementsByQuery(query){
    return document.querySelectorAll(query);
}

function reverseList(query){
    let list = document.querySelector(query);
    let listItem = Array.from(list.children);

    
}