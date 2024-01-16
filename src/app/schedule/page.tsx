const Calendar = () => (
  <div className="flex items-center lg:items-start flex-col lg:flex-row gap-10 justify-between">
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h3 className="text-lg">Drop-ins are always welcome!</h3>
      <p>
        All classes with take place in the Ina Gittings Building, Room #4.
        <br />
        <i className="text-xs">
          Ina Gittings Building, 1737 E University Blvd{" "}
          <a
            className="text-blue-600 text-sm"
            href="https://maps.app.goo.gl/CYfYWYZ3rfwJBhB5A"
          >
            (map)
          </a>
        </i>
        <br/>
        <i className="text-xs font-bold underline">
          Note: Classes are open only to University of Arizona students and
          faculty at this time.
        </i>
      </p>
      <div className="bg-blue-100 shadow-2xl rounded-lg py-6 p-8 dark:text-black"><ul>
        <li>Single class: $10</li>
        <li>
          6-week series
          <ul className="ml-8">
            <li>Students: $30</li>
            <li>Faculty: $45</li>
          </ul>
        </li>
      </ul></div>
    </div>
    <div className="relative"><iframe
      className="rounded-sm h-[300px] lg:h-[500px] lg:w-[400px] z-10 relative"
      src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix&showTitle=0&showTabs=0&showTz=1&showCalendars=0&showPrint=0&showNav=0&mode=AGENDA&src=NjhmMzI5OTY3N2FhZmJiZGI2YTIyODY0MWViMThlZDc2ZmNlZWUzNjQ4NDg1ZThhNzczNzE5ODExN2ViZWM4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
    ></iframe><div className="absolute top-0 z-0 text-sm text-gray-700 italic dark:text-purple-100">Calendar is loading...</div></div>
  </div>
);

export default Calendar;
