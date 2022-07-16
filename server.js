const express= require('express');
const exphbs= require('express-handlebars');

const app= express();

app.engine('handlebars',exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

const port= process.env.PORT || 3000;

app.get('/',(req,res)=> {
    // res.send('Welcome !!');
    // res.render('home.handlebars');
    res.render('home');
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});


app.listen(port, ()=> {
    console.log(`Sever is running on ${port}`);
});