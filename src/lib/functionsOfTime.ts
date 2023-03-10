const subMinutes = (...values:string[]) =>{
    /* Subtraction of time */
    const seconds = values
        .map(e => Number(e.split(":").reverse()[0]))
        .reduce((a:number, b:number) => a - b);
    let minutes = values
        .map(e => Number(e.split(":").reverse()[1]))
        .reduce((a:number, b:number) => a - b);
    let hours = values
        .map(e =>
            e.split(":").reverse()[2] ? Number(e.split(":").reverse[2]) : 0)
        .reduce((a:number, b:number) => a - b);
    minutes *= 60;
    hours *= 3600;
    const result = new Date((hours + minutes + seconds) * 1000)
        .toISOString()
        .substr(11, 8);
    return result.split(":").reverse()[2] === "00" ? result.slice(3) : result;
}

const timeStringToFloat = (time:string) =>{
    const hoursMinutes = time.split(':');
    const hours = parseInt(hoursMinutes[0], 10);
    const minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
    return hours + minutes / 60;
}
export { subMinutes, timeStringToFloat }