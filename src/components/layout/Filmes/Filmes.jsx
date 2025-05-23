import Style from './Filmes.module.css';

function Filmes({ name_movie, director, release_date, gender_movie, age_range, main_actor, synopsis, imagem }) {
  return (
    <div className={Style.Filmes}>
      <h3 className={Style.title}>{name_movie}</h3>
      <img src={imagem} alt={name_movie} className={Style.image} />
      <div className={Style.info}>
        <div className={Style.infoItem}><strong>Diretor:</strong> {director}</div>
        <div className={Style.infoItem}><strong>Lançamento:</strong> {release_date}</div>
        <div className={Style.infoItem}><strong>Gênero:</strong> {gender_movie}</div>
        <div className={Style.infoItem}><strong>Classificação:</strong> {age_range}</div>
        <div className={Style.infoItem}><strong>Ator Principal:</strong> {main_actor}</div>
      </div>
      <h2 className={Style.synopsis}>{synopsis}</h2>
    </div>
  );
}

export default Filmes;