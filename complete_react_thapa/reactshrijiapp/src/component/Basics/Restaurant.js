import React from 'react'
import "./styles.css"
import Menu from "./menuApi.js"
import MenuCard from './MenuCard'

const Restaurant = () => {

    const [menuData, setmenuData] = React.useState(Menu);
    return (
        <>
        <MenuCard menuData={menuData}/>
        </>
    )
}

export default Restaurant
