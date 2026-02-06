import { useEffect, useState } from "react";

const ActivityTracker = () => {
    const [Count, setCount] = useState(0);
    const [Time, setTime] = useState(0);
    const [toggle, setToggle] = useState("Start Tracking");

    // Track Page Load (useEffect + []) Task 1
    useEffect(() => {
        console.log("Page loaded");
    }, []);

    useEffect(() => {
        // React to State Change Task 3
        console.log("Count updated")

        // Update Document Title Task 4
        document.title = `Count: ${Count}`;
    }, [Count]);

    // Timer with Cleanup Task 5
    useEffect(() => {
        const Interval = setInterval(() => {
            setTime((Time) => Time + 1);
        }, 1000);
        return () => {
            clearInterval(Interval);
        }
    }, []);

    // Conditional Effect Task 6
    useEffect(() => {   
        if (toggle === "Stop Tracking") {
            console.log("Tracking active")
        }
    }, [toggle]);

    return(
        <>
            {/* Button Click Counter (Event vs Effect) Task 2 */}
            <p>{Count}</p>
            <button onClick={() => setCount(Count + 1)}>Increase</button>
            {/* Timer with Cleanup Task 5 */}
            <p>Time : {Time}</p>
            {/* Conditional Effect Task 6 */}
            <p>{toggle}</p>
            <button onClick={() => setToggle(toggle === "Start Tracking" ? "Stop Tracking" : "Start Tracking")}>Toggle Message</button>
        </> 
    )
}

export default ActivityTracker;