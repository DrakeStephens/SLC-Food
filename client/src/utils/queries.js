import gql from 'graphql-tag';

export const QUERY_RESTURAUNTS = gql`
  query resturaunts($username: String) {
    resturaunts(username: $username) {
      _id
      username
      resturauntName
      url
      description
    }
  }
`;

export const QUERY_RESTURAUNT = gql`
  query resturaunt($id: ID!) {
    resturaunt(_id: $id) {
      _id
      resturauntName
      url
      description
      username
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