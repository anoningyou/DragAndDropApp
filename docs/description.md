I need a standalone web app that I can host on my localhost. Here is what this app should do:

Each character (represented by an icon and shown on the left column of the screen) has a unique ID and can be dragged onto the grid. Same character can be dragged onto multiple areas on the grid. Character on grid can be dragged to other cells in that grid.

When user clicks Generate, a JSon file is generated with character ID and x,y value for every character on the grid.

See the attached PDF for visual instructions.

Clicking Reset clears up the grid.

Here is some similar code that I found.

https://github.com/tiberiuzuld/angular-gridster2/issues/745


How users will use this system: Users will drag and drop character icons from the left column and onto the grid. The outputted JSon file will feed into another software that is phase 2 and will be discussed later.