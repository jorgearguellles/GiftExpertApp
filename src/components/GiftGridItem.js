
const GiftGridItem = ({ title, urlImg }) => {

  return(
    <div className="card animate__animated animate__zoomIn">
      <img alt={title} src={urlImg} />
      <p>{title}</p>
    </div>
  )
};

export { GiftGridItem };