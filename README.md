#feedback-display

![Build status](https://travis-ci.org/fonorobert/feedback-display.svg?branch=master)

Feedback-display lays out the contents of a csv file in a hierarchical way. It groups records by fields and renders it on a website.

##Current state:

Grouping is fixed, based on 2 fields.
Feedback-display assumes there is a feedback author and receiver fields. It groups records based on receiver, each receiver get's their own page. On the page records are grouped by author and displayed in tables.

##Installation and running

1. Clone the repo

    `git clone https://github.com/fonorobert/feedback-display.git`

2. Install dependencies

    ```
    cd feedback-display
    npm install
    ```
3. Configure

    In the config folder make a copy of `default.json` as `development.json` and edit the keys there.
    Set the fieldnames to base grouping on under the `fieldNames` key.

4. Running

    To run the app, issue `export NODE_ENV=development && node index.js` in the root of the project folder.
    Go to `http://localhost:3000` (or another port if you changed it) to see the website rendered.
