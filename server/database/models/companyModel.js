let companySchema = require('../schemas/companySchema');
const mongoose = require('mongoose');

/* Create Company Model*/
const Company = mongoose.model('Company', companySchema);

module.exports = Company;