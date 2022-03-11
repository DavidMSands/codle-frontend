# CODLE - the word guessing game for coders 

[![Contributors](https://img.shields.io/badge/contributors-3-brightgreen)](https://github.com/DavidMSands/codle-frontend/graphs/contributors)


Codle is a web based game built in Javascript React with a Ruby Sinatra SQLite3 database backend. 

This port of the word game was created as a **Phase 4 Project** for the Flatiron School Software Engineering intensive program, Q1 2022.

## Gameplay
---

Gameplay is just like other Word (Wordle) type games.  Guess the letters, get hints from the colors, guess in 6 tries and share your results.

### Color Indicators
If you're new to Codle, the game uses three colors to indicate what's going on:
- 🟩 Green means the letter is in the word, and in the correct position.
- 🟨 Yellow means that the letter is in the word, but in the wrong position.
- ⬛ Dark Grey means that the letter is not in the word

### New Words
Return each day for a new Codle word of the day! Our game currently resets the Word of the Day each 24 hour earth rorational cycle. 

## Technology

---

### Javascript React Front End
Game front end was built in Javascript React for user interactivity and dynamic styling of components. Specific React components utilized in the front end build include: [React Router Dom](https://github.com/remix-run/react-router).

### Ruby with Sinatra and SQLite database
Game backend is driven Ruby with Sinatra and served from an SQLite database.  Active Record makes the datamanagement simple.  Specific technologies used in the backend build include: [Sinatra](https://github.com/sinatra/sinatra), [Thin](https://github.com/macournoyer/thin), [ActiveRecord](https://github.com/rails/rails), [SQLite3](https://github.com/sparklemotion/sqlite3-ruby/).

## How to install
---
Go grab the [back-end too](https://github.com/adelinealmanzar/phase-3-sinatra-react-project)!  Read install instructions there as well.

- Simply fork and clone this repo down to your local machine.
- Run `npm install` from terminal in the app directory to install dependences
- Finally `npm run` from terminal in app directory to start up the app server at `localhost:3000`. 
 - N.B. backend connections are set to `loalhost:9292`.


## Challenges faced
---

Don't let the simple interface fool you, there is plenty going on under the hood. 

One of the major challenges we faced was the logic of changing the tile colors - as well as the keyboard colors.  

Another challange was establishishing a simple login that would allow for gameplay without a full authentication suite, while holding the user in state during play.

