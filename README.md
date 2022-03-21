# YouTube-CLI: Searching and Playing YouTube videos from within the Terminal Emulator
Inspired by one of my favourites, Ani-CLI, which scrapes GogoAnime,
 I decided to have a go at creating something similar for YouTube.
In this repo you'll find a Python programme that uses the 
YouTube Data API v3 to query videos. If you have an API key (which
is free and easy to get), you can use this one. If you don't, 
however, there's also a NodeJS programme that is independent of 
the API, which runs a  headless Chromium browser to fetch video data. 
You can use this one without an API key. 

# Dependencies
The script requires that you have the following installed in your
 system.
- *youtube-dl*: downloads YouTube videos.
- *mpv*: the video player we use to play the video.

Use your distro's package manager to fetch these.
For example, on Ubuntu and Debian based systems,
run `sudo apt-get install youtube-dl mpv`.

# Usage
`node yt-cli.js $QUERY`
After enteing this, you'll be presented with the top 24 search results.
 Just enter the number of the video you want to watch and mention how 
 many times it should be repeated, and you're done.
![yt-cli ss](https://raw.githubusercontent.com/susmit31/YouTube-CLI/master/ss.png)