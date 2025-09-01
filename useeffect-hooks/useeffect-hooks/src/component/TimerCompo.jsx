
import React , {useState, useEffect} from 'react';
function TimeCompo() {
    const [second, setSecond] = useState(0);
    useEffect(() =>{
        const intervalID = setInterval(() =>{
            console.log("setInterval executed");
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);
        return () =>{
            console.log("time to Stop Buddy");
            clearInterval(intervalID);
        };
    }, []);


    return(
        <div>
            <h3>Seconds: {second}</h3>
        </div>
    )

}
export default TimeCompo;