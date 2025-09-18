#https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/python
def remove_smallest(numbers):
    if not numbers:
        return []
    numbers_copy = numbers.copy()
    numbers_copy.remove(min(numbers_copy))
    return numbers_copy