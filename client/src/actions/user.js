import axios from '../config/axios'
export const startSetUser = () => {
    return (dispatch) => {
        console.log('action -user')
        axios.get('/users/account', {
            headers:{
                'x-auth': localStorage.getItem('userAuth')
            }
        })
        .then((response) =>{
            console.log('response', response.data)
            dispatch(setUser(response.data))
        })
    }
}


export const setUser = (user)=> {
    console.log('')
    return{
        type: 'SET_USER',
        payload: user
    }
}

export const removeUser = (user) => {
    return {
        type: 'REMOVE_USER'
    }
}

export const startRemoveUser = (history) => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'x-auth':localStorage.getItem('userAuth')
            }
        })
        .then(response => {
            localStorage.removeItem('userAuth')
            dispatch(removeUser())
        })
        .catch(err => {
            console.log(err)
        })
    }
}