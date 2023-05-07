import Profile from "./Profile";
import {Link, Route} from "react-router-dom";

const Profiles = () => {
  return (
    <div>
      <h3>Users:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>Select user</div>}
      />
      <Route path="/profiles/:username" element={Profile}/>
    </div>
  )
};

export default Profiles;