/**
 * @api {post} /purchases/:create Create New Purchases
 * @apiName GetUser
 * @apiGroup Admin
 *
 * @apiParam {String} Name Name of purchases.
 * @apiParam {String} Description Decription of purchases.
 * @apiParam {Number} Video_ID Video ID of purchases.

 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */