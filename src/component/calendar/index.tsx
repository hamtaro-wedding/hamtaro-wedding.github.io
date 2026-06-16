import {
  HOLIDAYS,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

// 해당 월의 첫 번째 날의 요일과 총 일수를 계산합니다. (월요일 시작 기준)
const firstDayOfWeek = (WEDDING_DATE.startOf("month").day() + 6) % 7
const daysInMonth = WEDDING_DATE.daysInMonth()

export const Calendar = () => {
  return (
    <LazyDiv className="card calendar">
      <h2 className="english">The Wedding Day</h2>
      <div className="break" />
      {WEDDING_DATE.format(WEDDING_DATE_FORMAT)}

      <div className="calendar-wrapper">
        <div className="head">
          <span>Mo</span>
        </div>
        <div className="head">
          <span>Tu</span>
        </div>
        <div className="head">
          <span>We</span>
        </div>
        <div className="head">
          <span>Th</span>
        </div>
        <div className="head">
          <span>Fr</span>
        </div>
        <div className="head saturday">
          <span>Sa</span>
        </div>
        <div className="head holiday">
          <span>Su</span>
        </div>

        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={i} />
        ))}

        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = i + 1
          const classes = []
          const isSunday = (i + firstDayOfWeek) % 7 === 6
          const isSaturday = (i + firstDayOfWeek) % 7 === 5

          if (isSunday || HOLIDAYS.includes(date)) {
            classes.push("holiday")
          }

          if (isSaturday) {
            classes.push("saturday")
          }

          const isWeddingDate = date === WEDDING_DATE.date()

          if (isWeddingDate) {
            classes.push("wedding-date")
          }

          return (
            <div
              key={i}
              className={classes.length ? classes.join(" ") : undefined}
            >
              <span>{date}</span>
              {isWeddingDate && <div className="heart" />}
            </div>
          )
        })}
      </div>
    </LazyDiv>
  )
}
