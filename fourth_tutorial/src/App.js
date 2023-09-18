import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import EditPost from './EditPost';
import {Route, Routes} from 'react-router-dom';
import {useEffect} from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import { useStoreActions } from 'easy-peasy';
//import { DataProvider } from './Context/DataContext';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])

  return (
    <div className="App">
        <Header title="React JS Blog" />
        <Nav />
        <>
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} fetchError={fetchError}/>} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </>
        <Footer />
    </div>
  );
}

export default App;

  // implemented in earlier tutorial but replaced it using custom hooks 
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try{
  //       const response = await api.get('/posts');
  //       setPosts(response.data);
  //     }
  //     catch(err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       }
  //       else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //       // not in 200 response range
  //     }
  //   }

  //   fetchPosts();
  // }, [])
