#!/bin/python3
import math
import os
import random
import re
import sys

# Given a square matrix, calculate the absolute difference between the sums of its diagonals.
# For example, the square matrix arr is shown below:
# [
#     [11, 2, 4],
#     [4, 5, 6],
#     [10, 8, -12]
# ]
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.

my_matrix = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]


def diagonal_difference(arr):
    left_right = 0
    right_left = 0

    for i in range(len(arr)):
        row = arr[i]
        reverse_row = arr[len(arr) - 1 - i]
        left_right += reverse_row[i]
        right_left += row[i]

    return abs(left_right - right_left)


print(diagonal_difference(my_matrix))  # expected output 15
