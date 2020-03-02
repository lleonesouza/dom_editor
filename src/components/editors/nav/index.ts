import makeNav from './src'
import {Nav, Ul, Li} from './style'
import routes from '../src/index'


const isWhatComponent = () => {
    return 'navbar'
}

console.log(routes)

const EditorNav = makeNav({Nav, Ul, Li}, {routes}, {isWhatComponent})



export default EditorNav