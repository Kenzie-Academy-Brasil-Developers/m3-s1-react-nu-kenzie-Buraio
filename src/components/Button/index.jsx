import "./button.css";

export const Button = ({ setFilter }) => {
  const filterEntries = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <div id="listHeader">
      <span>Resumo financeiro</span>
      <div id="filterDiv">
        <button
          className="filter smallBtn btnHover"
          value="true"
          onClick={filterEntries}
        >
          Todos
        </button>
        <button
          className="filter smallBtn btnHover"
          value="entrada"
          onClick={filterEntries}
        >
          Entradas
        </button>
        <button
          className="filter smallBtn btnHover"
          value="despesa"
          onClick={filterEntries}
        >
          Despesas
        </button>
      </div>
    </div>
  );
};
