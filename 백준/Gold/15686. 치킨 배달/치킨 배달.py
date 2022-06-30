import sys
from itertools import combinations
input = sys.stdin.readline
n,m = map(int,input().split())
city = [list(map(int,input().split())) for i in range(n)]
chick = []
house = []
def dist(h,c):
    return abs(h[0] - c[0]) + abs(h[1] - c[1])
for i in range(n):
    for j in range(n):
        if city[i][j] == 1 :
            house.append([i,j])
        elif city[i][j] == 2 :
            chick.append([i,j])
min_ = 9999
for i in combinations(chick,m):
    house_min = 0
    for j in house:
        min_chick = 9999
        for k in i:
            if min_chick > dist(j,k):
                min_chick = dist(j,k)
        house_min += min_chick
    if min_ > house_min:
        min_ = house_min
print(min_)
