/**
 * 백엔드 서버 URL (참석 의사 전달 등에 사용)
 * .env 파일의 VITE_SERVER_URL에서 가져옵니다.
 */
export const SERVER_URL = import.meta.env.VITE_SERVER_URL

/**
 * 정적 페이지 모드 여부
 * true일 경우 서버 연동 기능이 비활성화됩니다.
 */
export const STATIC_ONLY = import.meta.env.VITE_STATIC_ONLY === "true"
