const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ordinal = (d) => {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const getFormattedDateTimeString = (dateString, monthFormat, enabledTime) => {
  const locale = 'en-us';
  if (!dateString || dateString.length < 10) {
    return "";
  }
  try {
    const date = new Date(dateString);
    const time = new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(
      date
    );
    if (locale === "es-mx") {
      const options = {
        year: "numeric",
        month: monthFormat === "short" ? "short" : "long",
        day: "numeric",
        timeZone: "UTC",
      };
      const dateES = date.toLocaleDateString("es-mx", options);
      return `${dateES}${enabledTime ? ` ${time}` : ""}`;
    }
    const dateSection = dateString.split("T")[0];
    const dateParts = dateSection.split("-");
    const year = dateParts[0];
    const month =
      monthFormat === "short"
        ? monthNames[Number(dateParts[1]) - 1].substring(0, 3)
        : monthNames[Number(dateParts[1]) - 1];
    const day = dateParts[2];
    return `${month} ${day}${ordinal(Number(day))}, ${year}${
      enabledTime ? ` ${time}` : ""
    }`;
  } catch (err) {
    console.error("Error in date string conversion");
    return "";
  }
};

const isToday = (someDate) => {
  const today = new Date();
  return (
    someDate.getDate() === today.getDate() &&
    someDate.getMonth() === today.getMonth() &&
    someDate.getFullYear() === today.getFullYear()
  );
};

const isThisYear = (someDate) => {
  const today = new Date();
  return someDate.getFullYear() === today.getFullYear();
};

// Return the chat time shown in the UI
// If today -> show only the time part
// If this year -> show only the month, day and time
// If not in this year -> show year also
const getChatDateTime = (datetime) => {
  const locale = "en-us";
  const date = new Date(datetime);
  // For today, show only the time part
  if (isToday(date)) {
    return new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(date);
  }
  if (isThisYear(date)) {
    return new Intl.DateTimeFormat(locale, {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  }
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
};

export { getFormattedDateTimeString, getChatDateTime };
