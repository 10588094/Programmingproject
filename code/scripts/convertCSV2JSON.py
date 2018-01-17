# Name: Daphne Witmer
# Student number: 10588094
# convert csv data to JSON

import json
import csv
from pprint import pprint

# Open csv file and make a dict
with open('../../data/csv/DALY-2015.csv', 'r') as infile:
    fieldnames = ['country', 'population', 'all', 'depressive', 'bipolar', 'schizophrenia',
    'alcoholUse', 'drugUse', 'anxiety', 'eating',
    'autism', 'adhd']
    reader = csv.DictReader(infile, fieldnames)
    reader = list(reader)

    reader1 = {}
    for each in reader:
        reader1[each['country']] = {'population': each['population'], 'all': each['all'],
        'depressive': each['depressive'], 'bipolar': each['bipolar'], 'schizophrenia': each['schizophrenia'],
        'alcoholUse': each['alcoholUse'], 'drugUse': each['drugUse'], 'anxiety': each['anxiety'],
        'eating': each['eating'], 'adhd': each['adhd'] }

    # Write data to an JSON file
    with open('../../data/json/DALY-2015.json', 'w') as outfile:
        json.dump(reader1, outfile)
