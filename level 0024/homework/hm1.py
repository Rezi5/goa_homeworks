#https://www.codewars.com/kata/56efc695740d30f963000557/train/python
def to_alternating_case(s):
    result = ""
    for letter in s:
        if letter.isupper():
            result += letter.lower()
        elif letter.islower():
            result += letter.upper()
        else:
            result += letter 
    return result
