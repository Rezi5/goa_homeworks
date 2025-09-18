#https://www.codewars.com/kata/5a2b7edcb6486a856e00005b/train/python
def check_vowel(strng, position):
    vowels = 'aeiouAEIOU'
    if 0 <= position < len(strng):
        return strng[position] in vowels
    return False
