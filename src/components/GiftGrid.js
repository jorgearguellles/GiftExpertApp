import { useFetchGifts } from "../hooks/useFetchGifts";
import { GiftGridItem } from "./GiftGridItem";
import PropTypes from 'prop-types';

const GiftGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifts(category);

  return(
    <>
      <h4>{category}</h4>

      {loading && <p>Loading...</p>}
      
      <div className="card-grid">
        {
          images.map( img => ( <GiftGridItem key={img.id} {...img} />) )
        }
      </div> 
    </>
  )
};

export { GiftGrid };

GiftGrid.propTypes = {
  category: PropTypes.string.isRequired
}