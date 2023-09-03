export const groupBy = (items: JSX.Element[], groupSize: number) => {
  const HeroItemsGroup: JSX.Element[][] = [];
  for (let i = 0; i < items.length; i += groupSize)
    HeroItemsGroup.push(items.slice(i, i + 3));

  return HeroItemsGroup;
};
