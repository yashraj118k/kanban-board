// // import React from "react";
// // import PropTypes from "prop-types";
// // import "./Card.css"; // Import your Card component styles

// // const Card = ({ card }) => {
// //   const { title, priority, status, user } = card;

// //   return (
// //     <div className="card">
// //       <div className="card-title">{title}</div>
// //       <div className="card-priority">{`Priority: ${priority}`}</div>
// //       <div className="card-status">{`Status: ${status}`}</div>
// //       <div className="card-user">{`User: ${user}`}</div>
// //     </div>
// //   );
// // };

// // Card.propTypes = {
// //   card: PropTypes.shape({
// //     title: PropTypes.string.isRequired,
// //     priority: PropTypes.number.isRequired,
// //     status: PropTypes.string.isRequired,
// //     user: PropTypes.string.isRequired,
// //   }).isRequired,
// // };

// // export default Card;

// import React from "react";
// import PropTypes from "prop-types";
// import "./Card.css"; // Import your Card component styles

// const Card = ({ ticket, users }) => {
//   const { id, title, priority, status, userId } = ticket;
//   const user = users.find((user) => user.id === userId);

//   return (
//     <div className="card">
//       <div className="card-title">{title}</div>
//       <div className="card-priority">{`Priority: ${priority}`}</div>
//       <div className="card-status">{`Status: ${status}`}</div>
//       <div className="card-user">{`User: ${user ? user.name : "N/A"}`}</div>
//     </div>
//   );
// };

// Card.propTypes = {
//   ticket: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     priority: PropTypes.number.isRequired,
//     status: PropTypes.string.isRequired,
//     userId: PropTypes.string.isRequired,
//   }).isRequired,
//   users: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default Card;

import React from "react";
import PropTypes from "prop-types";
import "./Card.css"; // Import your Card component styles

const Card = ({ ticket, users }) => {
  const { id, title, priority, status, userId } = ticket;
  const user = users.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-priority">{`Priority: ${priority}`}</div>
      <div className="card-status">{`Status: ${status}`}</div>
      <div className="card-user">{`User: ${user ? user.name : "N/A"}`}</div>
    </div>
  );
};

Card.propTypes = {
  ticket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    priority: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
