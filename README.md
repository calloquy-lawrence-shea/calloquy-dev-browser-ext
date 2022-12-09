# Calloquy Developer Tools Extension

## Installation

Note that this plugin is designed to work only on localhost & *.calloquy.com, you can edit the manifest.json if this is not suitable.

- Download this repository to your machine (unzipped)
- Open chrome
- Click the three dots on the top right of chrome
- Click more tools
- Click extensions
- Enable 'developer mode' on the top right
- Click 'Load unpacked' and select the root folder of this project
- Click the puzzle piece icon on the address bar
- Click the pin on 'Calloquy Developer Helper Tools'

This browser extension injects javascript into pages that live on localhost & *.calloquy.com, so if you had one of these pages open, then installed the browser extension, you will need to either close & open the browser or hard reload + clear cache on each relevant page.

## Features

For now, this browser extension only does one thing, but 
I suspect that this plugin may be expanded with new features
in the future.

### Meetings

#### Open a new incognito window for each meeting participant.

We have to schedule & test meetings often, and opening up 
an incognito window for each user can be repetitive. 
This plugin adds a button that will open a new incognito window for 
each meeting participant, speeding up the process of joining test meetings.
