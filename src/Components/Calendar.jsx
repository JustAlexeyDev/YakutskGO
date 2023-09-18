import React, { useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";


const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const navigate = useNavigate();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    navigate(`/events/${date}`);
  };

  const renderCalendar = () => {
    const startDate = moment().startOf("month");
    const endDate = moment().endOf("month");
    const days = [];
    let currentDate = startDate;

    while (currentDate.isSameOrBefore(endDate)) {
      days.push(currentDate.clone());
      currentDate.add(1, "day");
    }

    return days.map((date) => (
      <div
        key={date.format("YYYY-MM-DD")}
        onClick={() => handleDateClick(date.format("YYYY-MM-DD"))}
        className={`calendar-date ${selectedDate === date.format("YYYY-MM-DD") ? "selected" : ""}`}
      >
        {date.format("D")}
      </div>
    ));
  };

  return (
    <div className="Calendar-Container">
      <div className="calendar">
        {renderCalendar()}
      </div>        
    </div>

  );

};

export default Calendar;