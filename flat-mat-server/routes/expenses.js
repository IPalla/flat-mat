var express = require('express');
var router = express.Router();
var expensesService = require('../services/expenses');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   expensesService.getAllUsers().then(xpnss=>res.send(usrs));
// });

// Create new user
router.post('/', (req, res, next) => {
  console.log('Adding expense ' + req.body);
  expensesService.addExpense(req.body).then(xpns=>{
      res.status(xpns === undefined ? 500 : 200).send(xpns);
  });
});

// Get expense by id
router.get('/:expenseId', async function(req, res, next){
  let expense = await expensesService.getExpense(req.params.expenseId);
  res.status(200).send(expense);
});

module.exports = router;
