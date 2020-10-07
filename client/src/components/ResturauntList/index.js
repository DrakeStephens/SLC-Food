import React from 'react';
import { Link } from 'react-router-dom';

const ResturauntList = ({ resturaunts, title }) => {
  if (!resturaunts.length) {
    return <h3>No Resturaunts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {resturaunts &&
        resturaunts.map(resturaunt => (
          <div key={resturaunt._id} className=" mb-3">
            <p className="card-header bg-warning">
              <Link
                to={`restaurant/${resturaunt._id}`}
                style={{ fontWeight: 700, color: "black"}}
              >
                {resturaunt.resturauntName}
              </Link>{' '}
            </p>
            <div className="card-body">          
              <h4>Restuarant Website</h4>
              <a
                href={resturaunt.url}
              >{resturaunt.url}
              </a>
              <h4>Restuarant Description</h4>
              <p>{resturaunt.description}</p>
              {/* <p className="mb-0">
                MenuItems: {resturaunt.menuItemCount} || Click to{' '}
                {resturaunt.menuItemCount ? 'see' : 'start'} the discussion!
              </p> */}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ResturauntList;