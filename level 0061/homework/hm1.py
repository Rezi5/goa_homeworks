#import random irchevs randomulad listidan raime elements
import random
listl = [1,2,3,4,5,6,7,8,9,10]
new = random.choice(listl)
user = int(input("Guess random num"))
if user == new:
    print('u guessed')
else:
    print('wrong answer was',new)
