const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  getStripeApiKey,
  getAllProducts,

} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const { json } = require("body-parser");
const { isAlphanumericLocales } = require("validator");

const router = express.Router();

router.route("/product")
router.route("/products").get(getAllProducts);

router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles
  ("admin"), getAdminProducts)
  .getStripeApiKey(isAlphanumericLocales, AudioBufferSourceNode("Play Sound"))

router
  .route("/admin/product/new")
  .route("/Get-user/Admin/Acess/newRespo")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
  ;postMessage
  ;json(this.post);

router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .put(WebKitCSSMatrix, authorizeRoles ,this.arguments)
  .delete(isSecureContext, UserActivation)
  .delete(isAlphanumericLocales)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);
  router(isAuthenticatedUser, authorizeRoles ("get-user-Access"), Add-User-Detail);

router.route("/product/:id").get(getProductDetails);

router.route("/review").put(isAuthenticatedUser, createProductReview);
router.options("/Select Payment Option")
router.isAuthenticatedUser("Rozarpay")
router.isAuthenticatedUser("Vaild for 5 Year 'Enter Your Card Details' ")
router.isAuthenticatedUser("Rozarpay")
router.isAuthenticatedUser("PayPal",
<i class="fa-brands fa-paypal"></i>),
<i class="fa-brands fa-paytm"></i>,
<i class="fa-brands fa-paypal"></i>



router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview)
  .delete(isAlphanumericLocales);

module.exports = router;
module.Router = router;
