import React from 'react';

const languages = [
  { name: 'C', url: 'https://devdocs.io/c/' },
  { name: 'Haskell', url: 'https://www.haskell.org/documentation/' },
  { name: 'Github cli doc', url: 'https://docs.github.com/en/github-cli' },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'Typescript', url: 'https://www.typescriptlang.org/docs/' },
  { name: 'Kali linx', url: 'https://www.kali.org/docs/' },
  { name: 'Kali tools hacking', url: 'https://www.kali.org/tools/all-tools/' },
  { name: 'Windows cli commands', url: 'https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands' },
  { name: 'Python', url: 'https://docs.python.org/3/' },
  { name: 'Java', url: 'https://docs.oracle.com/javase/8/docs/' },
  { name: 'C++', url: 'https://cplusplus.com/doc/' },
  { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
  { name: 'Ruby', url: 'https://ruby-doc.org/' },
  { name: 'PHP', url: 'https://www.php.net/docs.php' },
 
];

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Programming Language Documentation</h1>
      <ul style={styles.list}>
        {languages.map((lang, index) => (
          <li key={index} style={styles.listItem}>
            <a href={lang.url} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {lang.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#282c34',
    minHeight: '100vh',
    color: 'white',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1.2rem',
  },
};

export default App;
