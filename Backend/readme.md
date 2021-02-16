# Backend
## API
<b>Make sure that you are in the bookless_server directory!</b>
- Build the System
    - `docker-compose build`
    - this command loads all required modules

- Run the System
    - `docker-compose up`
    - this command runs the system 

## Changes in init.sql
- When you changed something from the db structe you have to remove the db image from your docker compose   
    - `docker-compose rm database`

- Then you have to run the system again
