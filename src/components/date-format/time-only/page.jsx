export function FormatTimeOnly(dateString) {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true // Use 12-hour format (e.g., AM/PM)
    };
    const date = new Date(dateString);
    const formattedTime = date.toLocaleTimeString("en-US", options);
  
    return formattedTime;
  }
  