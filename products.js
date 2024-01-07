const Product = require('../models/product');   //calling the class Product

exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.contactUs=(req, res, next) => {
    res.render('contactUs_form', {
      pageTitle: 'Contact us',
      path: '/admin/contactUs_form',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }


exports.getProducts=(req, res, next) => {

    Product.fetchAll( products =>{
        res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
      });
  });

  };

exports.postAddProduct=(req, res, next) => {
    const product = new Product(req.body.title);    //creating new obj product, req.title is the title from the html pg
    product.save();
    res.redirect('/');
  }