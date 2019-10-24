var mongoose = require('mongoose');
// Define schema
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
    description: String,
    amount: Number,
    timestamp: Date,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    payer: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'GroupModel'
    },
    split: [{
        owner: 
            {
            type: Schema.Types.ObjectId,
            ref: 'UserModel'
            },
        amount: Number
    }]
});
var Expense = mongoose.model('ExpenseModel', ExpenseSchema);


async function getExpense(expenseId) {
    return await Expense.findById(expenseId)
        .populate('creator')
        .populate('payer')
        .populate('group')
        .populate('owner')
        .populate('split.owner');
}

function deleteExpense(expenseId) {
    console.log('Deleting expense: ' + expenseId);
    return Expense.remove(expenseId).populate('users').then((xpns, err) => {
        if (err) return undefined;
        return xpns;
    });
}

function addExpense(description, amount, creatorId, payerId, groupId, splitList) {
    return new Expense({
            description,
            amount,
            creator: creatorId,
            payer: payerId,
            group: groupId,
            split: splitList
        })
        .populate('creator')
        .populate('payer')
        .populate('group')
        .populate('split.owner')
        .save().then((grp, err) => {
            if (err) return undefined;
            return grp;
        });
}

// Compile model from schema
module.exports = {
    addExpense,
    deleteExpense,
    getExpense
}