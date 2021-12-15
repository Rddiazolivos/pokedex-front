import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import List from './pokemons/List'
import Show from './pokemons/Show'
import Breadcrumbs from "./Breadcrumbs";
const queryClient = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={queryClient}>
     
      <Router>
        <div>
          <Breadcrumbs/>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route index element={<List />} />
            <Route path=":id" element={<Show />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
