import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = ({ restaurants, title }) => {
  if (!restaurants.length) {
    return <h3>No Restaurants Yet</h3>;
  }
  

  return (
    <div>
      <h3>{title}</h3>
      {restaurants &&
        restaurants.map(restaurant => (
          <div key={restaurant._id} className=" mb-3">
            <p className="card-header bg-warning">
              <Link
                to={`/restaurant/${restaurant._id}`}
                style={{ fontWeight: 700, color: "black"}}
              >
                {restaurant.restaurantName}
              </Link>{' '}
            </p>
            <div className="card-body">          
              <h4>Restuarant Website</h4>
              <a
                href={restaurant.url}
              >{restaurant.url}
              </a>
              <h5>Address</h5>
              <h5>Phone number</h5>
              <h4>Restuarant Description</h4>
              <p>{restaurant.address}</p>
              <p>{restaurant.phone}</p>
              <p>{restaurant.url}</p>
              <p>{restaurant.description}</p>

              {/* <p className="mb-0">
                MenuItems: {restaurant.menuItemCount} || Click to{' '}
                {restaurant.menuItemCount ? 'see' : 'start'} the discussion!
              </p> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default RestaurantList;