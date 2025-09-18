def most_common_type(li):
    types = []
    counts = []

    for item in li:
        t = type(item)
        if t in types:
            index = types.index(t)
            counts[index] += 1
        else:
            types.append(t)
            counts.append(1)

    max_count = counts[0]
    max_type = types[0]

    for i in range(1, len(counts)):
        if counts[i] > max_count:
            max_count = counts[i]
            max_type = types[i]

    return max_type