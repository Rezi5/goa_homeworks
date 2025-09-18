def most_frequent_char(s):
    freq = {}
    for char in s:
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1

    
    max_char = max(freq, key=freq.get)
    return max_char


print(most_frequent_char("banana"))  