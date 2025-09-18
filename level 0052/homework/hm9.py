def divisors(n):
    result = []
    for i in range(1, n + 1):
        if n % i == 0:
            result.append(i)
    return result


num = int(input("Enter a number: "))
print("Numbers that divide", num, "without remainder:", divisors(num))
