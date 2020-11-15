# Eat-A-Burger

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Eat-A-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat, store these, and then "eat" them.

In this project I've created a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. It follows the MVC design pattern, using Node and MySQL to query and route data to the app, and Handlebars to generate the HTML.

## Table of Contents

- [User Story](#userStory)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Screenshots](#screenshots)
- [Questions](#questions)

## User Story

AS A burger enthusiast
I WANT to be able to keep records of saved and eaten burgers
SO THAT I can keep track of my gluttony

## Installation

1. Clone this GitHub repository

   ```
   git clone git@github.com:Epanastatis2020/Eat-A-Burger.git
   ```

2. Install all dependent npm packages

   ```
   npm i
   ```

3. Update the config/connection.js file with updated MySQL connection parameters.

4. Create the **burgers_db** databse and the **burgers** table by running the script `db/schema.sql` in MySQL

5. Seed mock data running the script `db/seeds.sql` in MySQL

## Usage

Run `npm start` and using your web browser to access http://localhost:3306.

A demo of the application is available at: https://eat-a-burger-ca.herokuapp.com/

## License

This project uses the MIT license

## Contributing

Pull requests are welcome

## Screenshots

![image](https://user-images.githubusercontent.com/65388616/99161955-0207de80-274c-11eb-96a2-6b51495284d8.png)

## Contact

Github: [Epanastatis2020](https://github.com/Epanastatis2020)  
Email: <nothanks@email.com.au>
