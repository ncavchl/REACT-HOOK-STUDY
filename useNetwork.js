const useNetwork = (onChange) => {
  // navigator.onLine은 온라인은 true, 오프라인은 false 값을 반환
  // 오프라인 모드로 전환하거나, 브라우저가 더 이상 네트워크에 연결할 수 없을 때 갱신
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  console.log("status", status);
  return status;
};

function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? "online" : "offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="app-box">
      <h1>Welcome to React Custom Hooks Page</h1>
      <h2>#7-2. useNetwork</h2>
      <h3>{onLine ? "Online" : "Offline"}</h3>
    </div>
  );
}

export default App;
