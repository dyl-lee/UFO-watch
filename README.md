# UFO-watch

## Overview
Data for UFO sightings is displayed as a table in a webpage made dynamic by JavaScript (JS) to allow users to input multiple filters at the same time. The webpage is also styled and organized by Bootstrap's CSS elements to ensure a unified design.

## How to use the webpage 
On loading the webpage, the user sees introductory elements: jumbotron page header with background image, article title and paragraph priming the website's purpose. Below these elements, a left column contains 5 input fields with placeholder text, one for each criteria the user can enter to filter with. With no filters entered, the right column displays all entries in the data set by default. This data is built into the table from a JS array. 

![no filter list](/static/images/no_filters.png)

To refine the dataset displayed, the user can apply as many filters as desired by simply typing the filter statement and pressing Enter. 

![one filter](/static/images/one_filter.png)

![all filters](/static/images/all_filters.png)

The JS code responsible for the dynamic table utilizes the D3.js library to select all HTML input tags when any changes are detected and executes a function to rebuild the table based on the filters supplied.

## Summary
User input by text can be prone to mistakes or typographical errors. For example, cities can be mistyped and while the placeholder for the Date field suggests that the date format is MM/DD/YYYY, it was not so in the first iteration of webpage design. Additionally, the end-user does not have a clear idea of the scale of the dataset without having to look through the entire table first - how would they know what is a invalid parameter or a typing mistake?

One improvement to address this problem is to replace text-based inputs, specifically city, state, country and shape, with dropdown menus that reflect the options that are available. The other improvement is switching text input for the date field from type "text" to type "date". This allows the user to select their desired date through a dropdown calendar GUI, minimizing any date format confusion. This would require some data cleaning and transformation of data.js to match the HTML date format.
