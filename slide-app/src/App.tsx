import * as React from "react";
import ViewContainer from "./containers/ViewContainer";
import mockData from "./db2";

function App() {
  const params = new URLSearchParams(window.location.search);
  const edit = params.get('edit') === 'true';

  const [items, setItems] = React.useState(mockData?.item || []);

  React.useEffect(() => {
    edit && setItems(JSON.parse(localStorage.getItem("quizCraftData")).item);
  }, [edit]);
  
  return <ViewContainer items={items} />;
}

export default App;
