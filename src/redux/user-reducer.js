const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'

let initialState = {
    users: [
        /*{id: 0, photoUrl: 'https://i.pinimg.com/originals/d2/27/67/d22767e3ecd58f14c839092e1dfe3852.jpg',
            followed: false, fullName: 'Dmitry', status: 'doter', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 1, photoUrl: 'https://lyricstranslate.com/files/styles/avatar/public/pictures/picture-1444718-1579871050.jpg?itok=RJPto3y0',
            followed: true, fullName: 'Liza', status: 'ne doter', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, photoUrl: 'https://hypeava.ru/uploads/posts/2020-06/1592687813_4.jpg',
            followed: false, fullName: 'Anna', status: 'devochka', location: {city: 'Moskow', country: 'Russia'}},*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: !u.followed}
                    return u;
                })
            }
        }

        case SET_USERS: {
            return {...state, users: [...action.users]}
            /*
                        return {...state, users: [...state.users, ...action.users]}
            */
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.pageNumber}
            /*
                        return {...state, users: [...state.users, ...action.users]}
            */
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        default:
            return state;
    }
}


export const toggleFollowAC = (userId, followed) => ({type: TOGGLE_FOLLOW, userId, followed});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCountAC = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;