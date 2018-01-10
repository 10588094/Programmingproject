# Name: Daphne Witmer
# Student number: 10588094
# convert csv data to JSON

import json
import csv

# Open csv file and make a dict
with open('data/csv/DALY-2015.csv', 'r') as infile:
	fieldnames = ['Country', 'All', 'Depressive disorders', 'Bipolar disorder', 'Schizophrenia',
    'Alcohol use disorders', 'Drug use disorders', 'Anxiety disorders', 'Eating disorders',
    'Autism and Asperger syndrome', 'Attention deficit/hyperactivity syndrome']
	reader = csv.DictReader(infile, fieldnames)
	reader = list(reader)

    # Write data to an JSON file
	with open('data/json/DALY-2015.json', 'w') as outfile:
		json.dump(reader, outfile)
