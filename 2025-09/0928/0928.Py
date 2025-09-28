def solution(arr):
    for i, n in enumerate(arr):
        if n >= 50 and n%2==0 : arr[i] = n/2
        elif n<50 and n%2 : arr[i] = n*2
    return arr