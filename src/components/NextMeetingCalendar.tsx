import { createSignal, For } from "solid-js";
import { Box, Heading, HStack, SimpleGrid, Spacer, Text } from "@hope-ui/core";

import { MeetingDay, nextMonth, iterMeetings } from "~/components/NextMeeting.tsx";

const monthNumbers = (month: Date) => {
  const thisMonth = new Date(month.getFullYear(), month.getMonth(), 1);
  while (thisMonth.getDay() !== 0) {
    thisMonth.setDate(thisMonth.getDate() - 1);
  }

  const days = [];
  while (days.length < (5 * 7)) {
    days.push(new Date(thisMonth.getFullYear(), thisMonth.getMonth(), thisMonth.getDate()));
    thisMonth.setDate(thisMonth.getDate() + 1);
  }
  return days;
}

const isMeetingDay = (d: Date) => {
  const nextMeeting = iterMeetings(d).next().value;
  const today = new Date();
  if (
    nextMeeting.date > new Date(today.getFullYear(), today.getMonth(), today.getDate()) &&
    d.getFullYear() === nextMeeting.date.getFullYear() &&
    d.getMonth() === nextMeeting.date.getMonth() &&
    d.getDate() === nextMeeting.date.getDate()
  ) {
    return nextMeeting;
  }
  return false;
};


const styleIsMeetingDay = (meetingDay: MeetingDay, props: { day: Date, forMonth: Date }) => {
  const outsideMonth = props.day.getMonth() !== props.forMonth.getMonth();
  if (!meetingDay) {
    return { bg: outsideMonth ? "warning.800" : undefined, _dark: { borderColor: "neutral.200" }}
  }

  if (!meetingDay.isScheduled()) {
    return {
      color: "danger.600", bg: "danger.100",
      _dark: {
        color: "danger.100", bg: "danger.800", borderColor: "neutral.200"
      }
    }
  }

  return {
    color: "success.600", bg: "success.200",
    _dark: {
      color: "success.200", bg: "success.800", borderColor: "neutral.200"
    }
  }
};

const DayBox = (props: { day: Date, forMonth: Date }) => {
  const meetingDay = isMeetingDay(props.day);

  return (
    <Box
      { ...styleIsMeetingDay(meetingDay, props) }
      h={[14, 24]}
      px={2}
      py={2}
      align="right"
      border="1px solid black"
      cursor="default"
    >
      <Text>{props.day.getDate()}</Text>
    </Box>
  )
};

const Calendar = (props: { forMonth: Date }) => {
  return (
      <SimpleGrid border="1px solid black" _dark={{ borderColor: "neutral.200" }} my={8} columns={7}>
        <For each={["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]}>
          { day =>
            <Box bg="warning.600" _dark={{ bg: "warning.900" }} cursor="default">
              <Text ml={1} py={4} align="center" size="xs" fontWeight="bold">{day}</Text>
            </Box>
          }
        </For>
        <For each={monthNumbers(props.forMonth)}>
          {day => <DayBox forMonth={props.forMonth} day={day} />}
        </For>
      </SimpleGrid>
  );
};

const previousMonth = (d: Date) => {
  return new Date(d.getFullYear(), d.getMonth(), 0);
};

export default function NextMeetingCalendar() {
  const [getCalendarDate, setCalendarDate] = createSignal(new Date());

  return (
    <Box my={12} mx={4}>
      <Box>
        <HStack>
          <Heading onClick={() => { setCalendarDate(previousMonth(getCalendarDate())) }} w="60px" cursor="grab" px={10} size="4xl">{'<'}</Heading>
          <Spacer />
          <Heading size="2xl">{`${getCalendarDate().getMonth() + 13 % 12} / ${getCalendarDate().getFullYear()}`}</Heading>
          <Spacer />
          <Heading onClick={() => { setCalendarDate(nextMonth(getCalendarDate())) }} w="60px" cursor="grab" px={10} size="4xl">{'>'}</Heading>
        </HStack>
        <Calendar forMonth={getCalendarDate()} />
      </Box>
    </Box>
  );
}
