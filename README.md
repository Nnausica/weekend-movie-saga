# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

### Set UP
[x] Create a database named `saga_movies_weekend`
[x] Run the queries from `database.sql` on the `saga_movies_weekend` database

[x] Install Dependencies

### Home/List Page

- When a movie poster is clicked, a user should be brought to the `/details` view for that movie.
[x] Create object in dispatch with individual movie details
[x] Create Movie Details Component
[x] Add movie details to store
[x] Display details at '/detail'
[x] Add Back button to Movie List page

### Genres

[x] add GET request to genre.router
    --- matching the route in the request to the routre in the server is important!
[x] create SQL search
[x] add useEffect- dispatch to movie details to get genres
[x] watcher dispatch type matches useEffect in MovieDetails, call function
[x] function sets genres in store