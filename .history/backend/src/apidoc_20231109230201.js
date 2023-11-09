/**
 * @api {post} /purchases/:create Create New Purchases
 * @apiName CreateItem
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
 * @apiName Delete Item
 * @apiGroup Admin
 *
 * @apiParam {Number} id ID của mục cần xóa.
 *
 * @apiSuccess {String} message Thông báo xác nhận mục đã được xóa.
 * @apiSuccessExample {json} Thành công:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Mục đã được xóa thành công."
 *     }
 *
 * @apiError {Number} statusCode Mã lỗi HTTP.
 * @apiError {String} message Thông báo lỗi.
 * @apiErrorExample {json} Lỗi:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "statusCode": 404,
 *       "message": "Mục không tồn tại."
 *     }
 */