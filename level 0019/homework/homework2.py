def count_positives_and_sum_negatives(list1, list2):
    combined = list1 + list2
    
    positive_count = sum(1 for x in combined if x > 0)
    negative_sum = sum(x for x in combined if x < 0)
    
    return positive_count, negative_sum