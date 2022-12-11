#API to fetch data from dialog flow using chat bot
from flask import Flask
import json

app = Flask(__name__)

@app.route('/', methods=['GET'])
def handle_request():
    data_set=[
        {
            'ID':'CSE 5330',
            'name':'Database Systems',
            'waitlist':'10'
        },
        {
            'ID':'CSE 5331',
            'name':'DBMS Models and Implementation Techniques'
        },
        {
            'ID':'CSE 5333',
            'name':'Cloud Computing'
        },
        {
            'ID':'CSE 5334',
            'name':'Data Mining',
            'waitlist':'25'
        },
        {
            'ID':'CSE 5335',
            'name':'Web Data Management'
        },
        {
            'ID':'CSE 5336',
            'name':'Stream Data Management'
        },
        {
            'ID':'CSE 5339',
            'name':'Special Topics in Database Systems'
        },
        {
            'ID':'CSE 5362',
            'name':'Social Networks and Search Engines'
        },
        {
            'ID':'CSE 6331',
            'name':'Advanced Topics in Database System',
            'waitlist':'25'
        },
        {
            'ID':'CSE 6332',
            'name':'Cloud Computing and Big Data',
            'waitlist':'25'
        },
        {
            'ID':'CSE 6339',
            'name':'Special Topics in Advanced Database Systems'
        },
        {
            'ID':'CSE 6363',
            'name':'Machine Learning',
            'waitlist':'30'
        }
        ]

    json_dump=json.dumps(data_set)
    return json_dump

