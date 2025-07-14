import express from "express";
import axios from "axios";
const app = express();
const port = process.env.PORT ||3000;
app.use(express.static("public"));
app.get("/", async (req, res) => {
    try{
        const result = await axios.get("https://uselessfacts.jsph.pl/today.json?language=en");
        res.render("index.ejs",{Fact:"Today's Fact: "+ JSON.stringify(result.data.text)});
    }catch(error){
        res.render("index.ejs",{Fact: JSON.stringify(error.result.data)});
    }
  
});
app.post("/Find_Fact",async (req,res)=>{
    try{
        const result = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        res.render("index.ejs",{Fact:JSON.stringify(result.data.text)});
    }catch(error){
        res.render("index.ejs",{Fact: JSON.stringify(error.result.data)});
    }    
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});