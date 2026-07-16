import { Navigate } from "react-router-dom";
import DefaultPage from "./pages/Default.tsx";
import ContactsPage from "./pages/Contacts.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import AboutPage from "./pages/About.tsx";
import ShopTypesPage from "./pages/ShopTypes.tsx";
import CollabPage from "./pages/Collab.tsx";
import LocationsPage from "./pages/Locations.tsx";
import {
    DEFAULT_ROUTE,
    CONTACTS_ROUTE,
    NOT_FOUND_ROUTE,
    VOID_ROUTE,
    ABOUT_ROUTE,
    SHOP_T_ROUTE,
    LOCATIONS_ROUTE,
    COLLAB_ROUTE,
} from './utils/consts.ts';

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        element: <DefaultPage />
    },
    {
        path: ABOUT_ROUTE,
        element: <AboutPage />
    },
    {
        path: SHOP_T_ROUTE,
        element: <ShopTypesPage />
    },
    {
        path: COLLAB_ROUTE,
        element: <CollabPage />
    },
    {
        path: LOCATIONS_ROUTE,
        element: <LocationsPage />
    },
    {
        path: CONTACTS_ROUTE,
        element: <ContactsPage />
    },
    {
        path: NOT_FOUND_ROUTE,
        element: <NotFoundPage />
    },
    {
        path: VOID_ROUTE,
        element: <Navigate to="/nfound" />
    }
]