export const getRandomItem = () => {
  const possibleReducedItemList = [
    {
      name: "TV",
      price: 12000,
    },
    {
      name: "Laptop",
      price: 20000,
    },
    {
      name: "Mouse",
      price: 150,
    },
    {
      name: "Keyboard",
      price: 270,
    },
    {
      name: "Speakers",
      price: 1399.99,
    },
  ];

  const generateRandomInteger = (max) => Math.floor(Math.random() * max);

  return possibleReducedItemList[
    generateRandomInteger(possibleReducedItemList.length)
  ];
};
