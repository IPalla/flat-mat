var expensesModel = require('../model/expenses');

function addExpense(expense) {
    return expensesModel.addExpense(expense.description, expense.amount, expense.creatorId,
        expense.payerId, expense.groupId, expense.splitList);
}

function getExpense(expenseId){
    return expensesModel.getExpense(expenseId);
}

module.exports = {
    addExpense,
    getExpense
};