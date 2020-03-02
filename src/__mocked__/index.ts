import store from './src/mockedStore'
import components from './src/mockedComponents'
import { getComponents } from './src/mockedComponents'
const componentTitle = store.components[0].title
// console.log(componentTitle)
// console.log(components[componentTitle]({}))


const mountedComponents:any = []
// Apply styles to components and merge Store
store.components.map((component:any) => {
    const newComponent = {
        ...component,
        component: components[component.title]({})
    }
    mountedComponents.push(newComponent)
})


console.log(mountedComponents)


export default mountedComponents
export { getComponents }