import './App.css';
import Hero from './Components/Hero/Hero';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Headlines from './Components/Headlines/Headlines';
import { useEffect, useState } from 'react';
import Sports from './Components/Sports/Sports';
import Foot from './Components/Foot/Foot';




function App() {
  const [news, setNews] = useState([]);
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4133b3dc8c4ffa9d7e2a5e481bf69b')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, []);

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=cd4133b3dc8c4ffa9d7e2a5e481bf69b')
      .then(res => res.json())
      .then(data => setSports(data.articles))
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Hero></Hero>
      </header>
      <main>
        <Container fixed>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <h1 style={{ marginTop: "0" }}>Headlines</h1>
                <Grid container spacing={2}>
                  {
                    news?.map((article, index) => <Grid item md={6} xs={12} key={index}><Headlines article={article}></Headlines></Grid>)
                  }
                </Grid>
              </Grid>
              <Grid item md={4} xs={12}>
                <h2>Recent sports news</h2>
                {
                  sports?.map((sport, index) => <Sports sport={sport} key={index + 1000}></Sports>)
                }
              </Grid>
            </Grid>
          </Box>
        </Container>
      </main>
      <footer>
        <Foot></Foot>
      </footer>
    </div>
  );
}

export default App;
