const formatDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12; // Convert to 12-hour format
  
    return `${twelveHourFormat < 10 ? '0' + twelveHourFormat : twelveHourFormat}:${minutes < 10 ? '0' + minutes : minutes} ${amPm}`;
  };

export default formatDate