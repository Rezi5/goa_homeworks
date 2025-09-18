#https://www.codewars.com/kata/574b1916a3ebd6e4fa0012e7/train/python
def is_opposite(s1, s2):
    if s1 == "" or s2 == "":
        return False
    if len(s1) != len(s2):
        return False

    i = 0
    while i < len(s1):
        a = s1[i]
        b = s2[i]

        
        if a == b:
            return False

        # If one is lowercase and the other is uppercase
        # Check if they are the same letter but with different case
        if (a == "a" and b != "A") or (a == "A" and b != "a"):
            return False
        if (a == "b" and b != "B") or (a == "B" and b != "b"):
            return False
        if (a == "c" and b != "C") or (a == "C" and b != "c"):
            return False
        

        i = i + 1

    return True