// // import React, { useState, useEffect } from "react";
// // import { fetchDataFromApi } from "./api/api"; // Import your API functions here
// // import Card from "./Card"; // Import the Card component
// // import "./Board.css"; // Import your CSS styles here

// // const Board = () => {
// //   const [groupingOption, setGroupingOption] = useState("status");
// //   const [sortingOption, setSortingOption] = useState("priority");
// //   const [cards, setCards] = useState([]);

// //   const fetchCards = async () => {
// //     try {
// //       const data = await fetchDataFromApi(); // Replace with your API call
// //       setCards(data);
// //     } catch (error) {
// //       console.error("Error fetching data:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchCards();
// //   }, []);

// //   const groupedAndSortedCards = () => {
// //     let groupedCards = {};

// //     // Grouping logic based on groupingOption
// //     cards.forEach((card) => {
// //       const groupKey =
// //         groupingOption === "status"
// //           ? card.status
// //           : groupingOption === "user"
// //           ? card.user
// //           : card.priority;

// //       if (!groupedCards[groupKey]) {
// //         groupedCards[groupKey] = [];
// //       }

// //       groupedCards[groupKey].push(card);
// //     });

// //     // Sorting logic based on sortingOption
// //     Object.keys(groupedCards).forEach((groupKey) => {
// //       groupedCards[groupKey].sort((a, b) => {
// //         if (sortingOption === "priority") {
// //           return b.priority - a.priority;
// //         } else {
// //           return a.title.localeCompare(b.title);
// //         }
// //       });
// //     });

// //     return groupedCards;
// //   };

// //   return (
// //     <div className="board">
// //       <div className="options">
// //         <div className="grouping-options">
// //           {/* Implement grouping option buttons/dropdowns */}
// //         </div>
// //         <div className="sorting-options">
// //           {/* Implement sorting option buttons/dropdowns */}
// //         </div>
// //       </div>

// //       <div className="cards">
// //         {Object.entries(groupedAndSortedCards()).map(([group, cards]) => (
// //           <div className="card-group" key={group}>
// //             <h2 className="group-heading">{group}</h2>
// //             {cards.map((card) => (
// //               <Card key={card.id} card={card} />
// //             ))}
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Board;

// import React, { useState, useEffect } from "react";
// import { fetchKanbanData } from "./api"; // Import your API functions here
// import Card from "./Card"; // Import the Card component
// import "./Board.css"; // Import your CSS styles here

// const Board = () => {
//   const [groupingOption, setGroupingOption] = useState("status");
//   const [sortingOption, setSortingOption] = useState("priority");
//   const [cards, setCards] = useState({}); // Change to an object for grouping

//   const fetchData = async () => {
//     try {
//       const data = await fetchKanbanData(); // Replace with your API call
//       setCards(data);
//     } catch (error) {
//       console.error("Error fetching data from API:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const groupedAndSortedCards = () => {
//     let groupedCards = {};

//     // Grouping logic based on groupingOption
//     Object.keys(cards).forEach((groupKey) => {
//       const group = cards[groupKey];
//       if (!groupedCards[groupKey]) {
//         groupedCards[groupKey] = [];
//       }
//       group.forEach((card) => {
//         groupedCards[groupKey].push(card);
//       });
//     });

//     // Sorting logic based on sortingOption
//     Object.keys(groupedCards).forEach((groupKey) => {
//       groupedCards[groupKey].sort((a, b) => {
//         if (sortingOption === "priority") {
//           return b.priority - a.priority;
//         } else {
//           return a.title.localeCompare(b.title);
//         }
//       });
//     });

//     return groupedCards;
//   };

//   return (
//     <div className="board">
//       <div className="options">
//         {/* Implement grouping and sorting option buttons/dropdowns */}
//       </div>

//       <div className="cards">
//         {Object.entries(groupedAndSortedCards()).map(([group, cards]) => (
//           <div className="card-group" key={group}>
//             <h2 className="group-heading">{group}</h2>
//             {cards.map((card) => (
//               <Card key={card.id} card={card} />
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Board;

import React, { useState, useEffect } from "react";
import { fetchKanbanData } from "./api"; // Import your API functions here
import Card from "./Card"; // Import the Card component
import "./Board.css"; // Import your CSS styles here

const Board = () => {
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortingOption, setSortingOption] = useState("priority");
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetchKanbanData();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const groupedAndSortedCards = () => {
    let groupedCards = {};

    // Grouping logic based on groupingOption
    tickets.forEach((ticket) => {
      const groupKey =
        groupingOption === "status"
          ? ticket.status
          : groupingOption === "user"
          ? ticket.userId
          : ticket.priority;
      if (!groupedCards[groupKey]) {
        groupedCards[groupKey] = [];
      }
      groupedCards[groupKey].push(ticket);
    });

    // Sorting logic based on sortingOption
    Object.keys(groupedCards).forEach((groupKey) => {
      groupedCards[groupKey].sort((a, b) => {
        if (sortingOption === "priority") {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedCards;
  };

  return (
    <div className="board">
      <div className="options">
        {/* Grouping option buttons */}
        <button
          className={`group-button ${
            groupingOption === "status" ? "active" : ""
          }`}
          onClick={() => setGroupingOption("status")}
        >
          Group by Status
        </button>
        <button
          className={`group-button ${
            groupingOption === "user" ? "active" : ""
          }`}
          onClick={() => setGroupingOption("user")}
        >
          Group by User
        </button>
        <button
          className={`group-button ${
            groupingOption === "priority" ? "active" : ""
          }`}
          onClick={() => setGroupingOption("priority")}
        >
          Group by Priority
        </button>
      </div>

      <div className="cards">
        {Object.entries(groupedAndSortedCards()).map(([group, tickets]) => (
          <div className="card-group" key={group}>
            <h2 className="group-heading">{group}</h2>
            {tickets.map((ticket) => (
              <Card key={ticket.id} ticket={ticket} users={users} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
