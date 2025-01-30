const timetable = [
    {
        day: "Monday",
        slots: [
            { time: "08:00 - 09:00", subject: "Math", room: "Room 101", teacher: "Mr. Smith" },
            { time: "09:00 - 10:00", subject: "Science", room: "Room 102", teacher: "Mrs. Johnson" },
            { time: "10:00 - 11:00", subject: "History", room: "Room 103", teacher: "Mr. Brown" },
            
        ]
    },
    {
        day: "Tuesday",
        slots: [
            { time: "08:00 - 09:00", subject: "English", room: "Room 104", teacher: "Ms. Davis" },
            { time: "09:00 - 10:00", subject: "Geography", room: "Room 105", teacher: "Mr. Wilson" },
            
        ]
    },
    
    {
        day: "Wednesday",
        slots: [
            { time: "10:00 - 12:00", subject: "Social Studies", room: "Room 134", teacher: "Ms. Edith" },
            { time: "11:30 - 14:00", subject: "Chemistry", room: "Room 124", teacher: "Mr. Alex" },
            
        ]
    },
];

function generateTimetable() {
    const timetableContainer = document.getElementById('timetable');
    let html = '';

    timetable.forEach(day => {
        html += `<h2>${day.day}</h2>`;
        html += `<table>`;
        html += `<tr><th>Time</th><th>Subject</th><th>Room</th><th>Teacher</th></tr>`;
        
        day.slots.forEach(slot => {
            html += `<tr>`;
            html += `<td>${slot.time}</td>`;
            html += `<td>${slot.subject}</td>`;
            html += `<td>${slot.room}</td>`;
            html += `<td>${slot.teacher}</td>`;
            html += `</tr>`;
        });

        html += `</table>`;
    });

    timetableContainer.innerHTML = html;
}

// Generate the timetable when the page loads
window.onload = generateTimetable;