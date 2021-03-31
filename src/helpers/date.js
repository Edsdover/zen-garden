// Formatting Date to specs.
export function convertDate(time) {
    const dateString = new Date(time);
    const timeOfDay = dateString.toString().split(' ').splice(4,1)[0].split(':').splice(0,2).join(':').toString();
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dateString.getMonth()];
    let suffix = 'AM';

    let formattedDateString = `${month} ${dateString.getDay()}, ${dateString.getFullYear()}, ${timeOfDay} ${suffix}`;

    if (timeOfDay.split(':')[0] > 12) {
        suffix = 'PM';
        const standardHour = `${timeOfDay.split(':').splice(0,1).toString() -12}:${timeOfDay.split(':').splice(1,1).toString()}`
        formattedDateString = `${month} ${dateString.getDay()}, ${dateString.getFullYear()}, ${standardHour} ${suffix}`;
    }
    return formattedDateString;
}
