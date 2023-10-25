import React from 'react';
import ytpl from 'ytpl';

export default function LengthResults({url}) {
    console.log(typeof(url))
    ytpl(url)
        .then((res)=> console.log(res));
    async function fetchinfo()
    {
        try{
        const playlist = await ytpl(url);
        durations=playlist.items.map((video)=> video.duration.split(':').map((val)=>Number.parseInt(val)));
        calcDurations(durations);
        }catch(error)
        {
            console.log(`We ran into error ${error}`)
        }
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
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;
        console.log(`Total Duration: ${hours} hours, ${minutes} minutes, ${Math.round(seconds)} seconds`);   
    }
    fetchinfo()
  return (
    <div></div>
  )
}
