// Router
import { Switch } from "react-router-dom";
import { Route } from "react-router";

// Path
import { PATH } from "../Constants/Paths";

// Components
import HomePage from "../Pages/HomePage";

const HomeRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path={PATH.HOME}
                component={() => (
                    <HomePage />
                )}
            />
        </Switch>
    );
};

export default HomeRoutes;