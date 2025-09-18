#https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/python
def add_length(str_):
    words = str_.split()  
    result = []  
    
    for word in words:
        result += [word + ' ' + str(len(word))]  
    
    return result