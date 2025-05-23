const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const showCat = catchAsync(async (req, res) => {
  const cat = {
    imageUrl: '/public/cat.jpg',
    expertDescription: 'The cat is likely in a charming Dutch or Belgian town, as suggested by the cobblestone street, gabled houses, upright bicycle, and flower-lined windows typical of Western European architecture.',
  };
  res.status(httpStatus.CREATED).send(cat);
});

module.exports = {
  showCat,
};