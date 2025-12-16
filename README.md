# YouTube Shorts Blocker

A Chrome extension that blocks YouTube Shorts from appearing on your YouTube feed.

## What it does

This extension removes all YouTube Shorts from your browsing experience by:
- Blocking access to the Shorts page (redirects to YouTube home)
- Hiding the Shorts section from your home feed
- Hiding individual Shorts videos in recommendations
- Removing the "Shorts" button from the sidebar navigation

## Installation

1. Download or clone this repository
2. Open Chrome and go to chrome://extensions/
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked"
5. Select the yt-shorts-blocker folder
6. The extension is now installed and active!

## How to use

Once installed, the extension works automatically:
- Visit YouTube.com
- All Shorts will be hidden from your feed
- If you try to visit youtube.com/shorts/, you'll be redirected to the main YouTube page
- Clicking on any Shorts link will redirect you to YouTube home

## Features

- Hides Shorts shelf from home page
- Hides individual Shorts in recommendations
- Blocks direct access to Shorts pages
- Removes Shorts button from sidebar
- Automatically hides new Shorts as you scroll

## Files included

- manifest.json - Extension configuration file
- content.js - Main script that blocks Shorts
- images/ - Folder for extension icons (optional)

## How it works (Technical)

The extension uses:
- Content Scripts - Injects code into YouTube pages
- DOM Manipulation - Hides Shorts elements using CSS display: none
- Event Listeners - Blocks clicks on Shorts links
- MutationObserver - Watches for new content and hides Shorts as they load

## Requirements

- Google Chrome browser
- YouTube.com access

## Troubleshooting

Shorts still appearing?
- Refresh the extension on chrome://extensions/
- Refresh the YouTube page
- Make sure the extension is enabled

Getting errors?
- Check the extension details on chrome://extensions/
- Click "Errors" to see what went wrong
- Try disabling and re-enabling the extension

## Future improvements

Possible features to add:
- Settings page to customize blocking preferences
- Popup menu to toggle blocking on/off
- Block other YouTube recommendations (Music, Gaming, etc.)

## License

Free to use and modify for personal use.

