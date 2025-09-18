#https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/python
def find_smallest(numbers, to_return):
    smallest = min(numbers)
    if to_return == "value":
        return smallest
    elif to_return == "index":
        return numbers.index(smallest)