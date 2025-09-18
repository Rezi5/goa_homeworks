countries = {}

for i in range(3):
    country = input(f"Enter country {i+1}: ")
    capital = input(f"Enter capital for {country}: ")
    countries[country] = capital

for country, capital in countries.items():
    print(country, "-", capital)

search = input("Enter a country to find its capital: ")

if search in countries:
    print("Capital:", countries[search])
else:
    print("Country not found")