# _Open Weather API_

#### By: _**Katie Pundt, Jeff Terrell, and Kate Kiatsiri**_

#### _An application to display information about the weather for a specific location._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _npm_
* _webpack_
* _eslint_
* _popperjs/core_
* _APIs_
* _git_
* _GitHub_

## Description
_The application will allow users to input a zip code or city/state combination to receive information about the weather for that area._

## Setup/Installation Requirements

* Navigate to https://github.com/kpundt93/open-weather-api
* Click on the green "Code" button and copy the repository URL or click on the copy button
* Open the terminal on your desktop
* Once in the terminal, use it to navigate to your desktop folder
* Once inside your desktop folder, use the command `git clone https://github.com/kpundt93/open-weather-api.git`
* After cloning the project, navigate into it using the command `cd open-weather-api`
* Use the command `git remote` to confirm the creation of the new local repository
* Open the project in your preferred text editor
* Create a new file in the root of the project directory called `.env`
* Open your web browser and follow this link: https://home.openweathermap.org/users/sign_up
* Sign up for your free account and then wait for an activation email
* After verifying your email, return to https://openweathermap.org/
* Sign in to your account
* From the account area of the site, click on the "API keys" tab
* Copy your API key and return to the empty `.env` file that you created
* In the `.env` file type the following `API_KEY=[YOUR_API_KEY_HERE]` and paste your API key in place of `[YOUR_API_KEY_HERE]` (be sure to remove the square brackets)
* Save the project
* Navigate back to your terminal
* Install project dependencies by running the command `npm install`
* If you receive errors in the terminal, try running `npm install` again, sometimes npm can be finicky
* Then run the command `npm run start` to start the project server and view the application (use ctrl + c to exit the server in the terminal)

## Troubleshooting

* If you are receiving errors regrading webpack, try running the command `npm install webpack@4.39.3 --save-dev --save-exact`, then run `npm run build` again
* If you continue to have issues setting up the environment, try deleting the package-lock.json file and the node_modules folder from the project. Then rebuild the environment by running `npm install` again.

## Known Bugs

* _No known bugs_

## License
_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt, Jeff Terrell, and Kate Kiatsiri_