import "./Disciplina.css";

function Disciplina({codigo, nome}) {
  return (
    <div className="disciplina">
      <div>{codigo}</div>
      <div>{nome}</div>
    </div>
  );
}

export default Disciplina;
