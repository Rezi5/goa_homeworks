num = int(input("please input a number: ")) #6
count = 0
while num==1:
    num=int(input("try another number: "))
for i in range(2,num):
    if num % i == 0 and count == 0:
        print('Your number is not a prime')
        count += 1
if count == 0:
    print('your number is a prime')