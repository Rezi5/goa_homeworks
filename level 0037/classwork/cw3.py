def remove_exclamation_marks(s):
    result = ""
    i = 0
    while i < len(s):
        if s[i] != "!":
            result = result + s[i]
        i = i + 1
    return result
