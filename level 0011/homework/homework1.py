#https://www.codewars.com/kata/57e1e61ba396b3727c000251/train/python
def string_clean(s):
    """
    Function will remove all numeric characters and return the cleaned string.
    """
    cleaned = ''
    for i in range(len(s)):
       
        if s[i] < '0' or s[i] > '9':
            cleaned += s[i]
    return cleaned