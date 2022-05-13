import {
  useQuery,
  gql
} from "@apollo/client";
import logo from './logo.svg';
import './App.css';

const CAT_QUERY = gql`
  query Cat {
    cat(name: "Tydus") {
      name
      owner {
        name
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(CAT_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is <code>{data?.cat.name}</code> and my owner is {data?.cat.owner.name}.
        </p>
      </header>
    </div>
  );
}

export default App;
