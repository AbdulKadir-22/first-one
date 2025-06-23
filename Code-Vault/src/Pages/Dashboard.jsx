import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import ProblemCard from '../components/ProblemCard';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';

<>
  <Navbar 
    onSearchChange={(query) => console.log(query)}
    selectedTag={'Array'}
    onTagClick={(tag) => console.log(tag)}
  />

  <Sidebar 
    streak={10} 
    total={25} 
    onNavigate={(section) => console.log('Go to:', section)} 
  />


  <ProblemCard
    index={1}
    title="Two Sum"
    tags={['Array']}
    difficulty="Easy"
    date="7–June–2025"
    onClick={() => console.log('Clicked!')}
  />

  <FilterBar
    selectedTopic={topic}
    selectedDifficulty={difficulty}
    onTopicChange={(t) => setTopic(t)}
    onDifficultyChange={(d) => setDifficulty(d)}
    onClear={() => {
      setTopic(null);
      setDifficulty(null);
  }}
/>



  <SearchBar onSearch={(value) => console.log('Search query:', value)} />
</>
