import { Text, TextProps } from "@hope-ui/core";

const meetingTime = '18:30:00';
const meetingTimeZoneOffset = '-05:00';

type Alteration = [Number, Number, Number, null | string];
const alteredMeetings: Alteration[] = [
  // examples:
  // this would cancel the first meeting of July, 2023
  // [2023, 6, 0, null],

  // this would reschedule the last meeting of December, 2023 for 4:30pm EST
  // [2023, 11, 1, "16:30"],
];

const nextMonth = (d: Date) => {
  const thisMonth = new Date();
  thisMonth.setFullYear(d.getFullYear());
  thisMonth.setMonth(d.getMonth());
  while (thisMonth.getDate() !== 1) {
    thisMonth.setDate(thisMonth.getDate() + 1);
  }
  return thisMonth;
}

const meetingDate = (d: Date, alteration: Alteration[]) => {
  if (alteration.length === 0) {
    return `${d.toISOString().split('T')[0]}T${meetingTime}${meetingTimeZoneOffset}`;
  }

  const update = alteration[0].slice(-1)[0];
  if (update === null) {
    return update;
  }

  return `${d.toISOString().split('T')[0]}T${update}${meetingTimeZoneOffset}`;
}

export function* iterMeetings(startingFrom: Date): Generator<string, string> {
  let thisMonth = new Date();
  let firstOfMonth = new Date();
  thisMonth.setMonth(startingFrom.getMonth());
  firstOfMonth.setMonth(startingFrom.getMonth());
  firstOfMonth.setDate(1);
  const thursday = 4;
  let firstDay = 0;
  let firstThursday = 0;
  let thirdThursday = 0;
  while (true) {
    firstDay = firstOfMonth.getDay();
    firstThursday = 1 + (thursday - firstDay + 7) % 7;
    thirdThursday = firstThursday + 14;
    debugger;
    const alterations = alteredMeetings.filter(m => {
      return m[0] === thisMonth.getFullYear() && m[1] === thisMonth.getMonth();
    });

    if (thisMonth.getDate() < firstThursday) {
      thisMonth.setDate(firstThursday);
      const alteration = alterations.filter(m => m[2] === 0);
      const meeting = meetingDate(thisMonth, alteration);
      if (meeting !== null) {
        yield meeting;
      }
    }

    if (thisMonth.getDate() < thirdThursday) {
      thisMonth.setDate(thirdThursday);
      const alteration = alterations.filter(m => m[2] === 1);
      const meeting = meetingDate(thisMonth, alteration);
      if (meeting !== null) {
        yield meeting;
      }
    }

    thisMonth = nextMonth(thisMonth);
    thisMonth.setDate(1);
    firstOfMonth = nextMonth(firstOfMonth);
  }
}

export default function NextMeeting(props: TextProps) {
  const today = new Date();
  const nextMeeting = new Date(iterMeetings(today).next().value);
  
  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][nextMeeting.getDay()];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][nextMeeting.getMonth()];

  const suffix = {
    11: "th",
    12: "th",
    13: "th",
  }[nextMeeting.getDate()] || {
    1: "st",
    2: "nd",
    3: "rd",
  }[nextMeeting.getDate() % 10] || 'th';

  const time = nextMeeting.toTimeString().split(' ');
  const timeParts = time[0].split(':');
  let hour = Number(timeParts[0]);
  let minute = timeParts[1];
  let amPm = 'am';
  if (hour > 12) {
    hour -= 12;
    amPm = 'pm';
  }

  const meetingTime = [`${hour}:${minute}${amPm}`, ...time.slice(2)].join(' ');
  return (
    <Text {...props}>{`${day}, ${month} ${nextMeeting.getDate()}${suffix}, ${nextMeeting.getFullYear()} at ${meetingTime}`}</Text>
  )
}
