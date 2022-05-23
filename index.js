const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')


app.use(cors());
app.use(express.json());



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser5:kRoyp5QXyHvelqhu@cluster0.s3wad.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        const collection = client.db("computerParts").collection("accessories");

        app.get('/service', async(req, res)=>{
            const query={};
            const cursor= collection.find(query);
            const services= await cursor.toArray();
            res.send(services);
        })
    }
    finally {

    }
}

run().catch(console.dir);



app.get('/', (req, res) => {
    res.send('Utkorsho Academic');
})
app.listen(port, () => {
    console.log('Saiyadul amin', port);
})