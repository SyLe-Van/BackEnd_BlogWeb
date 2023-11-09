/**
 * @api {post} /purchases/create Create New Purchases
 * @apiName create new purchases
 * @apiGroup Admin
 *
 * @apiParam {String}  Name of purchases.
 * @apiParam {String}  Description of purchases.
 * @apiParam {String}  Video of purchases.
 *
 * @apiSuccess {String} name Name of purchases.
 * @apiSuccess {String} decription  Description of purchases.
 * 
 *@apiErrorExample {json} Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Purchases is exists"
 *     }
 */