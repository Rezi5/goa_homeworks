def number(num):
    if num % 2 == 1:
        num += 3
    elif num % 2 == 0:
        num += 5
        
    return num % 5   

print(number(100000))  
print(number(7))