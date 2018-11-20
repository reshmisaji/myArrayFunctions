const assert = require('assert');
const arraysLibrary = require('./arraysLibrary.js');
const mapFilterReduce = require('./mapFilterReduce.js');
const {filter} = mapFilterReduce;
const {isEven} = arraysLibrary;

assert.deepEqual(filter(isEven,[]),[]);
