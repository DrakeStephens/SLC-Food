import React from 'react';

const MenuList = ({ menuItems }) => {
  return (
    <div className="mb-3">
        <div className="card-body">
            <ul className="list-unstyled m-5">
                {menuItems &&
                menuItems.map(menuItem => (
                <li className="border-bottom mb-3" key={menuItem._id}>
                    <h4>
                        {menuItem.item} {''}
                    </h4>
                    <p>
                        {menuItem.description} {''}
                    </p>
                    <h5>
                        {menuItem.price} {''}
                    </h5>
                    <button className="btn btn-warning mb-3">
                        Add To Cart
                    </button>
                </li>
                ))}
            </ul>
        </div>
    </div>
  );
};

export default MenuList;