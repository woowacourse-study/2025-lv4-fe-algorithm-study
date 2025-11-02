function solution(jobs) {
    const restJobs = [...jobs]
        .map((job, i) => ({ time: job[1], start: job[0], index: i }))
        .sort((a, b) => a.start - b.start);
    
    const queue = [];
    const takenTimes = [];
    let curTime = 0;
    
    while(restJobs.length || queue.length) {
        while (restJobs.length && restJobs[0].start <= curTime) {
            queue.push(restJobs.shift());
        }
        
        if(!queue.length) {
            curTime = restJobs[0].start;
            continue;
        }
        
        queue.sort((a, b) => (a.time - b.time) || (a.start - b.start) || (a.index - b.index))
        const curJob = queue.shift();
        
        const curTakenTime = curJob.time + (curTime - curJob.start)
        takenTimes.push(curTakenTime);
        curTime += curJob.time;
    }
    
    return Math.floor(takenTimes.reduce((acc, cur) => acc + cur, 0) / jobs.length);
}