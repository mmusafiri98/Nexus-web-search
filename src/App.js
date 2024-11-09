import NexusSuggestions from './components/NexusSuggestions'


import './App.css'

const suggestionsList = [
  { id: 1, suggestion: 'amazon' },
  { id: 2, suggestion: 'youtube' },
  { id: 3, suggestion: 'wikipedia' },
  { id: 3, suggestion: 'instagram' },
  { id: 4, suggestion: 'facebook' },
  { id: 5, suggestion: 'reddit' },
  { id: 6, suggestion: 'pornhub' },
  { id: 7, suggestion: 'trc.taboola' },
  { id: 8, suggestion: 'x' },
  { id: 9, suggestion: 'xvideos' },
  { id: 10, suggestion: 'yandex' },
  { id: 11, suggestion: 'twitter' },
  { id: 12, suggestion: 'duckduckgo' },
  { id: 13, suggestion: 'whatsapp' },



]

const App = () => <NexusSuggestions suggestionsList={suggestionsList} />

export default App
