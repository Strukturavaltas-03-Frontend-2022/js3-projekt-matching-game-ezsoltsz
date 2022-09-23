'use strict'

const card = document.getElementsByClassName(".card")
const gamebox = document.querySelector(".game__container");
const timer = document.querySelector(".WhatsTime");

card.forEach((element) => {
    element.addEventListener("click", clickCard);
  });
  