import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProblemCard from './components/ProblemCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';

import './App.css';

const sampleProblems = [
  {
    id: 1,
    title: 'Two Sum',
    tags: ['Array'],
    difficulty: 'Easy',
    date: '7–June–2025'
  },
  {
    id: 2,
    title: 'Longest Substring',
    tags: ['String', 'SlidingWindow'],
    difficulty: 'Medium',
    date: '18–June–2025'
  }
];

function App() {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const filtered = sampleProblems.filter((p) =>
    (!search || p.title.toLowerCase().includes(search.toLowerCase())) &&
    (!topic || p.tags.includes(topic)) &&
    (!difficulty || p.difficulty === difficulty)
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar
        streak={12}
        total={sampleProblems.length}
        onNavigate={(s) => alert(`Navigate to ${s}`)}
      />

      <div style={{ marginLeft: '200px', width: '100%' }}>
        <Navbar
          onSearchChange={setSearch}
          selectedTag={topic}
          onTagClick={setTopic}
        />

        <FilterBar
          selectedTopic={topic}
          selectedDifficulty={difficulty}
          onTopicChange={setTopic}
          onDifficultyChange={setDifficulty}
          onClear={() => {
            setTopic('');
            setDifficulty('');
          }}
        />

        <SearchBar onSearch={setSearch} />

        {filtered.map((problem, idx) => (
          <ProblemCard
            key={problem.id}
            index={idx + 1}
            title={problem.title}
            tags={problem.tags}
            difficulty={problem.difficulty}
            date={problem.date}
            onClick={() => alert(`View: ${problem.title}`)}
          />
        ))}
      </div>
    </div>
    
  );
}

export default App;

