def res(num):
    x = 0
    for i in str(num):
        x+=int(i)
        return num % x
print(res(25))