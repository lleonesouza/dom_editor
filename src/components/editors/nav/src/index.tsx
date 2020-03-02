import React, { ReactElement } from 'react'



const Index = ({Nav, Ul, Li}:any, {routes}:any, {isWhatComponent}:any) => {
    return ({}: any): ReactElement =>{
        const title = isWhatComponent()
        console.log(routes)
        return (
            <Nav>
                <Ul>
                    {routes[title].map((route) => (
                        <Li>my_li</Li>
                    ))}
                </Ul>
            </Nav>
        )
    }
}


export default Index