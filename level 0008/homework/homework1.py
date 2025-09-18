secret = 246810
guess = 5
while guess > 0:
    enter = int(input("try guessing sequence:"))
    if enter == secret:
        print("congratulations you guessed sequence")
        break
    else:
        guess-=1
        if guess > 0:
            print("try again!")
        else:
            print("no more trys left!")
