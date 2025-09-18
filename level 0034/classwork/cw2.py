#https://www.codewars.com/kata/57037ed25a7263ac35000c80/train/python
from urllib.parse import quote

def generate_link(username):
    result = ""
    for char in username:
        if char == "/":
            result += "/"
        else:
            result += quote(char)
    return "http://www.codewars.com/users/" + result