const initialState = {
    books: [],
    filter: []
}
export function bookReducers(state = initialState, action) {
    switch (action.type) {
        case 'CHARGE_BOOKS':
            return {
                ...state,
                books: action.payload,
                filter: action.payload
            }
        case 'SEARCH_BOOKS':
            return{
                ...state,

                // filter: state.books.filter(book => book.title.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0),
                // filterG: state.books.filter(book => book.genre.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0),
                // filterUF: state.books.filter(book => book.user.firstname.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0),
                // filterUL: state.books.filter(book => book.user.lastname.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0),


                filter: state.books.filter(book => {
                    return (   
                    book.title.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0,
                    book.genre.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0,
                    book.user.firstname.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0,
                    book.user.lastname.toUpperCase().indexOf(action.payload.toUpperCase().trim()) === 0,
                    console.log(book)
                    )
                })
            }
        default:
            return state
    }
}

export default bookReducers