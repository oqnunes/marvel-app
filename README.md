# Marvel App - ReactJS and TypeScript

The initial purpose of the application is to consume the [Marvel API](https://developer.marvel.com/) through requests made with [Axios](https://github.com/axios/axios).

### Objective 1
List all Comics sorted from newest to oldest.
### Objective 2
Give the option to search by character, and return the comics respectively.

<br />

## What was Done

 - Listing 100 comics per page, each page is a new request.
 - By clicking on "Previous" or "Next" Page, [useRef](https://reactjs.org/docs/refs-and-the-dom.html) Hook was used to scroll to the top of the page.
 - All pagination was done using [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) Hook, to facilitate information sharing between components.
 - The entire styling of the application was through styled-components.

<br /> 

## What's to come:
 - [ ] Pagination with [react-router-dom](https://reactrouter.com/web/guides/quick-start).
 - [ ] Return the Comic Pictures, instead of just the list with the names.
 - [ ] Mobile Responsive.
 - [ ] Handle error with try/catch on axios requests.

<br />

# How try it

## 1. You can Visit the Demo

[**Visit Demo**](oqnunes-marvel-app.netlify.app)

## 2. You can clone to learn.

Make sure the folder of your terminal and:

    git clone https://github.com/oqnunes/marvel-app.git

Then:

    cd marvel-app

And now make sure you are using Node and Yarn, and run to install all used modules:

    yarn

Finally you can start the project with:

    yarn dev

Open [http://localhost:3000](http://localhost:3000/) to view it in the browser and enjoy it!