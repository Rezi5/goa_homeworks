def even_first(lst):
    evens = [x for x in lst if x % 2 == 0]  
    odds = [x for x in lst if x % 2 != 0]  
    return evens + odds


numbers = [1, 2, 3, 4, 5, 6]
print(even_first(numbers)) 