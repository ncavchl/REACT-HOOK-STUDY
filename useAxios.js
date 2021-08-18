import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const useAxios = (opts, axiosInstance = axios) => {
    const [state, setState] = useState({
      loading: true,
      error: null,
      data: null,
    });
  
    const [trigger, setTrigger] = useState(0);
  
    const refetch = () => {
      setState({
        ...state,
        loading: true,
      });
      setTrigger(Date.now());
    };
  
    useEffect(() => {
      axiosInstance(opts)
        .then((data) => {
          setState({
            ...state,
            loading: false,
            data,
          });
        })
        .catch((error) => {
          setState({
            ...state,
            loading: false,
            error,
          });
        });
    }, [trigger]);
  
    if (!opts.url) {
      return;
    }
    return { ...state, refetch };
  };
  
  function App() {
    const { loading, error, data, refetch } = useAxios({
      url: 'https://yts-proxy.now.sh/list_movies.json ',
    });
  
    console.log(
      `Loading: ${loading}, Error: ${error}, Data: ${JSON.stringify(data)},`
    );
  
    return (
      <div className='app-box' style={{ height: '1000vh' }}>
        <h1>Welcome to React Custom Hooks Page</h1>
        <h2>#10. useAxios</h2>
        <h2>Data Status: {data && data.status}</h2>
        <h2>{loading && 'Loading...'}</h2>
        <button onClick={refetch}>Refech</button>
      </div>
    );
ReactDOM.render(<App />, document.getElementById("root"));
