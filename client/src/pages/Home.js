import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_RESTURAUNTS } from '../utils/queries'
import ResturauntList from '../components/ResturauntList';
import Auth from '../utils/auth';
import ResturauntForm from '../components/ResturauntForm';

const Home = () => {
  const { loading, data } = useQuery(QUERY_RESTURAUNTS);  
  const resturaunts = data?.resturaunts || []
  console.log(resturaunts)
  const loggedIn = Auth.loggedIn();
  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <ResturauntForm />
          </div>
        )}
        
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ResturauntList resturaunts={resturaunts} title="Here are some of our resturaunts" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;