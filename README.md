# Wesnoth Canvas
A web site for displaying game maps for *The Battle for Wesnoth.*

Canvas has been overhauled. Consider this Version 2.

## What is Wesnoth Canvas?
This is a web site for display maps for displaying game maps for a free strategy game called *The Battle For Wesnoth.* (Not familiar? Check it out at http://www.wesnoth.org) Part of it is an experiment and self-learning to the wonderful ways of JavaScript, jquery, and web design. As I continue to work on the project, it will eventually be a place to create, edit and save maps — and perhaps more.

## Why here?
Why not? I need a place that’s publicly accessible online so I can make edits from various different machines. I also want to make it relatively easy for people to download the files so they can test and debug it themselves. It is mirrored at http://mproud.com/wesnoth/canvas for your convenience.

## Where can I learn more?
Visit the Wesnoth forums, at:
http://r.wesnoth.org/t36714

## Changelog

### Version 2 Build 8
24 September 2012

* Started adding arrays of images for terrain. This is going to take time. During this time, the terrian may actually look worse as I haven’t “flipped the switch” so to speak, so the terrain will draw with the editor icon version instead of the nice‐looking version which I was using earlier.
* Continued refining logic for drawing terrain transitions using a bitwise method.
* Refined the cursor and made it so it appears in the entire window.

### Version 2 Build 7
4 September 2012

* Added new cursor. Not sure how I like it; may revert to original one.
* Added transition map. This is the beginning for really drawing nice-looking terrain.
* Minor formatting changes to terrain table.
* Removed GPL license on images. These are original works inspired by the Wesnoth project.

### Version 2 Build 6
21 August 2012

* Added names for all terrain codes.
* Made status bar narrower.
* Added name of terrain when a hex is selected.

### Version 2 Build 5b
21 August 2012

* Fixed minor issue with status bar scaling on resize events.
* Reformated README.md.

### Version 2 Build 4
20 August 2012

* Introduced Gentium fonts.
* Moved most variables into an object to avoid unecessary variable pollution.
* Implemented beginning of a status bar.
* Hex updates now working, only redraws when hex changes.
* Minor clarifications for licensing.

### Version 2 Build 3
20 August 2012

* Modified UI logic so map scrolls better.
* Introduced nice border.
* Created status bar though not fully implemented yet.

### Version 2 Build 2
7 July 2012

* Changes to key events.
* Added support for an interactive console.

### Version 2 Build 1c
5 July 2012

* Moved out tBfW dependencies. You’ll need to download the game resources and place them on the server.
* Changed index.html to index.php, partially for dynamic data directory support.
* Altered canvases to include a viewport, and changes as the window resizes. This should hopefully help with performance.
* Fixed various bugs.
* Fixed path to hover hex images — finally.
* Fixed path to starting position flag.

### Version 1 Build 1
26 April

* First entire upload of the project.

## License
Files in the image directory are licensed under GPL Version 2 as per The Battle for Wesnoth project.
http://www.gnu.org/licenses/gpl-2.0.txt

Files in the font directory are licensed under SIL Open Font License 1.1.
http://scripts.sil.org/OFL

All other files are licensed under MIT.
http://www.opensource.org/licenses/MIT


Copyright © 2012 ancestral

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.