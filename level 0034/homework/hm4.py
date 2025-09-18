#https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/python
def number(bus_stops):
    people = 0
    for on, off in bus_stops:
        people += on
        people -= off
    return people