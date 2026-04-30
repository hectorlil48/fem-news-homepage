import "./ArticleCard.css";

type ArticleCardProps = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const ArticleCard = ({
  number,
  title,
  description,
  image,
}: ArticleCardProps) => {
  return (
    <article className="article">
      <img src={image} alt={title} className="article__image" />
      <div className="article__content">
        <span className="article__number">{number}</span>
        <h3 className="article__title">{title}</h3>
        <p className="article__description">{description}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
