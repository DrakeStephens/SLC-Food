import Auth from '../utils/auth';
import React from 'react';

// import MenuList from '../components/MenuList';
import MenuForm from '../components/MenuForm';

import { useParams } from 'react-router-dom';
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
      {/* {restaurant.menuItemCount > 0 && <menuList menuItems={restaurant.menuItems} />}
      {Auth.loggedIn() && <MenuForm restaurantId={restaurant._id} />} */}
      {Auth.loggedIn() && <MenuForm restaurantId={restaurant._id} />}
      <div>
        <h3 className="card-header">Our Menu</h3>
        <div className="cardBody">
          <ul className="list-unstyled m-5 border-bottom">
            <li>          
              <h4>Menu Item#1 SM</h4>
              <p>this is what is on menu item #1</p>
              <h5>$5.50(this is the price of menu item #1)</h5>
              <button type="radio" className="btn btn-warning mb-2">Add to cart</button>
            </li>
            <li>          
              <h4>Menu Item#1 M</h4>
              <p>this is what is on menu item #1</p>
              <h5>$6.50(this is the price of menu item #1)</h5>
              <button type="radio" className="btn btn-warning mb-2">Add to cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default SingleRestaurant;