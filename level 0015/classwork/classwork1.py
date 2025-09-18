#https://www.codewars.com/kata/53da6d8d112bd1a0dc00008b/train/python
def reverse_list(l):
    res = []
    for i in l:
        res.insert(0, i) 
    return res


print(reverse_list([1, 2, 3, 4])) 
print(reverse_list([9, 2, 0, 7]))