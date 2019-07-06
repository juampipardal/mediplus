const express = require('express');
const router = express.Router();
const pacientesList = require('../models/list');


//GET HTTP method to /pacientes
router.get('/',(req,res) => {
    pacientesList.getAllLists((err, list) => {
        if (err) {
            res.json({success: false, message: `Failed to load all lists. Error: ${err}`});
        } else {
            res.write(JSON.stringify({success: true, lists:lists},null,2));
            res.end();
        }
    })
});

//POST HTTP method to /pacientes

router.post('/', (req,res,next) => {
        let newList = new newPacientesList({
            name: req.body.name,
            surname: req.body.surname,
            gender: req.body.gender
        });
        pacientesList.addList(newPacientesList, (err, list) => {
            if (err) {
                res.json({success: false, message: `failed to create a new list. Error: ${err}`})
            } else {
                res.json({success: true, message: 'Added new list'});
            }
        })
    });


//DELETE HTTP method to /pacientes. Here, we pass in a params which is the object id.
router.delete('/:id', (req,res,next)=> {

    let id = req.params.id;
    //Call the model method deleteListById
      pacientesList.deleteListById(id,(err,list) => {
          if(err) {
              res.json({success:false, message: `Failed to delete the list. Error: ${err}`});
          }
          else if(list) {
              res.json({success:true, message: "Deleted successfully"});
          }
          else
              res.json({success:false});
      })
  });

module.exports = router;