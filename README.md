# UFO-watch

## Overview
Data for UFO sightings is displayed as a table in a webpage made dynamic by JavaScript to allow users to input multiple filters at the same time. The webpage is also styled and organized by Bootstrap's CSS elements to ensure a unified design.

## How to use the webpage 
On loading the webpage, the user sees introductory elements: jumbotron page header with background image, article title and paragraph priming the website's purpose. Below these elements, a left column contains 5 input fields with placeholder text, one for each criteria the user can enter to filter with. With no filters entered, the right column displays all entries in the data set by default.

![no filter list](/static/images/no_filters.png)

To refine the dataset displayed, the user can apply as many filters as desired. 

![one filter](/static/images/one_filter.png)

![all filters](/static/images/all_filters.png)

The JavaScript code responsible for the dynamic table utilizes the D3.js library to select all HTML input tags when any changes are detected (enter keystrokes) and executes a function to rebuild the table based on the filters supplied.

## Summary
One drawback of this new design and two recommendations for further development.
