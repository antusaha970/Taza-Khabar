import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Headlines from './Components/Headlines/Headlines';
import { useEffect, useState } from 'react';




function App() {
  const [news, setNews] = useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cd4133b3dc8c4ffa9d7e2a5e481bf69b')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  },[]);
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
              <h1>Headlines</h1>
              <Grid container spacing={2}>
                  {
                    news?.map((article, index) => <Grid item md={6} xs={12}><Headlines article = {article}></Headlines></Grid>)
                  }
              </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
              <h3>News</h3>
            </Grid>
          </Grid>
        </Box>
        </Container>
      </main>
    </div>
  );
}

export default App;
