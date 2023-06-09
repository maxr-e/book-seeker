//this will hold the query 'GET_ME' which will execute the 'me' query set up using Apollo Server
import { gql } from '@apollo/client';

export const GET_ME = gql`
{
    me {
        username
        email
        _id
        bookCount
        savedBooks {
            title
            authors
            description
            image
            link
            bookId
        }
    }
}`;