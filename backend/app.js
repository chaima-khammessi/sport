const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const Match = require('./models/match');
const Player = require('./models/player');
const user = require('./models/user');
const { url } = require('inspector');

mongoose.connect('mongodb://localhost:27017/jourFSDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')));
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});
app.get('/allMatches', (req, res) => {
    console.log(('well received in BE'));
    Match.find((err, documents) => {
        console.log('All matches', documents);
        res.status(200).json({
            message: 'Here all Matches',
            matches: documents,
        });

    });

});
app.get('/allPlayers', (req, res) => {
    Player.find((err, findedPlayers) => {
        console.log('All Players', findedPlayers);
        if (err) {
            console.log('error', err);
        }
        res.status(200).json({
            message: 'Here all Players',
            players: findedPlayers
        })
    })
})
app.get('/allMatches/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        match => {
            console.log('Finded Match', match);
            res.status(200).json({
                message: 'this is the match',
                match: match
            })
        }
    )

});
app.get('/allPlayers/:id', (req, res) => {
    console.log('this is my id', req.params.id);
    Player.findOne({ _id: req.params.id }).then(
        player => {
            console.log('Finded Player', player);
            res.status(200).json({
                message: 'this is the player',
                player: player
            })
        }
    )
})
app.delete('/allMatches/:id', (req, res) => {
    console.log('delete match by ID', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log(('result', result));
                res.status(200).json({
                    message: 'Match deleted successfully'
                })
            }
        }
    )

});
app.delete('/allPlayers/:id', (req, res) => {
    console.log('delete player by ID', req.params.id);
    Player.deleteOne({ _id: req.params.id }).then(
        result => {
            if (result) {
                console.log('result', result);
                res.status(200).json({
                    message: 'Player deleted successfully'
                });
            }
        }
    );
});
app.post('/allMatches', (req, res) => {
    console.log('match added from FE', req.body);
    const match = new Match({
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
    });
    match.save();

});
app.post('/allPlayers', multer({ storage: storage }).single('img'), (req, res) => {
    const url = req.protocol + '://' + req.get('host');
    const player = new Player({
        name: req.body.name,
        post: req.body.post,
        age: req.body.age,
        img: url + ('/images/' + req.file.filename)

    });
    player.save();
    res.status(200).json({
        message: "player added successfuly"
    })
});


app.put('/allMatches/:id', (req, res) => {
    console.log('Update Match By ID', req.params.id);
});

app.post('/allUsers', (req, res) => {
    console.log('users added from FE', req.body);
    const users = new user({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        pwd: req.body.pwd,
        confirmPwd: req.body.confirmPwd,
        photo: req.body.photo,
    });
    users.save()
});


app.post('/allLogin', (req, res) => {
    console.log('Received user', req.body);
    // search user by email from collections: (req.body.email received from FE)
    user.findOne({ email: req.body.emailLogin }).then(
        x => {
            console.log('Finded user', x);
            if (!x) {
                res.status(401).json({
                    message: '0'
                });
            } else {
                user.findOne({ pwd: req.body.pswLogin }).then(
                    y => {
                        if (!y) {
                            res.status(200).json({
                                message: '1'
                            });
                        } else {
                            res.status(201).json({
                                message: '2',
                                user: y
                            })
                        }
                    }
                )
            }
        }
    )
});
module.exports = app;

