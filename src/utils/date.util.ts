export const getTimeFormatted = (timestamp: number) => new Intl.DateTimeFormat("es", {
    dateStyle: "long",
    hour12: true,
}).format(new Date(timestamp))