#https://www.codewars.com/kata/5583090cbe83f4fd8c000051
def digitize(n):
    reverse = []
    n = str(n)
    for i in n:
        reverse = [int(i)] + reverse
    return reverse