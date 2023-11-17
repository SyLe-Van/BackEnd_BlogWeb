
class ProfileController {
    // [GET] /Profile
    profile(req, res) {
        res.json(req.cookies)
    }
}

module.exports = new ProfileController;
