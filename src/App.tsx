//import Message from './Message';
import ListGroup2 from "./Components/ListGroup2";
import ListGroup from "./Components/ListGroup";
import Alert from "./Alert";
import Greet from "./Person";

function App() {
  let items = ["Bharuch", "Vadodara", "Pune", "Mumbai"];
  const handleEvent = (item: string, index: number) => {
    console.log(item, index);
  };
  return (
    <div>
      {/* <ListGroup/> */}
      <Greet name="Paras"></Greet>
      <Alert text="Hello World">
        Paras <span>Rajput</span>
      </Alert>
      <ListGroup2 items={items} heading="Cities" onSelectItem={handleEvent} />
    </div>
  );
}

export default App;
