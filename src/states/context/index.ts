import store from '../../__mocked__/index'
import {createContext} from 'react'


const initialContext = store


const StoreContext = createContext(initialContext);



export default StoreContext