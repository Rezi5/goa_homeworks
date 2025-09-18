#https://www.codewars.com/kata/55a5bfaa756cfede78000026/train/python
def problem(a):
    if type(a) == str:
        return "Error"
    else:
        return a * 50 + 6