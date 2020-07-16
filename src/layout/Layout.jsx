import React, { Fragment } from 'react'

import PublicLayout from './public'
import AuthLayout from './auth'
import MainLayout from './main'

const Layouts = {
    public: PublicLayout,
    auth: AuthLayout,
    main: MainLayout,
}

let previousPath = ''

const Layout = ({ children, location: { pathname, search } }) => {
    const currentPath = pathname + search
    if (currentPath !== previousPath) {
        window.scrollTo(0, 0)
    }

    setTimeout(() => {
        previousPath = currentPath
    }, 300)

    const getLayout = () => {
        // if (pathname === '/') {
        //     return 'public'
        // }
        // if (/^\/auth(?=\/|$)/i.test(pathname)) {
        //     return 'auth'
        // }
        return 'auth'
    }

    const Container = Layouts[getLayout()]
    const isAuthLayout = getLayout() === 'auth'

    const LayoutCall = () => {
        // show loader when user in check authorization process, not authorized yet and not on login pages
        // if (!isAuthLayout) {
        //     return null
        // }
        // // redirect to login page if current is not login page and user not authorized
        // if (!isAuthLayout) {
        //     return <div>Not logged-in</div>
        // }
        // in other case render previously set layout
        return <Container>{children}</Container>
    }

    return (
        <Fragment>
            {LayoutCall()}
        </Fragment>
    )
}

export default (Layout)

