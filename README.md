# Instaspam

## Introduction
Welcome to Instaspam, a clone of the popular [Instagram](https://www.instagram.com/) website. With Instaspam, you can post pictures on whatever you like and other users can comment on those posts! Instaspam takes this idea and adds the subtlety of in-your-face advertisements, "spamming" the user with constant information. Instaspam is THE website for people and friends to come and display their lives in their photos and posts, as well as comment on what friends are up to.

## Technologies Used
- Languages: Javascript, HTML, CSS
- Front-End: React-Redux, JSX
- Back-End: Python, Flask-SQLAlchemy
- Database: PostgreSQL
- Hosting: Heroku

## Link to live site
https://instaspam-jade.herokuapp.com/

## Link to Wiki docs
https://github.com/elabbit/instaspam/wiki

## Features

### Register/Sign-in
Users can register an account on Instagram with a unique username, email and a password of their choosing. They can also sign in with their created email and password. If sign-in credentials are incorrect, error messages will alert the user to try again.

![Screen Shot 2022-07-27 at 3 45 50 PM](https://user-images.githubusercontent.com/84115420/181385361-2db4b5ac-0e58-4e3c-8519-7a04c8eb1e82.png)

![Screen Shot 2022-07-27 at 3 42 25 PM](https://user-images.githubusercontent.com/84115420/181385374-ded2096f-e4eb-4313-ad70-ca76a4edb2eb.png)



### View User Feed
Any logged-in user can view posts of users that they follow.

![Screen Shot 2022-07-27 at 3 40 59 PM](https://user-images.githubusercontent.com/84115420/181387347-8dfd8fa3-a81d-4210-9d43-fbdc186c02f3.png)


## View and Edit Profile Page
Any logged-in user can view posts that they have uploaded, along with a user biography. They can also edit their profile.

![Screen Shot 2022-07-27 at 3 41 49 PM](https://user-images.githubusercontent.com/84115420/181385513-97589363-7aff-41b2-9ba1-d3c58586ad2b.png)

![Screen Shot 2022-07-27 at 3 42 03 PM](https://user-images.githubusercontent.com/84115420/181386294-d10f3086-dbbc-460e-856b-b18423b1d4a1.png)


## View Explore Page
Any logged-in user can view an explore page that will display random posts that do not belong to the user.

![Screen Shot 2022-07-27 at 3 41 13 PM](https://user-images.githubusercontent.com/84115420/181385625-8f32a70c-04d0-47af-ae45-85d116578bc0.png)

## View Specific Posts
Any logged-in user can click on a post and view thee post, along with comments.

![Screen Shot 2022-07-27 at 3 42 47 PM](https://user-images.githubusercontent.com/84115420/181385984-699a73dc-5bbd-4356-b13b-71a466e9b0db.png)


### Creating, editing, and deleting Posts
All logged-in users can create their own posts. They can also only edit and delete their posts.

![Screen Shot 2022-07-27 at 3 55 42 PM](https://user-images.githubusercontent.com/84115420/181386385-44556506-c452-491c-8468-2984824ecc3e.png)

![Screen Shot 2022-07-27 at 3 43 54 PM](https://user-images.githubusercontent.com/84115420/181387055-777f2c25-4cf3-47b8-b1a8-be574185d6f4.png)


### Creating, viewing, editing and deleting Comments
All logged-in users can post their own comments on any post. They can also edit or delete their own comments.

![Screen Shot 2022-07-27 at 3 44 43 PM](https://user-images.githubusercontent.com/84115420/181387170-f6abf81c-552e-46e1-9a39-c7c3d0fd2509.png)




## Future features to implement
- Search Bar
- Direct Messaging
- Hashtags

## Challenges Faced
- Implementing the likes and follow was definitely the most difficult aspect of the project. We had issues especially dealing with the Followers model in the database. The relationship, which required userId and userId, required us to implement backref within the User model relationship. In regards to both the likes and followers redux slice of states, we had to update the likes and followers slice of state depending on the page the user is at. We needed to update the state for both sesssion user and user if the user is on someone's profile page and decides to follow them.



# Project installation and setup

## Getting started
1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***


*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (OPTIONAL for M1 Users)
The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed. 
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer. 
3. Clone the repository (only this branch)
   ```bash
   git clone https://github.com/appacademy-starters/python-project-starter.git
   ```
4. Open the repo in VS Code. 
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner. 
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

<br>

## Deploy to Heroku
This repo comes configured with Github Actions. When you push to your main branch, Github will automatically pull your code, package and push it to Heroku, and then release the new image and run db migrations. 

1. Write your Dockerfile. In order for the Github action to work effectively, it must have a configured Dockerfile. Follow the comments found in this [Dockerfile](./Dockerfile) to write your own!

2. Create a new project on Heroku.

3. Under Resources click "Find more add-ons" and add the add on called "Heroku Postgres".

4. Configure production environment variables. In your Heroku app settings -> config variables you should have two environment variables set:

   |    Key          |    Value    |
   | -------------   | ----------- |
   | `DATABASE_URL`  | Autogenerated when adding postgres to Heroku app |
   | `SECRET_KEY`    | Random string full of entropy |

5. Generate a Heroku OAuth token for your Github Action. To do so, log in to Heroku via your command line with `heroku login`. Once you are logged in, run `heroku authorizations:create`. Copy the GUID value for the Token key.

6. In your Github Actions Secrets you should have two environment variables set. You can set these variables via your Github repository settings -> secrets -> actions. Click "New respository secret" to create
each of the following variables:

   |    Key            |    Value    |
   | -------------     | ----------- |
   | `HEROKU_API_KEY`  | Heroku Oauth Token (from step 6)|
   | `HEROKU_APP_NAME` | Heroku app name    |

7. Push to your `main` branch! This will trigger the Github Action to build your Docker image and deploy your application to the Heroku container registry. Please note that the Github Action will automatically upgrade your production database with `flask db upgrade`. However, it will *not* automatically seed your database. You must manually seed your production database if/when you so choose (see step 8).

8. *Attention!* Please run this command *only if you wish to seed your production database*: `heroku run -a HEROKU_APP_NAME flask seed all`

## Helpful commands
|    Command            |    Purpose    |
| -------------         | ------------- |
| `pipenv shell`        | Open your terminal in the virtual environment and be able to run flask commands without a prefix |
| `pipenv run`          | Run a command from the context of the virtual environment without actually entering into it. You can use this as a prefix for flask commands  |
| `flask db upgrade`    | Check in with the database and run any needed migrations  |
| `flask db downgrade`  | Check in with the database and revert any needed migrations  |
| `flask seed all`      | Just a helpful syntax to run queries against the db to seed data. See the **app/seeds** folder for reference and more details |
| `heroku login -i`      | Authenticate your heroku-cli using the command line. Drop the -i to authenticate via the browser |
| `heroku authorizations:create` | Once authenticated, use this to generate an Oauth token |
| `heroku run -a <app name>` | Run a command from within the deployed container on Heroku |
