/**
 * JWT 토큰을 복호화 하는 함수
 * @param {string} token jwt 원본 토큰
 * @returns 복호화된 토큰 객체
 */
export const jwtTokenParse = (token:string) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => 
    "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)
  ).join(""));
  return JSON.parse(jsonPayload);
}