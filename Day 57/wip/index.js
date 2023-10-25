const ytpl = require('ytpl');
const url='https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ';
let durations=[];

async function fetchinfo()
{
    const playlist = await ytpl(url);
    durations=playlist.items.map((video)=> video.duration.split(':').map((val)=>Number.parseInt(val)));
    calcDurations(durations);
}

function calcDurations(duration)
{
    let totalSeconds = duration.reduce((acc, val) => {
        if (val.length === 3) {
            acc += val[0] * 3600 + val[1] * 60 + val[2];
        } else {
            acc += val[0] * 60 + val[1];
        }
        return acc;
    }, 0);
    const{hours,minutes,seconds} = convertSecond(totalSeconds);
    console.log(`Total Duration: ${hours} hours, ${minutes} minutes, ${Math.round(seconds)} seconds`);   
}

function convertSecond(totalSeconds)
{   
    let hours = Math.floor(totalSeconds / 3600);
    console.log(` days : ${totalSeconds/86400}`)
    console.log(` hours: ${(totalSeconds%86400)/3600}`)
    console.log(` mins : ${((totalSeconds%86400)%3600)/60}`)
    console.log(` secs : ${totalSeconds%60}`)
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;
    return {hours,minutes,seconds};
}

fetchinfo();
    