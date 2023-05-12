//'LOGIN_USER' will execute 'loginUser' mutation set up using Apollo Server
//'ADD_USER' will execute 'addUser' mutation
//'SAVE_BOOK' will execute 'saveBook' mutation
//'REMOVE_BOOK' will execute the 'removeBook' mutation
import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
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
export const SAVE_BOOK = gql`
    mutation saveBook($authors: String, $description: String!, $bookId: String!, $image: String, $link: String, $title: String) {
        saveBook(authors: $authors, description: $description, bookId: $bookId, image: $image, link: $link, title: $title) {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        comments {
            _id
            commentText
        }
    }
  }
`;
export const REMOVE_BOOK = gql`
    mutation removeBook ($bookId: ID!) {
        removeBook(bookId: $bookId) {
            _id
            email
            username
            bookCount
            savedBooks {
                title
                authors
                description
                image
                bookId
                link
            }
        }
    }`;
