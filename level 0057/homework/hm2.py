fruits = []
for i in range(5):
    fruit = input(f"Enter your favorite fruit {i+1}: ")
    fruits.append(fruit)

fruits.append("Mango")
fruits.append("Pineapple")

fruits.pop()

print("Original list:", fruits)
print("Alphabetically sorted:", sorted(fruits))