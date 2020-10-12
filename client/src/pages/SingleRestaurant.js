import Auth from '../utils/auth';
import React from 'react';

import MenuList from '../components/MenuList';

import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESTAURANT } from '../utils/queries';



const SingleRestaurant = props => {
  const { id: restaurantId } = useParams();

  const { loading, data } = useQuery(QUERY_RESTAURANT, {
    variables: { id: restaurantId }
  });
  
  const restaurant = data?.restaurant || {};
  
  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <div className="mb-3">
        <h2 className="card-header">
          <span style={{ fontWeight: 700, color: "black" }}>
            {restaurant.restaurantName}
          </span>{' '}
        </h2>
        <div className="card-body">
          <a href={restaurant.url}>
            <h4>Our Website</h4>
          </a> 
          <h4>Restaurant Description</h4>
          <p>{restaurant.description}</p> 
        </div>
      </div>
      {/* {Auth.loggedIn() && <MenuForm restaurantId={restaurant._id} />} */}
      <div>
        <div className="card-header">
        <h3>Our Menu</h3>
        {Auth.loggedIn() && <Link to={`/menuForm/${restaurant._id}`}>
          <button className="btn btn-warning">Add Menu</button>
        </Link>}
        </div>
        <div className="cardBody">
        <MenuList menuItems={restaurant.menuItems} />
        </div>
      </div>
    </div>

  );
};

export default SingleRestaurant;