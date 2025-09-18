#https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python
def count_positives_sum_negatives(arr):
    if arr == []:
        return []

    count = 0
    total = 0

    for number in arr:
        if number > 0:
            count = count + 1
        if number < 0:
            total = total + number