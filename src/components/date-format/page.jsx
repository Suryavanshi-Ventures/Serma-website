export function formatDate(dateString) {
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}