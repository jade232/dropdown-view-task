import "./App.css";
import { useState } from "react";

function App() {
  const List = [
    {
      id: 1,
      name: "David Stephenson",
      status: "COMPLETED",
    },
    {
      id: 2,
      name: "Sienna Miller",
      status: "PENDING",
    },
    {
      id: 3,
      name: "Jack Forster",
      status: "COMPLETED",
    },
    {
      id: 4,
      name: "Elliot Fleming",
      status: "COMPLETED",
    },
    {
      id: 5,
      name: "Cameron Gardiner",
      status: "PENDING",
    },
    {
      id: 6,
      name: "Charles Hayes",
      status: "COMPLETED",
    },
    {
      id: 7,
      name: "Harriet Gardiner",
      status: "PENDING",
    },
    {
      id: 8,
      name: "Jude Atkinson",
      status: "PENDING",
    },
    {
      id: 9,
      name: "Kiera Duffy",
      status: "COMPLETED",
    },
    {
      id: 10,
      name: "Alice Barrett",
      status: "PENDING",
    },
  ];

  const [data, setData] = useState(List);

  const handleChange = (e) => {
    let { value } = e.target;

    if (value == "Pending") {
      var newVal = List.filter((list) => list.status === "PENDING");
      setData([...newVal]);
    } else if (value == "Completed") {
      var newVal = List.filter((list) => list.status === "COMPLETED");
      setData([...newVal]);
    } else if (value == "All") {
      setData(List);
    }
  };

  const handleSort = (e) => {
    let { value } = e.target;
    if (value === "ascend") {
      let val = [...data];
      let newVal = val.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
      setData(newVal);
    } else if (value === "descend") {
      let val = [...data];
      let newVal = val.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      setData(newVal);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="dropdown-wrapper">
          <div>
            <select className="textField" onChange={(e) => handleSort(e)}>
              <option value="ascend">A-Z</option>
              <option value="descend">Z-A</option>
            </select>
          </div>
          <div>
            <select className="textField" onChange={(e) => handleChange(e)}>
              {["All", "Pending", "Completed"].map((list, index) => (
                <option value={list} key={index}>
                  {list}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
      <div>
        {data.map((list) => (
          <ul key={list.id}>
            <li>
              {list.name} - {list.status}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
