name = int(input("Enter ur age: "))
if name <= 10:
    print("Kid")
elif name > 10 or name <= 18:
    print("Teenager")
elif name > 18 or name <= 30:
    print("Adult")
else:
    print("Unc")