import dayjs from "dayjs";

export const handleDayCount = (dayCount) => {
    try {
        const date = dayjs('2000-01-01');
        console.log(date)
        const timeLeft = date.fromNow();
        return timeLeft
    } catch (error) {
        console.error(error);
    }
};
