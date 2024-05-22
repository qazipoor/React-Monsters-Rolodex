// import { Component } from "react";
import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./Components/card-list/card-list.component";
import SearchBox from "./Components/search-box/search-box.component";

import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [ searchField, setSearchField ] = useState("");
  const [ monsters, setMonsters ] = useState<Monster[]>([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");
      setMonsters(users);
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onSearchChange}
        placeholder="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [
//         {
//           id: "asflk235lksadf",
//           name: "Liam",
//         },
//         {
//           id: "asflk2355y6gdf",
//           name: "Frank",
//         },
//         {
//           id: "asflk7ioglksadf",
//           name: "Adam",
//         },
//       ],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then(users =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       );
//   }

//   onChangeHandler = event => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onChangeHandler } = this;

//     let filteredMonsters = monsters.filter(monster =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );
//     return (
//       <div className="App">
        
//         <h1 className="app-title">Monsters Rolodex</h1>
        
//         <SearchBox className='search-box' onSearchChange={onChangeHandler} placeholder='Search monsters' />
//         {
//           // filteredMonsters.map(monster => {
//           // return (
//           //   <div key={monster.id}>
//           //     <h1>{monster.name}</h1>
//           //   </div>
//           // );
//           // })
//         }
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
