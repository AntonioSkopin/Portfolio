// Router
import { Switch } from "react-router-dom";
import { Route } from "react-router";

// Path
import { PATH } from "../Constants/Paths";

// Components
import SwissHomePage from "../Pages/SwissHomePage";

const HomeRoutes = () => {
    return (
        <Switch>
            <Route
                exact
                path={PATH.HOME}
                component={() => (
                    <SwissHomePage />
                )}
            />
        </Switch>
    );
};

export default HomeRoutes;