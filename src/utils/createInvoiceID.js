const createInvoiceID = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomFirstCharacter = Math.floor(Math.random() * characters.length);
  const randomSecondCharacter = Math.floor(Math.random() * characters.length);

  const MIN = 1000;
  const MAX = 9999;
  const pieceNumbers = Math.floor(Math.random() * (MAX - MIN + 1) + MIN);

  return `#${characters.charAt(randomFirstCharacter)}${characters.charAt(
    randomSecondCharacter
  )}${pieceNumbers}`;
};

export default createInvoiceID;
