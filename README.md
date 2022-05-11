# Cryptocurrency Budget Tool

## Installation

Run `npm install`.

## Running the App

Run `npm start`

Open the `public/index.html`

## About

I designed this website because I wanted a tool that would help me from save money when buying crypto each month. My excitement toward everything blockchain often leads to me investing too much each month. In partial completion of the Code Louisville Web Development 2 class, I have worked on this budget tool to save me from myself (and possibly help some friends).

## Feature List:

1. Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app

Location: ` public/assets/js/main.js `

2. Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX)

Location: ` public/assets/js/calculate.js `

3. Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application

Location: ` public/assets/js/calculate.js `

4. Create a form and save the values (on click of Submit button) to an external file 
You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted

Location: ` public/assets/js/main.js ` & ` public/tool.html ` , ` data/app.json `

DEV API Location: `public/assets/js/api.js` , `server/index.js`

5. Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format

Location: ` public/assets/js/emailvalidate.js ` , `public/tool.html `

6. Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)

Location: ` public/assets/js/main.js `


## Additional Features:

- Bootstrap 5 Responsive Layout

## Suggestions / Feedback

As a programming student, I'm looking for suggestions on how to go about refactoring my code and/or advice about how to continue improvement with JavaScript. If you check out this project and have some advice, please don't hesistate to shoot me an e-mail at ` nicholas.weiner@icloud.com ` to help me improve!


## Credit
- Form made with server-side help from Justin Prince's Dev API (https://github.com/justinkprince/dev-api).
- Adapted form and expanded functionality from 1st Code Louisville JavaScript Project (https://github.com/signalaero/javascript-fantasy-tools)
- Code Louisville Mentors for weekly help, advice, and tips!


### Special Note

4/1/22: Currently experiencing issue with trying to call ` calculate.getCoins() ` in main.js so that I can get an array of values from ` calculate.js ` and use it in ` main.js `
5/10/22: Addressing issue with ` calculate.js ` using async/await. Expect update soon.