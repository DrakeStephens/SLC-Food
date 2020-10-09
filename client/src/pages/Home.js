import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESTAURANTS } from '../utils/queries'
import RestaurantList from '../components/RestaurantList';
import Auth from '../utils/auth';
import RestaurantForm from '../components/RestaurantForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RESTAURANTS);  
  const restaurants = data?.restaurants || []
  console.log(restaurants)
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <RestaurantForm />
          </div>
        )}
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RestaurantList restaurants={restaurants} title="Here are some of our restaurants" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;