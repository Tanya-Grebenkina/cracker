export const calculatePrice = (cornAmount, wheatAmount, quinoaAmount) => {
  return cornAmount * 1 + wheatAmount * 2 + quinoaAmount * 3;
};

export const calculateRemaining = (totalLimit, cornAmount, wheatAmount, quinoaAmount) => {
  return totalLimit - (cornAmount + wheatAmount + quinoaAmount);
}