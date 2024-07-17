export function formatDate(dateString) {
    const options = { 
        month: 'long', 
        day: '2-digit', 
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true // Use 12-hour format (e.g., AM/PM)
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);
    
    const formattedTime = date.toLocaleTimeString('en-US', options);
    return `${formattedDate} `;
}
