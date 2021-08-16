#
# Complete the 'compareTriplets' function below.
#
#Example
# alice = [1, 2, 3]
# bob = [3, 2, 1]
# For elements *0*, Bob is awarded a point because a[0] < b[0].
# For the equal elements a[1] and b[1], no points are earned.
# Finally, for elements 2, a[2] > b[2] so Alice receives a point.
# The return array is [1, 1] with Alice's score first and Bob's second.
#

def compareTriplets(a, b):
    a_score = 0
    b_score = 0
    for i in range(len(a)):
        if a[i] > b[i]:
            a_score += 1
        if b[i] > a[i]:
            b_score += 1
        if b[i] == a[i]:
            continue

    return [a_score, b_score]


print(compareTriplets([1,2,3], [3,2,1])) # => [1, 1]
