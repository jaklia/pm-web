import { useEffect, useState } from "react"

export const ClockUsingHooks = () => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })
    return (
        <div className="clock" >
            <h1>Hello! This is a function component clock.</h1>
            <h2> It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}
