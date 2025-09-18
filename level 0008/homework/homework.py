num = int(input("enter a num including 50:"))
while num > 50:
    num = int(input("enter a num including 50"))

for i in range(1,101):
    if i % num == 0:
        print(i)
