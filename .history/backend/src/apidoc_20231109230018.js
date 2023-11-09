/**
 * @api {post} /purchases/:create Create New Purchases
 * @apiName CreatePurchases
 * @apiGroup Admin
 *
 * @apiParam {String} Name Name of purchases.
 * @apiParam {String} Description Decription of purchases.
 * @apiParam {Number} Video_ID Video ID of purchases.

 * @apiSuccess {String} Name Nname of the purchases.
 * @apiSuccess {String} Description  Description of the User.
 * @apiSuccess {Number} Video_ID  Video ID of the User.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "Name": "TX07",
 *       "Description": "New Collection",
 *       "Video_ID" : "Nc23"
 *     }
 *
 * @apiError PurchasesExist The Name of the Purchases was existed!.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PurchasesExist"
 *     }
 */
/**
 * @api {DELETE} /me/stored/:purchase Delete Item
 * @apiName DeleteItem
 * @apiGroup Items
 *
 * @apiParam {Number} purchases ID của mục cần xóa.
 *
 * @apiSuccess {String} message Notification purchases is deleted.
 * @apiSuccessExample {json} Successfully:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "The product has been successfully deleted."
 *     }
 *
 * @apiError {Number} statusCode Error HTTP.
 * @apiError {String} message Notification error.
 * @apiErrorExample {json} Error:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "statusCode": 404,
 *       "message": "Product does not exist.",

 *     }
 */