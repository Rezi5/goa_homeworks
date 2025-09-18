#https://www.codewars.com/kata/55f1b763dd670651620000ce/train/python
def count_char_occurrences(s, char):
    """
    This function accepts a string `s` and a character `char`, 
    and returns the number of times `char` occurs in `s`.
    """
    count = 0  # Initialize a counter to zero
    
    # Loop through each character in the string
    for ch in s:
        if ch == char:  # If the character matches `char`
            count += 1  # Increment the counter