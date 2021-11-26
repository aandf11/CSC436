var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const Todo = require('../models/Todo')

 const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQCCHv5sfIOEYf+4TNLfoUIre5GcpJGxb2t1c/TWOvFjE2x1VMwJ
bGzurdeeUss+PcItjuTNixOGNx7YO+HLZkLoW6WXlv9LWtHnbZvpzTZCTrfDxA4B
n/w3NEFp3tiu+CV8QRphvU1kYTbUo4+3Ko9eVNtt/BfLxsSpqQUaraunxQIDAQAB
AoGBAIBZnDNcusnpdLnRpawLP97uW5p8xm2UbxYDFD4BFDvbW/98bmrZNbZVajt0
haBWgOQ5cD3DcrXQRy+aGcZtj45ytqn2XgXpEiklq24cPflNB+1/BDxqylNT/CJf
wpi0vAKRqZRumF66mpeXy++3aaoLrIEcwyXRLU7HOCHf2wC9AkEA+1srhI5TXtCP
3TuN/vTksESYS4mJzKwi4sfbjEqq4ZyKwIsgHWhiJIVqxVl7OgSBgOkb/Fxcgu58
gn8rZyRw+wJBAISGbDnye3mPQkh6iylnheGTkrjv8nglB10TeKlE2fmhoR4cdfz4
JokN3XIWYZAj9TZ6teo4TUg8XNoEwJD4bj8CQQCcw+3OTJ3+ooE3b69N9hqzPPTn
F67T8gAIBLIPO3p8H5ACKkMrVDDxqiw/TWGne6vxZHHJ4SjpmCgbk4jUWUwFAkAk
UEk7n6wh5RV+ksWrNMjExRFBR86jCVJ5OKqph0pLUvS5MYdLKBw3FeuGJYfaXWAF
654JbiAPGStAOmkh0FE1AkEA8xkuzjVyHhsMG8kni0+h4iVyGc5GKZfvHQ23wzoN
I6lRcdmQQMSrPMfNne1bxtOSFdbZhNosi5uoHZcGKYeBWQ==
-----END RSA PRIVATE KEY-----
`

//const privateKey = process.env.JWT_PRIVATE_KEY;


router.use(function(req, res, next) {
      console.log(req.header("Authorization"))
      if (req.header("Authorization")) {
          try {
              req.payload = jwt.verify(req.header("Authorization"), privateKey, { algorithms: ['RS256'] })
              console.log(req.payload)
          } catch(error) {
              return res.status(401).json({"error": error.message});
          }
      } else {
          return res.status(401).json({"error": "Unauthorized"});
      }
      next()
  })

router.get('/', async function(req, res, next) {
    const todos = await Todo.find().where('author').equals(req.payload.id).exec()
    return res.status(200).json({"todos": todos})
});


router.get('/:todoId', async function(req, res, next) {
  //const posts = await Post.find().where('author').equals(req.payload.id).exec()
  
  const todo = await Todo.findOne().where('_id').equals(req.payload.id).exec()
  
  return res.status(200).json({todo})
});


// router.patch('/:todoId', async function (req, res, next) {
//     const todo = await Todo.findByIdAndUpdate(req.params.todoId, {
//         "isComplete": req.body.isComplete,
//         "dateCompleted": req.body.dateCompleted
//     }).exec()
//     return res.status(200).json({"todo": todo})
// })

router.patch('/:todoId', async function (req, res, next) {
    const todo = await Todo.findByIdAndUpdate(req.params.todoId, {
       // "isComplete": req.body.isComplete,
        "dateCompleted": req.body.dateCompleted
    }).exec()
    return res.status(200).json({"todo": todo})
})

router.delete('/:todoId', async function (req, res, next) {
    const todo = await Todo.findByIdAndDelete(req.params.todoId).exec()
    return res.status(200).json({"todo": todo})
})




router.post('/', async function (req, res) {
  const todo = new Todo({
    // "title": req.body.title,
    // "description": req.body.description,
    // "dateCreated" : req.body.dateCreated,
    // "complete" : req.body.complete,
    // "dateCompleted" : req.body.dateCompleted,
    // "author": req.payload.id

    "title": req.body.title,
    "description": req.body.description,
    "dateCreated" : req.body.dateCreated,
   // "complete" : req.body.complete,
    "dateCompleted" : req.body.dateCompleted,
    "author": req.payload.id
    })

    await todo.save().then( savedTodo => {
        return res.status(201).json({
            // "id": savedTodo._id,
            // "title": savedTodo.title,
            // "description": savedTodo.description,
            // "dateCreated" : req.body.dateCreated,
            // "complete" : req.body.complete,
            // "dateCompleted" : req.body.dateCompleted,
            // "author": savedTodo.author


            "id": savedTodo._id,
            "title": savedTodo.title,
            "description": savedTodo.description,
            "dateCreated" : savedTodo.dateCreated,
           // "complete" : savedTodo.complete,
            "dateCompleted" : savedTodo.dateCompleted,
            "author": savedTodo.author
        })
    }).catch( error => {
        return res.status(500).json({"error": error.message})
    });
})

module.exports = router;