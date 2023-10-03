# docker-template

This is a simple boilerplate repo where the user can just do ```docker-compose up --build -d``` to immediately get a server, database, and frontend client set up inside a container. Everything is written in typescript.

### Database

The database is a simple postgres image. Nothing special here.

### Server

The server is using Express.js with Prisma ORM. I (unneccesarily) added CORS.

### Client

The client is an empty React project with RTK Query and react-router-dom set up. As it is right now, it simply calls a GET request to the server just as a proof of concept.


## Background

The reason I'm making this is simply to practice docker usage, particularly deploying a built typscript project and the multi-stage build function. I also just think that it's neat that I can just put this inside a VPS and get a web service up and running. Is it optimized or best practice? Probably not; but it's cool :)
