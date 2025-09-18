#https://www.codewars.com/kata/554ca54ffa7d91b236000023/train/python
def delete_nth(order, max_e):
    counts = {}
    result = []
    for num in order:
        counts[num] = counts.get(num, 0) + 1
        if counts[num] <= max_e:
            result.append(num)
    return result