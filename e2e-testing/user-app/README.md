# MJV

MJV is a JavaScript application web with ReactJs for do an Authentication and also view search products random.

## Installation

Get the code you can clone the project with

```bash
git clone https://github.com/carosalazar28/MJV-client.git
```

## Usage

First, you need to install the dependencies

```bash
yarn install
```

then you can run the project on your local server

```bash
yarn start
```

## Features developed

### User Registration
- Form with secure validation of the password in the front end.

### Login
- Form with Axios petition and verificated the user

### User Page
- Form with new inputs for updated the user model and also can delete the account

### List of Products
- Axios petition to jsonplaceholder for render random data like a products data

### Product Search
- Search input by product title

### Linter to normalize the project with esLint, Prettier, and EditorConfig
- Files with config

## Environmental Variables

The project has one environmental variable for connect with the server and do the CRUD for the User.

```
REACT_APP_SERVER_URL=https://mjv-db.herokuapp.com
```
## Build with 🛠️
The tools for developing the project was

ReactJs - More common library for JavaScript
Styled-Components - Library for put styles with JS
Axios - Library to manage asynchronous programming with promises


## Author ✒️
Carolina Salazar - FrontEnd Developer - [carosalazar28](https://github.com/carosalazar28)

## License
[MIT](https://choosealicense.com/licenses/mit/)
