import React from 'react';
import './style.css';

const user = {
  firstName: 'bao',
  lastName: 'li',
};

function format(user) {
  return user.firstName + user.lastName;
}

function getGreeting(user) {
  if (user) {
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );

    return element;
  }
  return <h1>Hello, Stranger.</h1>;
}

setInterval(getGreeting, 1000);

export default function App() {
  return getGreeting(user);
}
