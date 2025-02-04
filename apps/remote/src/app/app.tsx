// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useState } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
  const [title, setTitle] = useState('poc title');
  return (
    <div>
      {title}
      <NxWelcome title="remote" />
    </div>
  );
}

export default App;
