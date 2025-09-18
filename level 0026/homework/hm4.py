def check_type():
    a = input("შეიყვანე პირველი რიცხვი: ")
    b = input("შეიყვანე მეორე რიცხვი: ")
    op = input("შეიყვანე ოპერაცია (+, -, *, /): ")

    
    a = float(a)
    b = float(b)

    if op == "+":
        result = a + b
    elif op == "-":
        result = a - b
    elif op == "*":
        result = a * b
    elif op == "/":
        result = a / b
    else:
        print("არასწორი ოპერაცია")
        return

    print(type(result))