# gamescore

Simple REST API to persist highscores from some Unity games created by me.

Upcoming support for:
* [BobOlympics](http://games.morphnet.ch/bobolympics/index.html)
* [SpaceShooter](https://spaceshooter.morphnet.ch/)


Docker Compose example
```
version: '3'

services:
  gamescore:
    container_name: gamescore
    image: gamescore
    build: .
    expose:
      - "3000"
    volumes:
      - ./app:/data/app
```