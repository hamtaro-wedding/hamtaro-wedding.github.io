import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { LazyDiv } from "../lazyDiv"

/**
 * 초대장의 메인 커버 섹션입니다.
 * 텍스트만으로 구성된 다크 네이비 + 골드 스타일.
 *
 * @returns {JSX.Element} 커버 섹션
 */
export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <div className="subtitle">Wedding Invitation</div>
      <div className="sub-desc">We're getting married</div>

      <div className="names">
        <span>{GROOM_FULLNAME}</span>
        <span className="and">and</span>
        <span>{BRIDE_FULLNAME}</span>
      </div>

      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
      <div className="info">{LOCATION}</div>

      <div className="footer-text">Wedding invitation letter</div>
    </LazyDiv>
  )
}
