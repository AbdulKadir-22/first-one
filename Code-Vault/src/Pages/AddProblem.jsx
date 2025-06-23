import React, { useState } from 'react';
import './AddProblem.css';

const TAGS = ['Array', 'String', 'Hashmap', 'Sorting', 'DP', 'Recursion'];
const DIFFICULTIES = ['Easy', 'Medium', 'Hard'];

const AddProblem = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: '',
    statement: '',
    tags: [],
    difficulty: '',
    notes: '',
    code: '',
    date: new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTagToggle = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    alert('🚀 Problem added!');
    setForm({
      title: '',
      statement: '',
      tags: [],
      difficulty: '',
      notes: '',
      code: '',
      date: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    });
  };

  return (
    <div className="add-problem-container">
      <h2>Add New Problem</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={form.title} onChange={handleChange} required />

        <label>Problem Statement</label>
        <textarea name="statement" value={form.statement} onChange={handleChange} rows={4} />

        <label>Tags</label>
        <div className="tags-container">
          {TAGS.map((tag) => (
            <label key={tag} className={`tag-option ${form.tags.includes(tag) ? 'selected' : ''}`}>
              <input
                type="checkbox"
                checked={form.tags.includes(tag)}
                onChange={() => handleTagToggle(tag)}
              />
              {tag}
            </label>
          ))}
        </div>

        <label>Difficulty</label>
        <select name="difficulty" value={form.difficulty} onChange={handleChange} required>
          <option value="">Select Difficulty</option>
          {DIFFICULTIES.map((diff) => (
            <option key={diff} value={diff}>{diff}</option>
          ))}
        </select>

        <label>Notes</label>
        <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} />

        <label>Code Solution</label>
        <textarea name="code" value={form.code} onChange={handleChange} rows={6} />

        <label>Date</label>
        <input type="text" name="date" value={form.date} readOnly />

        <button type="submit">➕ Add to Vault</button>
      </form>
    </div>
  );
};

export default AddProblem;
