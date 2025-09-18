def take(lst):
    num = lst
    if num % 3 == 0:
        return [x for x in lst if x % 3 != 0]