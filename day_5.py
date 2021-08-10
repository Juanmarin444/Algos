import math

#       ['0  1  2  3  4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23  24']
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]


def binary_search(array, target):
    end = len(array) - 1
    start = 0
    while end >= start:
        guess = start + math.floor((end - start) / 2)
        # print(guess)
        if array[guess] == target:
            print("found at index", guess)
            return 1
        elif array[guess] < target:
            start = guess + 1
            continue
        elif array[guess] > target:
            end = guess - 1
            continue
    print("Not here")
    return -1

for num in primes:
    print(binary_search(primes, num))
