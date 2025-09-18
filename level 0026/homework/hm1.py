def check(word):
    if type(word) == str:
        return "Literature"
    elif type(word) == int or type(word) == float:
        return "Math"
    elif type(word) == bool:
        return "Science"
print(check(2011))