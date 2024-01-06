const Calendar = () => (
  <div className="flex items-center lg:items-start flex-col lg:flex-row gap-20">
    <div className="flex flex-col gap-4">
      <p>New series begin every six weeks, but drop-ins are always welcome!</p>
      <p>
        Each series we will have some continuity of themes but are always
        prepared to welcome new folks and get them up to speed.
      </p>
      <p>Prices:</p>
      <ul>
        <li>Single class: $10</li>
        <li>
          6-week series:
          <ul className="ml-8">
            <li>Students: $30</li>
            <li>Faculty: $45</li>
          </ul>
        </li>
      </ul>
      <i>
        note: Classes are open only to University of Arizona students and
        faculty at this time.
      </i>
    </div>
    <iframe
      src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix&showTitle=0&showTabs=0&showTz=1&showCalendars=0&showPrint=0&showNav=0&mode=AGENDA&src=NjhmMzI5OTY3N2FhZmJiZGI2YTIyODY0MWViMThlZDc2ZmNlZWUzNjQ4NDg1ZThhNzczNzE5ODExN2ViZWM4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
      width="500"
      height="300"
    ></iframe>
  </div>
);

export default Calendar;
