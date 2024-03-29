import "./card.css";
import trashIcon from "../../assets/trash.svg";

const Card = ({
  setCards,
  setTotalValue,
  setLength,
  description,
  value,
  type,
}) => {
  const removeEntry = (cardDesc) => {
    setCards((oldCards) => {
      const currentCards = oldCards.filter(
        (card) => card.description !== cardDesc
      );
      return [...currentCards];
    });

    setTotalValue((oldValue) => oldValue - value);
    setLength((oldLength) => oldLength - 1);
  };

  const typeVerify = type === "entrada";
  return (
    <li className="entryCard">
      {typeVerify ? (
        <div className="typeDiv greenDiv"></div>
      ) : (
        <div className="typeDiv grayDiv"></div>
      )}

      <div className="cardInfo">
        <div className="leftDiv">
          <h2 className="entryTitle">{description}</h2>
          {typeVerify ? (
            <span className="entryType">Entrada</span>
          ) : (
            <span className="entryType">Despesa</span>
          )}
        </div>
          <div className="rightDiv">
            <span className="entryValue">R$ {value}</span>
            <button
              className="removeEntryBtn"
              onClick={() => removeEntry(description)}
            >
              <img src={trashIcon} alt="" />
            </button>
          </div>
      </div>
    </li>
  );
};

export default Card;
