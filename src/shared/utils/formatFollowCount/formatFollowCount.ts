export const formatFollowCount = (count: number): number | string => {
  if (count > 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  } else {
    return count;
  }
};
