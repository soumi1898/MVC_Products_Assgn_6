const path = require('path');

const express = require('express');

const productsController=require('../controllers/products');

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

//for contact form
router.get('/contactUs_form', productsController.contactUs);

//for contact form
router.get('/success', productsController.success);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);

module.exports=router;





















// const express = require('express');
// const path = require('path');
// const router=express.Router();

// //to go to main page...not complete
// router.get('/',(req,res,next)=>{   //use function takes an array of event handlers
//     console.log("in 1");
//     //res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add products</button></form>');
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'));
// });

// //to go to main add products page
// router.get('/add-product',(req,res,next)=>{   //use function takes an array of event handlers
//     console.log("in the middleware");
//     //res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">Add products</button></form>');
//     res.sendFile(path.join(__dirname,'../','views','add-product.html'))
// });

// router.post('/product',(req,res,next)=>{   //use function takes an array of event handlers
//     console.log(req.body);
//     //res.send('<h1>Hello from admin express.....redirecting</h1>');// the res.redirect won't work after this, b/c both the send & redirect sends a response to the client
//     res.redirect('/');
// });

// module.exports=router;