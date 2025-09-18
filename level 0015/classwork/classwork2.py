#https://www.codewars.com/kata/5a1a9e5032b8b98477000004/train/python
def even_last(numbers):
    if not numbers:  
        return 0
    return sum(numbers[i] for i in range(0, len(numbers), 2)) * numbers[-1]