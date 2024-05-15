const { getAll, remove, get, save } = require('./model');
const renderForm = require('./form');

async function listAction(request, response) {
  const mobiles = await getAll();
  const pugPath = `${__dirname}/views/list`;
  response.render(pugPath,{mobiles});
}

async function addAction(request, response) {
  if (request.params.id) {
    mobile = await get(parseInt(request.params.id, 10));
  }
    mobile.quantity += 1;
    await save(mobile); // Save the updated stock
    response.redirect(request.baseUrl);
} 
async function minusAction(request, response) {
  if (request.params.id) {
    mobile = await get(parseInt(request.params.id, 10));
  }
  if (mobile.quantity > 0) { // Ensure stock is not already zero
    mobile.quantity -= 1;
    await save(mobile); // Save the updated stock
  } 
  else {
    await remove(mobile.id);
  }
  response.redirect(request.baseUrl);
}
async function formAction(request, response) {
  let mobile = { id: '', timecreate: '', product: '', description: '', price: '' , quantity: '' };
  if (request.params.id) {
    mobile = await get(parseInt(request.params.id, 10));
  }

  const body = renderForm(mobile);
  response.send(body);
}

async function saveAction(request, response) {
  const mobile = {
    id: request.body.id,
    timecreate: request.body.timecreate,
    product: request.body.product,
    description: request.body.description,
    price: request.body.price,
    quantity: request.body.quantity,
  };
  await save(mobile);
  response.redirect(request.baseUrl);
}

module.exports = {listAction, addAction, minusAction, formAction, saveAction}