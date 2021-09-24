// Router
import { BrowserRouter } from "react-router-dom";

// Routes
import HomeRoutes from "./HomeRoutes";

const Routes = () => {
    return (
        <BrowserRouter>
            <HomeRoutes />
        </BrowserRouter>
    );
};

export default Routes;