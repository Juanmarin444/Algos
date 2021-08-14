#!/bin/python3
import math
import os
import random
import re
import sys


# Complete the 'sockMerchant' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER_ARRAY ar
# array = [10,2,3,2,10,1,2]
# Each number in array is a sock color, two numbers create one pair.
# find the amount of pairs in array
# Answer = 2 pairs

def sockMerchant(n, ar):
    ar.sort()
    pairs = 0

    i = 1
    while i < len(ar):
        j = i - 1
        if ar[j] == ar[i]:
            pairs += 1
            i += 1
        i += 1


    return pairs


socks = [10, 20, 20, 10, 10, 30, 50, 10, 20]

print(sockMerchant(9, socks))
