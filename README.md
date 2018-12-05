# EATME
## A restaurant app that lets users input the names of burgers they'd like to eat.
## [Deployed on Heroku](https://git.heroku.com/fast-headland-11738.git)

### Overview

* A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. 
* Following the MVC design pattern; 
* Node and MySQL queries and route data
* Handlebars to generate your HTML.

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

* [Check out this video of the app for a run-through of how it works](https://youtu.be/msvdn95x9OM).

### Minimum Requirements
Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

### Before You Begin
Sudo Code hamburger.

We have a single html page. On load it runs a get to our api that supplies all items in our list. For each item in the list make and append a card.

Every time we hit add item at the button we take that data in the text field and append it to the table and reload the page.

Very time we hit the complete button next to an item we remove it from the table and then add it to the other table of completed items.






* Eat-Da-Burger!

* Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
// click to change class, reload page.

* Your app will store every burger in a database, whether devoured or not.


### Submission on BCS

* **This assignment must be deployed.** * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

#### DB Setup


5. Now you're going to run these SQL files.

   * Make sure you're in the `db` folder of your app.

   * Start MySQL command line tool and login: `mysql -u root -p`.

   * With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   * Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   * Close out of the MySQL command line tool: `exit`.