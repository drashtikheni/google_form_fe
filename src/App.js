import "./App.css";

import classNames from "classnames";

import Form from "./presentation/Form";
import DStack from "./shared/DStack";

function App() {
  return (
    <DStack className={classNames("App")}>
      <Form />
    </DStack>
  );
}

export default App;
