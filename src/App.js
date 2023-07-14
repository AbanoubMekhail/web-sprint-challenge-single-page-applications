import React from "react";
import Homepage from './Homepage';
import Help from './help';
import Order from './Order';
import { Routes, Route, Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
      <h1>Lambda Eats</h1>
      <nav>
      <Link to='/'>Home</Link>&nbsp;
      <Link to='help'>Help</Link>
      </nav>
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/help" element={<Help />} />
        <Route path="/pizza" element={<Order />} />
      </Routes>

    </div>
  );
};
export default App;
