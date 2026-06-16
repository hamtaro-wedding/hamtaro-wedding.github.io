import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="header">
        <div className="title">Wedding Invitation</div>
        <div className="sub-title">We're getting married</div>
      </div>

      <div className="center">
        <div className="names">
          <span>{GROOM_FULLNAME}</span>
          <span className="and">and</span>
          <span>{BRIDE_FULLNAME}</span>
        </div>
        <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
        <div className="info">{LOCATION}</div>
      </div>

      <div className="footer-text">Wedding invitation letter</div>
    </LazyDiv>
  )
}
