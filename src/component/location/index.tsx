import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"
import mapImage from "../../images/map.png"

/**
 * 오시는 길 정보를 표시하는 컴포넌트입니다.
 *
 * @returns {JSX.Element} 오시는 길 섹션
 */
export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <img src={mapImage} alt="약도" className="map-image" />
      </LazyDiv>

      <LazyDiv className="card location">
        {/* 대중교통 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 5호선 <b>천호역 2번출구</b> 도보 5분
            <br />
            지하철 8호선 <b>천호역 2번출구</b> 도보 5분
          </div>
        </div>

        {/* 자가용 안내 */}
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버 지도, 카카오 내비, 티맵 등
            <br />
            <b>천주교천호동성당</b> 검색
            <br />
            서울 강동구 구천면로 236-1
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
