import { Cover } from "./component/cover"
import { Location } from "./component/location"
import "./App.scss"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Information } from "./component/information"
import { LazyDiv } from "./component/lazyDiv"

function App() {
  return (
    <div className="background">
      <div className="card-view">
        <LazyDiv className="card-group">
          <Cover />
          <Invitation />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Calendar />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Location />
        </LazyDiv>

        <LazyDiv className="card-group">
          <Information />
        </LazyDiv>
      </div>
    </div>
  )
}

export default App
