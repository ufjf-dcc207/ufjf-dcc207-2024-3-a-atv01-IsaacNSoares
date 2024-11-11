import "./Disciplina.css";

function Disciplina(props) {
  return (
    <div className="disciplina">
      <div>{props.codigo}</div>
      <div>{props.nome}</div>
    </div>
  );
}

export default Disciplina;
