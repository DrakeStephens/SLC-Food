import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_RESTURAUNT = gql`
  mutation addResturaunt($resturauntName: String!, $description: String!, $url: String!) {
    addResturaunt(resturauntName: $resturauntName, description: $description, url: $url) {
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

export const ADD_MENU_ITEM = gql`
  mutation addMenuItem($thoughtId: ID!, $reactionBody: String!) {
    addMenuItem(thoughtId: $thoughtId, reactionBody: $reactionBody) {
      _id
      menuItemCount
      menuItems {
        _id
        description
        price
        username
      }
    }
  }
`;