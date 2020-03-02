import classicNavbar from './components/navbar'
import classicHome from './components/home'

type components = {
    [key: string]: any
}

const getComponents = async () => {
    const comps = {
        classicNavbar: await import('./components/navbar'),
        classicHome: await import('./components/home')
    }
    return comps
}


const components:components = {
    classicNavbar: classicNavbar,
    classicHome: classicHome
}


export default components
export {getComponents }