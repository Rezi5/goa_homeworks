#https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/python
def calc(x):
    total1 = ''.join(str(ord(c)) for c in x)
    total2 = total1.replace('7', '1')
    
    sum1 = sum(int(d) for d in total1)
    sum2 = sum(int(d) for d in total2)
    
    return sum1 - sum2
