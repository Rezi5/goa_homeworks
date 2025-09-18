def filter_divisible(numbers, divisor):
    result = []  
    for num in numbers:
        if num % divisor == 0:  
            result.append(num)  
    return result


numbers = [1, 23, 165, 2, 3, 92, 10, 34, 911]
divisor = 3
print(filter_divisible(numbers, divisor))
def filter_divisible(numbers, divisor):
    result = []  
    for num in numbers:
        if num % divisor == 0:  
            result.append(num)  
    return result


numbers = [1, 23, 165, 2, 3, 92, 10, 34, 911]
divisor = 3
print(filter_divisible(numbers, divisor))
