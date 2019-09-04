import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import { startSetUser } from './actions/user'
import { startSetEvent } from './actions/event'
import { startSetCategory} from './actions/category'
import configureStore from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore()

store.subscribe(()=>{
    console.log('store', store.getState())
})



if(localStorage.getItem('userAuth')){
    console.log('indexjs',localStorage.getItem('userAuth'))
    store.dispatch(startSetUser())
}

store.dispatch(startSetEvent())
store.dispatch(startSetCategory())


const jsx = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))