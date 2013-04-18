#!/bin/bash

ab -n 40 -c 4 http://deathvalet-0001.herokuapp.com/ > staging.log &
ab -n 40 -c 4 http://deathvalet.herokuapp.com/ > production.log &