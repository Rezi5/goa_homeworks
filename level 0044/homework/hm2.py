#https://www.codewars.com/kata/57f36495c0bb25ecf50000e7/train/python
def find(n):
    total = 0
    for i in range(1, n + 1):
        if i % 3 == 0 or i % 5 == 0:
            total += i
    return total