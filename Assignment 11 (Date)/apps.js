function formatCustomDate(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayName}, ${day} ${monthName} ${year}`;
}

// Example usage:
console.log(formatCustomDate(new Date())); // "Saturday, 9 August 2025"



function elapsedMinutes(timestamp1, timestamp2) {
    const date1 = new Date(timestamp1);
    const date2 = new Date(timestamp2);
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60));
}

// Example usage:
console.log(elapsedMinutes('2025-08-09T10:00:00', '2025-08-09T11:30:00')); // 90





function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    
    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    
    // Adjust for negative days/months
    if (days < 0) {
        months--;
        // Get days in previous month
        const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }
    
    if (months < 0) {
        years--;
        months += 12;
    }
    
    return { years, months, days };
}

// Example usage:
console.log(calculateAge('1990-05-15')); // { years: 35, months: 2, days: 25 }




function getFirstDayOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
}

// Example usage:
console.log(getFirstDayOfMonth()); // Returns Date object for 1st of current month




function getLastDayOfMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
}

// Example usage:
console.log(getLastDayOfMonth()); // 31, 30, 28, or 29






function countdownToDate(targetDate) {
    const now = new Date();
    const target = new Date(targetDate);
    const diffInMs = target - now;
    
    if (diffInMs <= 0) return "Time's up!";
    
    const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
    
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Example usage (New Year):
console.log(countdownToDate('2026-01-01')); // "144d 5h 23m 45s"






function timeDifference(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffInMs = Math.abs(d2 - d1);
    
    const hours = Math.floor(diffInMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours} hours ${minutes} minutes`;
}

// Example usage:
console.log(timeDifference('2025-08-09T10:00:00', '2025-08-09T13:25:00')); // "3 hours 25 minutes"





function isWeekendOrWeekday(dateString) {
    const date = new Date(dateString);
    const day = date.getDay();
    return (day === 0 || day === 6) ? "Weekend" : "Weekday";
}

// Example usage:
console.log(isWeekendOrWeekday('2025-08-09')); // "Weekend" (Saturday)
console.log(isWeekendOrWeekday('2025-08-11')); // "Weekday" (Monday)





