#https://www.codewars.com/kata/5708f682c69b48047b000e07/train/python
def multiply(n):
    
    text = str(n)

    
    if n < 0:
        text = text[1:]

    
    count = len(text)

    
    result = 1
    for i in range(count):
        result = result * 5  

    
    return n * result