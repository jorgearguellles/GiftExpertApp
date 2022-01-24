import PropTypes from 'prop-types';

const GiftGridItem = ({ title, urlImg }) => {

  return(
    <div className="card animate__animated animate__zoomIn">
      <img alt={title} src={urlImg} />
      <p>{title}</p>
    </div>
  )
};

export { GiftGridItem };

GiftGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  urlImg: PropTypes.string.isRequired,
}

GiftGridItem.defaultProps = {
  title: "Title here",
  urlImg: "https://www.google.com",
}

