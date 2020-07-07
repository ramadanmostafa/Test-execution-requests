## Python Back-end Assignment: Test executor web application
Implement a web application that provides a central place to run Python-based tests.
These tests will be run in a shared environment that provides limited hardware
resources to developers.
To have some sample tests, just create dummy Python tests (some failing, some not,
maybe add some delays for more realism).
You might also run the tests for your own application if you like.
The tests will be executed right on the machine that hosts the test executor application.

Features to be implemented:
1. Create a new test run, providing:
a. Username
b. Test environment ID (choose an ID between 1 and 100)
It must not be possible to run a test in an environment where there
is already a test running!
c. Choose one or more files to test, available tests are read from file system
d. The interface between the test executor web application and the Python
test runner itself can be chosen freely
2. List all previous test runs as a table including their outcome (failed, success,
running)
a. Bonus:
Live-update of running/finished tests via Ajax or Websockets
3. List details for one test run
a. Show all data provided in 1.
b. Show all logs that a test created
c. Bonus:
Live-update the current state and the logs of this test run via Ajax or
Websockets


# How to Run
```
cd ionos
cp .env.dist .env
cd ..
docker-compose build
docker-compose up
docker-compose run web python manage.py test --keepdb
```
you can go to http://127.0.0.1:8000/ to see the FE app
# How it works
when creating a new test run request, it triggers celery task to execute it on the selected env. if the env is busy, we 
wait for some time (or give up after some retries) when it's done, we change the status of the request and save the logs.
in the frontend, we call the listing api every one second to get a live updates (also the details api).

in the project we have sample-tests directory to save all the sample tests we want to run. also you can choose the actual test
files from api.tests dir. the test path is a multi-select, you can choose one or more file to test at a time and this paths
are created automatically in a migration file api/migrations/0002_auto_20200706_1208.py
# How to improve
improve the UI of the select field

what if a task failed before unlocking the env? it will stay busy forever so we need a way to recover.

create a new APIs to do CRUD operations on TestEnvironments and TestPaths