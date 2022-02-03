---
title: Shareify
leadIn: a web app that democratizes music in public places. Allowing people to vote on the songs to be played from a Spotify account.
image: https://collective-fullstack.github.io/s-images/work/Shareify/ShareifyPlayer.png
date: 2020.12
links:
  - https://collective-fullstack.github.io/work/Shareify
  - https://github.com/Collective-Fullstack/communalspotify
---

Shareify was made to try and solve the problem of having loads of people trying to pick songs to play at a party. The usual solution is just to give everyone access to one person's phone and to add songs to that phone's queue. However, we at [Collective Fullstack](https://collective-fullstack.github.io) felt that this was a rather simplistic solution that would result in less songs that everyone liked being played.

Shareify democratises music by letting everyone add songs to a queue that can then be voted on. With the most voted song being played next. This results in a much fairer music selection process, as everyone is able to contribute and control what songs get played.

We accomplished this by using WebSockets to create a "room" that everyone could connect to via the room code provided in the corner of the app. This room would contain one centralised queue that everyone could add songs to and vote on in real time. The user interface was designed and developed in Preact, a reactive web framework.