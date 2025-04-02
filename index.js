import express from 'express';
import axios from 'axios';
import env from 'dotenv';


const app = express();
const port = 3000;
env.config();
const bearerToken=process.env.BEARER_TOKEN; // provide the bearer token after creating an account on the website https://secrets-api.appbrewery.com/

//body parser use
app.use(express.urlencoded({ extended: true }));


//use ejs
app.set('view engine', 'ejs');
app.use(express.static("public")); //to apply css 


//get request
app.get('/', async (req, res) => {
  try {
    const welcomeMessage = {
      title: "Welcome to SecretShare Hub",
      message: "Discover, create, and manage secrets from users around the world.",
      instructions: "Browse through 50+ user secrets or create your own. Your account is automatically created with your unique token.",
      tip: "Use GET to view secrets, POST to create your own. You can only modify secrets you've created."
    };
    
    res.render("index.ejs", {content: JSON.stringify(welcomeMessage, null, 2)});
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  }
});


//api get request
app.get('/get', async (req, res) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}` 
      }
    };  
    const response = await axios.get(`https://secrets-api.appbrewery.com/secrets/${req.query.id}`, config);
    res.render("index.ejs", { content: JSON.stringify(response.data, null, 2) });
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  }
});

//api post request
app.post('/post', async (req, res) => {
  try {
    const payload = req.body; //payload is the data that we are sending to the api
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}` 
      }
    };
    const response = await axios.post('https://secrets-api.appbrewery.com/secrets', payload, config); 
    res.render("index.ejs", { content: JSON.stringify(response.data, null, 2) });
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  }
}); 

//api put request
app.post('/put', async (req, res) => {
  try { 
    const payload = req.body; //payload is the data that we are sending to the api
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}` 
      }
    };
    const response = await axios.put(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, payload, config);  
    res.render("index.ejs", { content: JSON.stringify(response.data, null, 2) });
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  }
});  

//api delete request
app.post('/delete', async (req, res) => {
  try { 
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}` 
      }
    };
    const response = await axios.delete(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, config);
    res.render("index.ejs", { content: JSON.stringify(response.data, null, 2) });
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  }
});   

//api patch request
app.post('/patch', async (req, res) => {
  try { 
    const payload = req.body; //payload is the data that we are sending to the api
    const config = {
      headers: {
        Authorization: `Bearer ${bearerToken}` 
      }
    };  
    console.log(req.body);
    const response = await axios.patch(`https://secrets-api.appbrewery.com/secrets/${req.body.id}`, payload, config);
    res.render("index.ejs", { content: JSON.stringify(response.data, null, 2) });
  } catch (error) {
    console.error('Error handling request:', error);
    res.render("index.ejs", { content: error.message });
  } 
}); 

// Enhanced error handler for better user experience
app.use((err, req, res, next) => {
  console.error('Application error:', err);
  res.status(500).render("index.ejs", { 
    content: JSON.stringify({
      error: true,
      message: err.message,
      status: 500,
      timestamp: new Date().toISOString()
    }, null, 2)
  });
});

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).render("index.ejs", { 
    content: JSON.stringify({
      error: true,
      message: "Route not found",
      status: 404,
      path: req.originalUrl,
      timestamp: new Date().toISOString()
    }, null, 2)
  });
});

app.listen(port, () => {
  console.log(`
  🚀 SecretShare Hub Server
  ====================================
  ✅ Server running at http://localhost:${port}
  📝 Available actions:
    - / (Home)
    - /get (View Secret)
    - /post (Create Secret)
    - /put (Replace Secret)
    - /delete (Delete Secret)
    - /patch (Update Secret)
  ====================================
  `);
});