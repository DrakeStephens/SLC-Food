import gql from 'graphql-tag';

export const QUERY_RESTURAUNTS = gql`
  query resturaunts($firstName: String) {
    resturaunts(firstName: $firstName) {
      _id
      username
      resturauntName
      url
      description
      menuItemCount
      menuItems {
        _id
        description
        price
      }
    }
  }
`;


export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      resturaunts {
        _id
        resturauntName
        url
        description
        menuItemCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      resturaunts {
        _id
        resturauntName
        url
        description
        menuItemCount
        menuItems {
          _id
          description
          price
        }
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;