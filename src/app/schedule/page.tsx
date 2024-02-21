const Calendar = () => (
  <div className="flex items-center lg:items-start flex-col lg:flex-row gap-10 justify-between">
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h3 className="text-lg">
        Register{" "}
        <a
          href="https://forms.gle/ep4iVtK6KXevkhdn8"
          className="text-blue-600"
          target="_blank"
        >
          here
        </a>
        , and drop-ins are always welcome!
      </h3>
      <p>
        All classes take place at the Historic Y<br />
        738 N 5th Ave, Tucson, AZ 85705{" "}
        <a
          className="text-blue-600 text-sm"
          target="_blank"
          href="https://maps.app.goo.gl/BneGkntffc32CU5N9"
        >
          (map)
        </a>
      </p>
      <div className="bg-blue-100 shadow-2xl rounded-lg py-6 p-8 dark:text-black">
        <ul>
          <li>Single class: $15</li>
          <li>
            5-week series
            <ul className="ml-8">
              <li>Students: $30</li>
              <li>General Public: $60</li>
            </ul>
          </li>
        </ul>
        <div className="mt-4 lg:px-24 text-xs italic text-gray-700 text-center">
          (financial aid and volunteer oportunities are available for anyone who
          would like to attend but cannot afford to)
        </div>
      </div>
      Turn left off fifth (heading south) for free parking (unmarked spots only):
      <img src="/free_parking.png" alt="free parking map" width={300}/>
    </div>
    <div className="relative">
      <iframe
        className="rounded-sm h-[300px] lg:h-[400px] lg:w-[400px] z-10 relative"
        src="https://calendar.google.com/calendar/embed?height=300&wkst=1&bgcolor=%23ffffff&ctz=America%2FPhoenix&showTitle=0&showTabs=0&showTz=1&showCalendars=0&showPrint=0&showNav=0&mode=AGENDA&src=NjhmMzI5OTY3N2FhZmJiZGI2YTIyODY0MWViMThlZDc2ZmNlZWUzNjQ4NDg1ZThhNzczNzE5ODExN2ViZWM4ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23F09300"
      ></iframe>
      <div className="absolute top-0 z-0 text-sm text-gray-700 italic dark:text-purple-100">
        Calendar is loading...
      </div>
    </div>
  </div>
);

export default Calendar;
