import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';
import { loadRemote } from '@module-federation/runtime';

const Remote = React.lazy(() => loadRemote('remote/Module') as any);

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/remote">Remote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/remote" element={<Remote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
