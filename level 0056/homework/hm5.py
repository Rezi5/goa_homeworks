def all_unique_letters(s):
    return len(s) == len(set(s))


print(all_unique_letters("python"))  
print(all_unique_letters("hello"))