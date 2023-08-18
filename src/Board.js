import React, { useState, useEffect } from "react";
import { fetchKanbanData } from "./api";
import Card from "./Card";
import "./Board.css";

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
