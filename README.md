# Project Proposal

## Problem
There is an increase in mental disorder diagnoses such as depression, autism, ADHD 
and more. This results in limitations at work, social life and private life. Often 
treatments are not sufficient and people struggle with them for a long time.  

## Solution
To prevent/treat a disorder it is essential to understand the disorder. An
overview of disorder prevalence over the world can help in finding possible
causes for the increase in diagnoses and better understanding the disorder.

### Main features @cr
**Dropdown menu** depressive disorder, bipolar disorder, schizophrenia, alcohol/drugs
use disorder, anxiety disorder, eating disorder, autism, ADHD
**Slide function** 2000, 2005, 2010, 2015
**On click (map)** select a country, all countries on the map where data is available

### Optional features
**On hover (map)** show country disorder information
**On hover (pie chart)** show more information pie piece
**On click (pie chart)** choose disorder, instead or next to dropdown menu
**On hover (line graph)** show more information for line
**Choose a sex** female, male, both (button?)
**Choose an age** 0-4, 5-14, 15-29, 30-49, 50-59, 60-69, 70 (Dropdown?)

![](Programmingproject/ProjectProposal.jpeg)

## Prequisitions
**Data source**: The data has to be converted from csv to json
[World Health Organization - Disease Burden 2000-2015] (http://www.who.int/healthinfo/global_burden_disease/estimates/en/index2.html
I will use the DALY data for 2000, 2005, 2010 and 2015. DALY is a measurement of
the gap between current health status and an ideal health situation.
**External components**: d3-tip, topojson, bootstrap
**Similar visualizations**: This visualization shows the number of psychiatrists
working in mental health based on population size. This is a related subject (would
also be an interesting comparison) and they also use some features that I can use.
To show the prevalence of mental disorders I can use a world map as well coloured
on prevalence. I also want to use a pie chart to show the distribution of different
disorder per country. [visualization] (http://gamapserver.who.int/gho/interactive_charts/mental_health/psychiatrists_nurses/atlas.html)
**Hardest parts**:
