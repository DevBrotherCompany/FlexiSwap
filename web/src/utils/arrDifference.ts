export function arrDifference<T>(arr1: T[], arr2: T[], key: keyof T) {
  return arr1.filter(
    (item1) => !arr2.some((item2) => item1[key] === item2[key])
  );
}
