
const GiftGridItem = ({ title, urlImg }) => {

  return(
    <div className="card">
      <img alt={title} src={urlImg} />
      <p>{title}</p>
    </div>
  )
};

export { GiftGridItem };