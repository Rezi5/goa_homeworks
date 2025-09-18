def add(*args):
    arg = ""
    arg1 = ""
    for i in args:
        if type(i) == str:
            arg = arg + i
        elif type(i) == int:
            arg1 = arg1 + " " + str(i)
            return arg + arg1