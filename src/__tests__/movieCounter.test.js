/**
 * @jest-environment jsdom
 */

import movieCounter from '../modules/likes/movieCounter.js';

describe('the number of movies', () => {
  test('should be equal to 0', () => {
    document.body.innerHTML = `<header><ul class="navigation"><li class="active"><a href="#">Home (<span id="totalMovies"></span>)</a></li></ul></header>
      <section id="section"></section>
      `;
    const response = [];
    const section = document.querySelector('#section');
    response.forEach((movie) => {
      section.innerHTML += `<section id=${movie.id} class="tv-section"></section>`;
    });
    expect(movieCounter() - 1).toBe(0);
  });

  test('should be equal to 1', () => {
    document.body.innerHTML = `<header><ul class="navigation"><li class="active"><a href="#">Home (<span id="totalMovies"></span>)</a></li></ul></header>
      <section id="section"></section>
      `;
    const response = [{ id: 1, name: 'Alcatraz' }];
    const section = document.querySelector('#section');
    response.forEach((movie) => {
      section.innerHTML += `<section id=${movie.id} class="tv-section"></section>`;
    });
    expect(movieCounter() - 1).toBe(1);
  });

  test('should be equal to 5', () => {
    document.body.innerHTML = `<header><ul class="navigation"><li class="active"><a href="#">Home (<span id="totalMovies"></span>)</a></li></ul></header>
      <section id="section"></section>
      `;
    const response = [
      { id: 1, name: 'Alcatraz' },
      { id: 2, name: 'Honor' },
      { id: 3, name: 'Revenge' },
      { id: 4, name: 'Continuum' },
      { id: 5, name: 'Castle' },
    ];
    const section = document.querySelector('#section');
    response.forEach((movie) => {
      section.innerHTML += `<section id=${movie.id} class="tv-section"></section>`;
    });
    expect(movieCounter() - 1).toBe(5);
  });
});
