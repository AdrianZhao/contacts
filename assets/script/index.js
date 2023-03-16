'use strict';
/*
  OOP JavaScript
  Yuhan Zhao
*/

class Person {
  #name;
  #city;
  #email;
  constructor(name, city, email) {
    this.#name = name;
    this.#city = city;
    this.#email = email;
  }
  set name(name) { this.#name = name; }
  set city(city) { this.#city = city; }
  set email(email) { this.#email = email; }
  get name() { return this.#name; } 
  get city() { return this.#city; }
  get email() { return this.#email; }
}