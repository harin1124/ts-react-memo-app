/**
 * 클래스 이름 배열을 받아서 공백으로 구분한 문자열 치환
 * @param param 클래스 이름 배열
 * @returns {string} 클래스를 공백으로 구분한 문자열
 * @example commonFunc.getClasses(["my-home", "my-desk"]);
 */
const getClasses = (param: string[]): string => {
  return param.join(" ");
}

export { getClasses };