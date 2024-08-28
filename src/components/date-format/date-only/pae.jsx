export function FormatDateOnly(dateString) {
    const options = {
      month: "long",
      day: "2-digit",
      year: "numeric"
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("en-US", options);
  
    return formattedDate;
  }
  