num = int(input("Enter 3 numbers:"))
num1 = int(input("Enter 3 numbers:"))
num2  = int(input("Enter 3 numbers:"))
if num > num1 and num > num2:
    print(num)
elif num1 > num and num1 > num2:
    print(num1)
else:
    print(num2)