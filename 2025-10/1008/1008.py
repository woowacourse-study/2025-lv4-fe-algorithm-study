import math

def solution(fees, records):
    answer = []
    
    basicTime, basicFee, unitTime, unitFee = fees[0], fees[1], fees[2], fees[3]
    enterTime = {}
    parkingTime = {}
    
    for record in records:
        time, number, status = record.split()
        
        if status == 'IN':
            enterTime[number] = time
        else:
            exit = list(map(int, time.split(':')))
            exitT = exit[0] * 60 + exit[1]
            enter = list(map(int, enterTime[number].split(':')))
            enterT = enter[0] * 60 + enter[1]
            result = exitT - enterT
            
            if number in parkingTime.keys():
                parkingTime[number] += result
            else:
                parkingTime[number] = result
                
            del enterTime[number]
            
            
    if enterTime:
        for car in enterTime.keys():
            enter = list(map(int, enterTime[car].split(':')))
            enterT = enter[0] * 60 + enter[1]
            result = 1439 - enterT
                        
            if car in parkingTime.keys():
                parkingTime[car] += result
            else:
                parkingTime[car] = result
    
    parkingTime = dict(sorted(parkingTime.items()))
        
    for p in parkingTime.keys():
        if parkingTime[p] <= basicTime:
            answer.append(basicFee)
        else:
            fee = basicFee + (math.ceil((parkingTime[p] - basicTime) / unitTime) * unitFee)
            answer.append(fee)
    
    return answer