import { useEffect, useState } from "react";

export function useTimeMusic(timeline: number){

    const [duration, setDuration] = useState('00:00');

    useEffect(() => {
        const sec = timeline;
    
        const min =
          Math.floor(sec / 60) < 10
            ? `0${Math.floor(sec / 60)}`
            : String(Math.floor(sec / 60));
    
        const secRemain =
          Math.floor(sec % 60) < 10
            ? `0${Math.floor(sec % 60)}`
            : String(Math.floor(sec % 60));

        
            const dur = `${min}:${secRemain}`

        setDuration(dur)
    
      }, [timeline]);


    return duration;
}