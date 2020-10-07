//import Auth from '../utils/auth';
// import React from 'react';

// import MenuList from '../components/MenuList';
// import MenuForm from '../components/MenuForm';

//import { useParams } from 'react-router-dom';
//import { useQuery } from '@apollo/react-hooks';
//import { QUERY_RESTAURANT } from '../utils/queries';


const SingleRestaurant = props => {
  //const { id: restaurantId } = useParams();

// const { loading, data } = useQuery(QUERY_RESTAURANT, {
//   variables: { id: restaurantId }
// });

// const restaurant = data?.restaurant || {};

// if (loading) {
//   return <div>Loading...</div>;
// }

  return (
<div>
  <div className="card mb-3">
    {/* <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {restaurant.username}
      </span>{' '}
      restaurant added on {restaurant.createdAt}
    </p> */}
    <div className="card-body">
      {/* <a href={restaurant.url}>
      <h4>Our Website</h4>
      </a> 
      <p>{restaurant.description}</p>  */}
    </div>
  </div>
  {/* {restaurant.menuItemCount > 0 && <menuList menuItems={restaurant.menuItems} />}
  {Auth.loggedIn() && <MenuForm restaurantId={restaurant._id} />} */}
</div>
  );
};

export default SingleRestaurant;