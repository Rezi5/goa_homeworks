#https://www.codewars.com/kata/5810085c533d69f4980001cf/train/python
def calculator(x, y, op):   
    if not isinstance(x, (int, float)) or not isinstance(y, (int, float)):
        return "unknown value"

    if op == '+':
        return x + y
    elif op == '-':
        return x - y
    elif op == '*':
        return x * y
    elif op == '/':
        return x / y if y != 0 else "unknown value"
    else:
        return "unknown value"