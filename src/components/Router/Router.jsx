import { Suspense } from "react"
import { NAVIGATION } from "../../constants/navigation";
import Loader from "../Loader/Loader";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function Router() {
    const router = createBrowserRouter(NAVIGATION);
    return (
        <Suspense fallback={<Loader />}>
            <RouterProvider router={router} />
        </Suspense>
    )
}

export default Router