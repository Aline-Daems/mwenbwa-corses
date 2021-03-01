const MongoClient = require("mongodb").MongoClient;

const uri =
    "mongodb+srv://Auban:corse400@cluster0.syldx.mongodb.net/myFirstDatabase?retryWrites=true&writeConcern=majority";

const getAllTrees = () => {
    const client = new MongoClient(uri, {useUnifiedTopology: true});

    async function run() {
        try {
            await client.connect();
            const database = client.db("LesCorses");
            const collection = database.collection("trees");

            const query = {
                arbotag: {$ne: null},
                circonf: {$ne: null},
                hauteur_totale: {$ne: null},
            };

            const options = {
                projection: {_id: 1, x_lambda: 1, y_phi: 1, nom_complet: 1},
            };

            const trees = await collection.find(query, options);
            const result = await trees.toArray();

            return result;
        } finally {
            await client.close();
        }
    }
    return run();
};

module.exports = {getAllTrees};
