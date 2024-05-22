export const isMatching = (item, query) => {
  return item?.toLowerCase().includes(query?.toString().toLowerCase());
};
