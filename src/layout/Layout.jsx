import React, { Fragment } from 'react'

import PublicLayout from './public'
import AuthLayout from './auth'
import MainLayout from './main'

const Layouts = {
    public: PublicLayout,
    auth: AuthLayout,
    main: MainLayout,
}

const Layout = ({ children }) => {

    const getLayout = () => {

        return 'auth'       // Change your Layout as per condition { public / main / auth }
    }

    const Container = Layouts[getLayout()]

    const LayoutCall = () => {

        return <Container>{children}</Container>
    }

    return (
        <Fragment>
            {LayoutCall()}
        </Fragment>
    )
}

export default (Layout)

