# Final Report

### Disorder Prevalence
There's an increase in diagnoses of mental disorders such as depression, autism and ADHD. Often treatments are not sufficient due to a lack of understanding of what these disorders really are. To prevent/treat a disorder it's essential to understand the disorder. An overview of the prevalence of disorders over the world can help in getting a better understanding and finding possible causes for the increase in diagnoses.

This project gives an overview of disorders over the world. The map gives an insight in the prevalence of disorders in different countries. The bar chart shows the changes over time for specific countries and the parallel coordinates shows the comorbidity between disorders.

![image](doc/fullPage.png)

### Technical Design
The code is divided over five JavaScript files. Each visualization has its own file (map.js, barChart.js and parallel.js). There also is a file for the dropwdown menu's (dropdown.js) and a file to load an update data (loadData). Next to the JavaScript files, there are two css files, one for the visualizations (project.css) and one for the page layout and bootstrap elements (page.css). There is one python file that converts CSV to JSON and makes everything the right format (convertCSV2JSON.py).

Map.js contains three functions:   
- drawMap: draws the map, the tooltip and the mouseover and click functions.  
- drawLegend: this function makes the gradient legend bar underneath the map.  
- titleMap: this function determines the map title depending on the chosen disorder and year.    

barChart.js contains five functions:
- *drawChart:* draws the axes and bars for the chart.
- *mouseOver:* makes the bars les transparent when hovering over and shows exact data for the bar.
- *mouseOut:* removes mouseOver effects.
- *onclick:* updates data in the map and parallel coordinates according to the year of the bar that was clicked.
- *titleChart:* makes the title for the bar chart depending on the chosen country and disorder.

parallel.js contains six functions:
- *drawParallel:* draws the parallel coordinates with axes and lines.
- *mouseOver:* make the line get thicker and brighter when hovering over. Shows countryname next to line.
- *mouseOut:* removes mouse over effects.
- *titleParallel:* this function determines the parallel coordinates title depending on the chosen country and year. And whether one or two lines are selected.
- *position:* determines position for path 
- *path:* returns the path for a given data point

dropdown.js containts four functions:
- *dropdownDisorders:* makes dropdown menu for disorders and loads disorder names in the menu extracted from the data. onCHange(): Uploads the visualizations with the selected option. The bar chart and map show the data for that disorder.
- *dropdownCountries0:* makes the first dropdown menu for countries and loads the country names in the menu extracted from the data. onCHange(): uploads the visualizations with the selected option. The line for the selected country lights up in the parallel coordinates and the bar chart shows the data for that country.
- *dropdownCountries1:* makes the first dropdown menu for countries and loads the country names in the menu extracted from the data. onCHange(): uploads the visualizations with the selected option. The line for the selected country lights up in the parallel coordinates and the bar chart shows the data for that country.
- *enable:* makes sure the second dropdown menu is hidden when the checkbox is unchecked and shown when the checkbox is checked.

loadData.js contains three function:
- window.onload: here all the data is queued
- loadData: here the data is loaded and put together in one object. Also the data is converted to numbers and the default options (country, year and disorder choice) are set for when the page is loaded.
- uploadData: removes all svg's and draws all visualizations

### Challenges and Decisions
At first I wanted to make a line chart and a pie chart next to the map, but a line graph would have to fill in to much data because my data has gaps of 5 years. So I would make a parallel coordinates but this would have almost the same functionality as the pie chart. So I decided to make a bar chart which would replace the functionality of the line chart (see differences over time).   
I also planned to make a slide function for years underneath the map. I realized during the process that the differences over time where barely visible in the map. This functionality did not really help my story so I decided to implement a mouseover and compare countries function for the parallel coordinates.   
A challenge for me was the page layout. I was struggling to get everything in the right place. I used bootstrap containers which made the placing of the visualization not to difficult, but the placing of the dropdown menu's and checkbox did not go as I had wanted. If I had more time I would work on that.   
I was also still struggling with global variables. I would have liked to separate some functionality in distinct functions, but had to give so many variables with the function that it became messy. First ting I would do when starting a new project is finding out how to make a good update function instead of removing the whole visualization. Also the dropdown menu code could have been one function for the biggest part. There are just slight differences between the three dropdowns, which not make it necessary to write the whole code three times.   
Apart from this struggles I implemented all the functionality I wanted and everything works without bugs (as far as I know).
