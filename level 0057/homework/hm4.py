students = {
    "Ana": 95,
    "Giorgi": 88,
    "Luka": 76
}

for name, score in students.items():
    if score >= 90:
        print(name, score)
    else:
        print(name, "score is less than 90")

students.update({"Nino": 100})

print("Final dictionary:", students)