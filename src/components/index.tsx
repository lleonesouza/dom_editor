import Nav from './editors/nav'
import { } from './preview/src'
import editors from './editors'
import preview from './preview'
// import suggestions from './suggestions'
import viewerController from './viewerController'

import components from '../__mocked__'



const Editors = editors({}, {Nav})
const Preview = preview({}, {components})



export default Object.freeze({Editors, Preview})
export {Editors, Preview}