import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProblemCard from './components/ProblemCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';
import AddProblem from './pages/AddProblem';

import './App.css';

const Dashboard = ({ problems, onEdit }) => {
  const [search, setSearch] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const navigate = useNavigate();

  const filtered = problems.filter((p) =>
    (!search || p.title.toLowerCase().includes(search.toLowerCase())) &&
    (!topic || p.tags.includes(topic)) &&
    (!difficulty || p.difficulty === difficulty)
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar streak={1} total={problems.length} />

      <div style={{ marginLeft: '250px', padding: '1rem', width: '100%' }}>
        <Navbar onSearchChange={setSearch} selectedTag={topic} onTagClick={setTopic} />

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
            onClick={() => navigate(`/edit/${problem.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: 'Two Sum',
      tags: ['Array'],
      difficulty: 'Easy',
      date: '07–June–2025',
    },
    {
      id: 2,
      title: 'Longest Substring',
      tags: ['String', 'SlidingWindow'],
      difficulty: 'Medium',
      date: '18–June–2025',
    }
  ]);

  const addProblem = (problem) => {
    const newProblem = {
      ...problem,
      id: problems.length + 1,
    };
    setProblems([newProblem, ...problems]);
  };

  const updateProblem = (updated) => {
    const updatedList = problems.map((p) =>
      p.id === updated.id ? updated : p
    );
    setProblems(updatedList);
  };

  const getProblemById = (id) => problems.find((p) => p.id === parseInt(id));

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard problems={problems} />}
        />
        <Route
          path="/add"
          element={<AddProblem onAdd={addProblem} />}
        />
        <Route
          path="/edit/:id"
          element={<AddProblem onUpdate={updateProblem} getProblemById={getProblemById} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
