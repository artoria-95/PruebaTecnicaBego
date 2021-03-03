import Task from "./Components/TaskCards";
import Header from "./Components/Header/index";
import "./App.css";
import Statistics from "./Components/Statistics";
import Months from "./Components/Months";

function App() {
  return (
    <div className="App">
      <section className="header">
        <Header />
      </section>
      <section className="task">
        <Task />
      </section>
      <section className="statistic-table">
        <Statistics />
      </section>
      <section className="months">
        <Months/>
      </section>
    </div>
  );
}

export default App;
