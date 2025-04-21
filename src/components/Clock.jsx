useEffect(() => {
    if (!isPaused) {
        const id = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime) { 
                    const [hours, minutes, seconds] = prevTime
                        .split(":")
                        .map(Number);
                    const newSeconds = (seconds + 1) % 60;
                    const newMinutes =
                        (minutes + Math.floor((seconds + 1) / 60)) % 60;
                    const newHours =
                        (hours + Math.floor((minutes + 1) / 60)) % 24;
                    return `${String(newHours).padStart(2, "0")}:${String(
                        newMinutes
                    ).padStart(2, "0")}:${String(newSeconds).padStart(2, "0")}`;
                } else {
                    return "00:00:00";
                }
            });
        }, 1000);
        return () => clearInterval(id);
    }
}, [isPaused]);
