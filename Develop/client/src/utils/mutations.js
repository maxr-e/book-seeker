//'LOGIN_USER' will execute 'loginUser' mutation set up using Apollo Server
//'ADD_USER' will execute 'addUser' mutation
//'SAVE_BOOK' will execute 'saveBook' mutation
//'REMOVE_BOOK' will execute the 'removeBook' mutation
export const LOGIN_USER = gql``
export const ADD_USER = gql ``
export const SAVE_BOOK = gql``
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
