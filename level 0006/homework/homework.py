num = int(input("enter number:"))
count = 0
for num in range(1,num +1):
  if num % 2 == 1:
    count += num
    print("kenti ricxvebis jami", num,)
 


 
num = int(input("enter num"))
count = 0
for num in range(1,num,+1):
    if num / 2==5:
        count += num
        print("ricxvebis jami:", num)


password = 3 
attempts = 3 

while attempts > 0:
    guess = int(input("Enter the password: "))

    if guess == password:
        print("Access granted!") 
        break
    else:
        attempts -= 1
        if attempts > 0:
            print("Wrong password! Attempts left:")
        else:
            print("Too many incorrect attempts. Access denied!")




name = input("enter name")
res = " "

for i in name:
    res = i + res
print(res)