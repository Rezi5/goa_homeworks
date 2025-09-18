
for i in range(101):
    print(i)


guess = 16  

while True:
    num = int(input("Enter a number: "))

    if num < guess:
        print("Higher")
    elif num > guess:
        print("Lower")
    else:
        print("Correct! 🎉")
        break