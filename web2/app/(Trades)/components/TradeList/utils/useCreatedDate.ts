export const useCreatedDate = (createdAt: number) => {
  let creationDate = new Date();
  try {
    creationDate = new Date(createdAt);
  } catch (e) {
    console.error(e);
  }

  const getDays = (date_1: Date, date_2: Date) => {
    let difference = date_1.getTime() - date_2.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
  };

  return getDays(new Date(), creationDate);
};
