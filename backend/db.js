const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://waqarmehmoodrana54:OHFxpmiBlsP1jY9h@cluster0.twadwji.mongodb.net/mealmonkey?retryWrites=true&w=majority';

//const mongoURI = 'mongodb://waqarmehmoodrana54:OHFxpmiBlsP1jY9h@ac-1ezhmyg-shard-00-00.twadwji.mongodb.net:27017,ac-1ezhmyg-shard-00-01.twadwji.mongodb.net:27017,ac-1ezhmyg-shard-00-02.twadwji.mongodb.net:27017/mealmonkey?ssl=true&replicaSet=atlas-q556jf-shard-0&authSource=admin&retryWrites=true&w=majority';


const mongoDB = async () => {

    await mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("Connected");

            const fectched_data = mongoose.connection.db.collection("food_items")
            fectched_data.find({}).toArray(async function (err, data) {
                if (err) { console.log(err) }
                else {
                    const foodCategory = await mongoose.connection.db.collection('foodCategory');
                    foodCategory.find({}).toArray(function (err, catData) {

                        //a global variable which we can use and update in our application
                        global.food_items = data;
                        global.foodCategory = catData;
                        //console.log(global.food_items);

                        console.log("data fetched");

                    })
                }
            })

        }
    });

}

module.exports = mongoDB;
