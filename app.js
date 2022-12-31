
const minutesHandle = document.getElementById("minutes")
const secondsHandle = document.getElementById("seconds")
const hourHandle = document.getElementById("hour")

const setClock = () => {
    const curDate = new Date();
    const hour = curDate.getHours() / 12
    const seconds = curDate.getSeconds() / 60
    const minutes = (curDate.getMinutes() / 60)

    setRotation(secondsHandle, seconds)
    setRotation(minutesHandle, minutes)
    setRotation(hourHandle, hour)
}

const setRotation = (element, rotation) => {
    element.style.setProperty("--rotation", rotation * 360)
}

const day = new Date().getDate()
document.getElementById("day").textContent = day
setInterval(setClock, 1000)
setClock()
