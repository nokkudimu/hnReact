import { Navigate } from "react-router-dom";
import DefaultPage from "./pages/Default.tsx";
import ContactsPage from "./pages/Contacts.tsx";
import NotFoundPage from "./pages/NotFound.tsx";
import {
    DEFAULT_ROUTE,
    CONTACTS_ROUTE,
    NOT_FOUND_ROUTE,
    VOID_ROUTE,
} from './utils/consts.ts';

export const publicRoutes = [
    {
        path: DEFAULT_ROUTE,
        element: <DefaultPage />
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
        element: <Navigate to="/404" />
    }
]