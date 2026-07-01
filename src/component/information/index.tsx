import { useState } from "react"
import { BRIDE_INFO, GROOM_INFO } from "../../const"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"

/**
 * 아코디언 계좌번호 컴포넌트
 */
const AccountAccordion = ({
  title,
  items,
}: {
  title: string
  items: { relation: string; name: string; account: string }[]
}) => {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [toast, setToast] = useState("")

  const toggle = () => {
    if (open) {
      setOpen(false)
      setTimeout(() => setVisible(false), 400)
    } else {
      setVisible(true)
      requestAnimationFrame(() => setOpen(true))
    }
  }

  const copyAccount = async (account: string, name: string) => {
    const numberOnly = account.replace(/[^0-9]/g, "")
    try {
      await navigator.clipboard.writeText(numberOnly)
      setToast(`${title.replace(" 계좌번호", "")} ${name}님의 계좌번호가 복사되었습니다`)
      setTimeout(() => setToast(""), 2000)
    } catch {
      setToast("복사에 실패했습니다")
      setTimeout(() => setToast(""), 2000)
    }
  }

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={toggle}>
        <span>{title}</span>
        <span className={`arrow ${open ? "open" : ""}`}>∨</span>
      </button>
      {visible && (
        <div className={`accordion-body ${open ? "opening" : "closing"}`}>
          {items
            .filter(({ account }) => !!account)
            .map(({ relation, name, account }) => (
              <div className="account-item" key={relation}>
                <div className="account-detail">
                  <div className="account-number">{account}</div>
                  <div className="account-holder">예금주 : {name}</div>
                </div>
                <Button
                  className="copy-button"
                  onClick={() => copyAccount(account, name)}
                >
                  복사하기
                </Button>
              </div>
            ))}
        </div>
      )}
      {toast && <div className="toast-message">{toast}</div>}
    </div>
  )
}

export const Information = () => {
  return (
    <>
      <LazyDiv className="card information">
        <h2 className="english">Information</h2>
        <div className="info-card">
          <div className="label">식사 안내</div>
          <div className="content">
            식사시간: 12시 30분 ~ 14시 30분
            <br />
            장소: 지하 1층 연회장
          </div>
        </div>
      </LazyDiv>

      <LazyDiv className="card information">
        <div className="info-card">
          <div className="label">마음 전하기</div>
          <div className="content">
            함께하지 못하셔도 마음만으로 감사합니다.
            <br />
            축하를 전하고 싶으신 분들을 위해 안내드립니다.
          </div>

          <div className="break" />

          <AccountAccordion
            title="신랑측 계좌번호"
            items={GROOM_INFO}
          />
          <AccountAccordion
            title="신부측 계좌번호"
            items={BRIDE_INFO}
          />
        </div>
      </LazyDiv>

      <LazyDiv className="card information">
        <div className="info-card">
          <div className="label">화환 안내</div>
          <div className="content">
            축하 화환은 정중히 사양합니다.
            <br />
            대신 '사랑의 쌀'로 나눔에 동참하실 수 있습니다.
            <br />
            (신청: 천호동성당 사무실 02-470-5821)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
