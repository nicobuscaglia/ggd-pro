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
  const locale = "en-us"
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


export { getChatDateTime };
