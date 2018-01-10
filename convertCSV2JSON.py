# Name: Daphne Witmer
# Student number: 10588094
# convert csv data to JSON

import json
import csv

# Open csv file and make a dict
with open('data/csv/DALY-2015.csv', 'r') as infile:
	fieldnames = ['country', 'all', 'depressive', 'bipolar', 'schizophrenia',
    'alcoholUse', 'drugUse', 'anxiety', 'eating',
    'autism', 'ADHD']
	reader = csv.DictReader(infile, fieldnames)
	reader = list(reader)

    # Write data to an JSON file
	with open('data/json/DALY-2015.json', 'w') as outfile:
		json.dump(reader, outfile)
