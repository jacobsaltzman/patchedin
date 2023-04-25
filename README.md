# PatchedIn 


## Description


This project is a full stack web application built with a React frontend, PostgresSQL database, and a Ruby on Rails
backend that allows users to create and keep track of projects, add tasks, and make contributions to gain experience and engage with the community.


## User Experience


Users land on the site at the home page where they can read all about the site, and also signup or login. From there, once authenticated, users can browse through the _projects_, check out their _account_ information and edit their own projects, or see the _tasks_ that are create to each project, and engage in discussions/help the project out. The user can **create** a project themselves, **read** the projects, tasks, and contributions of all, **update** their project and tasks by editing their descriptions, progress, and completion, or **delete** a project or task if they decide later to not want to follow through or work on the task. The functionality is split as a project and task coordinator and a discussion/forum space among each task.


## Fullstack Main Factors

- A Rails API with four models.

- A _many-to-many_ relationship. implementing two _has many_ relationships and a **join table** with two foreign keys.

- REST routes and Full **CRUD** actions for the _project_ model, and at least *Read* and *Create* for the others.

- Client-side routing on a single-page application using React.

- Authentication, password protection, data validation, and error rendering built into the API.


# Setup And Deployment

**Requirements**

- Ruby on Rails installed locally
- NodeJS, and npm

When you're ready to run this project, **_cd_** into the main directory and run:

```sh
npm install --prefix client
bundle install
rails db:create
rails db:migrate
```


## Deploying Locally


Now that everything is set up, to deploy it's best to set up the backend first. You can do so by opening a terminal and running:

```console
rails s
```

This will run the backend server on [http://localhost:3000](http://localhost:3000)


Leave that running, and open a new terminal. Then set up the frontend with the command:

```console
npm start --prefix client
```

This will run the frontend on [http://localhost:4000](http://localhost:4000) which you can see the _view_ in the browser.


## Resources and Notes

**Note:** to use SQLite instead of PostgreSQL:

1. In the `Gemfile`, replace `gem 'pg', '~> 1.1'` with `gem 'sqlite3', '~> 1.4'`.

2. In the `database.yml` file, change the line `adapter: postgresql` to `adapter: sqlite3`.





###### PatchedIn, 2023