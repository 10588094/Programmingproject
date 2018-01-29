# Name: Daphne Witmer
# Student number: 10588094
# convert csv data to JSON

import json
import csv
from pprint import pprint

# Open csv file and make a dict
with open('../../data/csv/DALY-2000.csv', 'r') as infile:
    fieldnames = ['country', 'countryCode', 'all', 'depressive', 'bipolar', 'schizophrenia',
    'alcoholUse', 'drugUse', 'anxiety', 'eating',
    'autism', 'adhd']
    reader = csv.DictReader(infile, fieldnames)
    reader = list(reader)

    reader1 = {}
    for each in reader:
        reader1[each['country']] = {'country': each['country'], 'countryCode': each['countryCode'], 'All': each['all'],
        'Depressive': each['depressive'], 'Bipolar': each['bipolar'], 'Schizophrenic': each['schizophrenia'],
        'AlcoholUse': each['alcoholUse'], 'DrugUse': each['drugUse'], 'Anxiety': each['anxiety'],
        'Eating': each['eating'], 'Autism': each['autism'], 'Adhd': each['adhd'] }

    # Write data to an JSON file
    with open('../../data/json/DALY-2000.json', 'w') as outfile:
        json.dump(reader1, outfile)
