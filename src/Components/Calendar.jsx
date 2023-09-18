import React, { useState } from "react";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const calendarDays = [1];

    // Здесь можно добавить логику для генерации дней календаря

    // Предположим, что calendarDays содержит список дат

    return calendarDays.map((date) => (
      <div
        key={date}
        onClick={() => handleDateClick(date)}
        className={`calendar-date ${selectedDate === date ? "selected" : ""}`}
      >
        {date}
      </div>
    ));
  };

  return(
    <div className="calendar">
      {renderCalendar()}
    </div>
  ); 
};

export default Calendar;