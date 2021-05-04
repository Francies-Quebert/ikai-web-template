import React from 'react'
import Ingredient from '../components/govind/Ingredient'
import MenuContent from '../components/govind/MenuContent'
import MenuHeader from '../components/govind/MenuHeader'
import MenuReceipe from '../components/govind/MenuReceipe'

const govind = () => {
    return (
        <>
            <MenuHeader />
            <MenuContent />
            <Ingredient />
            <MenuReceipe />
        </>
    )
}

export default govind
