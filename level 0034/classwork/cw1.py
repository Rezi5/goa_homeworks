#https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/python
def validate_hello(greetings):
    greetings_list = ['hello', 'ciao', 'salut', 'hallo', 'hola', 'ahoj', 'czesc']
    greetings = greetings.lower()
    
    for greet in greetings_list:
        if greet in greetings:
            return True
    return False