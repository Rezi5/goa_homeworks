def clean_list(li):
    int_count = 0
    other_count = 0

    for i in range(len(li)):
        if type(li[i]) == int:
            int_count += 1
        else:
            other_count += 1

    if other_count == 1:
        result = []
        for i in range(len(li)):
            if type(li[i]) == int:
                result.append(li[i])
        return result
    else:
        return li
print(clean_list([2,4,3,4,5,9,"r"]))