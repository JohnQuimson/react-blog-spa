import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';
import ElencoPost from './components/ElencoPost';
const apiUrl = import.meta.env.VITE_BASE_API_URL;

const App = () => {
  const [response, setResponse] = useState(null);

  const fetchPosts = async () => {
    try {
      setResponse(null);
      const url = `${apiUrl}/posts`;
      const { data } = await axios.get(url);
      setResponse(data);
      console.log('Posts ricevuti:', data);
    } catch (error) {
      console.error('Errore durante il recupero dei post:', error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    }
  };

  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    try {
      const url = `${apiUrl}/tags`;
      const { data: array } = await axios.get(url);
      setTags(array);
      console.log('tags ricevuti:', array);
    } catch (error) {
      console.error('Errore durante il recupero dei tags:', error);
    }
  };

  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const url = `${apiUrl}/categories`;
      const { data: array } = await axios.get(url);
      setCategories(array);
      console.log('Categorie ricevute:', array);
    } catch (error) {
      console.error('Errore durante il recupero delle Categories:', error);
      // Gestisci l'errore, ad esempio mostrando un messaggio di errore all'utente
    }
  };

  useEffect(() => {
    fetchPosts();
    fetchTags();
    fetchCategories();
  }, []);

  return (
    <>
      <Form
        tags={tags}
        categories={categories}
        onCreate={() => {
          fetchPosts();
        }}
      />
      <ElencoPost response={response} />
    </>
  );
};

export default App;
