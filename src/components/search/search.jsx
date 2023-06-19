import './search.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

export function Search({ category }) {
  const navigate = useNavigate();
  const elementRef = useRef(null);
  const { keyword } = useParams();
  const [input, setInput] = useState('');
  const location = useLocation();

  function handleClick() {
    navigate(`/${category}/search/${input}`);
  }

  useEffect(() => {
    setInput(keyword);
  }, []);

  function handleKeyPress(e) {
    if (e.key === 'Enter') handleClick();
  }

  function onChange(e) {
    setInput(e.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        ref={elementRef}
        placeholder="Search"
        value={input}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
