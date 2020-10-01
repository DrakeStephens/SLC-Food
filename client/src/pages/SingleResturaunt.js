//import Auth from '../utils/auth';
// import React from 'react';

// import MenuList from '../components/MenuList';
// import MenuForm from '../components/MenuForm';

//import { useParams } from 'react-router-dom';
//import { useQuery } from '@apollo/react-hooks';
//import { QUERY_RESTURAUNT } from '../utils/queries';


const SingleResturaunt = props => {
  //const { id: resturauntId } = useParams();

// const { loading, data } = useQuery(QUERY_RESTURAUNT, {
//   variables: { id: resturauntId }
// });

// const resturaunt = data?.resturaunt || {};

// if (loading) {
//   return <div>Loading...</div>;
// }

  return (
<div>
  <div className="card mb-3">
    {/* <p className="card-header">
      <span style={{ fontWeight: 700 }} className="text-light">
        {resturaunt.username}
      </span>{' '}
      resturaunt added on {resturaunt.createdAt}
    </p> */}
    <div className="card-body">
      {/* <a href={resturaunt.website}>
      <h4>Our Website</h4>
      </a> 
      <p>{resturaunt.description}</p>  */}
    </div>
  </div>
  {/* {resturaunt.MenuCount > 0 && <menuList menuItems={resturaunt.menuItems} />}
  {Auth.loggedIn() && <MenuForm resturauntId={resturaunt._id} />} */}
</div>
  );
};

export default SingleResturaunt;