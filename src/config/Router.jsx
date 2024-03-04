import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"

// import  Navbar  from "../Users/components/navbar/Navbar";
import  Home  from '../Users/screens/home/Home'
import { About } from '../Users/screens/about/About'
import { Contact } from '../Users/screens/contact/Contact'
// import { Footer } from "../Users/components/Footer/Footer";
import { Services } from "../Users/screens/Services/Services";
import { MarketingServices } from "../Users/screens/MarketingServices/MarketingServices";
import { ConsumerServices } from "../Users/screens/ConsumerServices/ConsumerServices";
import { CorporateServices } from "../Users/screens/CorporateServices/CorporateServices";
import {Admin} from '../Admin/Admin'
import Careers from "../Users/screens/Careers/Careers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/aboutus',
                element: <About />,
            },
            {
                path: '/about-us',
                element: <About />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/contactus',
                element: <Contact />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/service',
                element: <Services />,
            },
            {
                path: '/marketing-services',
                element: <MarketingServices />,
            },
            {
                path: '/consumer-services',
                element: <ConsumerServices />,
            },
            {
                path: '/corporate-services',
                element: <CorporateServices />,
            },
            {
                path: '/admin',
                element: <Admin />,
            },
            {
                path: '/careers',
                element: <Careers />,
            },
            {
                path: '/career',
                element: <Careers />,
            },
        ]
    }
]);

function Router() {
    return <RouterProvider router={router} />
}

function Main() {
    return (
        <div>
            <Outlet />
        </div>

    )
}
export default Router