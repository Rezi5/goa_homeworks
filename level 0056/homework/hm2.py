def unique_numbers(lst):
    return [x for x in lst if lst.count(x) == 1]


numbers = [1, 2, 2, 3, 4, 4, 5]
print(unique_numbers(numbers))  