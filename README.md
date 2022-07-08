# Trivia-App

Trivia-App is a minimalist trivia application that offers two different trivia style games. One is a multiple choice multiplayer game and the other is a rapid fire true or false game.

---

## Table of Contents

1. Introduction
2. Contributor
3. Technologies
4. Usage
5. General Information

---

## Introduction

Trivia-App was created as a solo project for the React module of April 2022 DigitalCrafts Full Time Web Development Course. The project was meant as an exercise for free practice and learning of React. It also builds on the foundation of working with an API and JSON data.

---

## Contributor

This project was created and coded by

- Ryan McMillan <https://github.com/rlmcmillan12>

---

## Technologies

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- React
- React-router
- Redux
- thunk
- JavaScript
- Styled-Components
- html-entities

---

## Usage

To run the app start by cloning the repository locally

```
https://github.com/rlmcmillan12/trivia-app
```

Enter: `npm start` into the terminal

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## General Information

This project is a minimalist trivia application. Once the application is opened it will take you to the home page. It gives a short basic introduction of the app. At the top of the screen is the navigation bar. By clicking multiple choice or true or false it will take you to wither game.

Click on multiple choice link will route to the multiple choice page.
It gives you a description and two selects. To start a game you must pick the number of players (1-4) and number of rounds (5-20). Click the start button and you will be prompted to enter a name for the amount of players you selected. The game will advance once all the players have been entered. Each round starts with a card showing the round number. Once you click to start the round it will show a card for the player up at the beginning of each players turn. The player will be prompted to pick a category and difficulty. The default setting is any category and easy difficulty. The player is returned a question with four answers. The player chooses one and is taken to a correct screen or a wrong screen with the correct answer. After all the players have gone at the end of all of the rounds a winner screen appears. The screen will show the winner or winners if there is a tie for first.

Clicking the true of false link will take you yo a game if rapid fire true or false that is always in motion. It give you a question and ten seconds to answer. If correct within the time limit it starts a counter for how many correct you have in a row. If you make the wrong choice or run out of time the counter goes back to zero and you start over.
