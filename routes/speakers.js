const router = require("express").Router();
// Controllers
const {
    createSpeakers,
    getSpeakers,
    updateSpeakers,
    deleteSpeakers,
} = require("../controllers/speakers");
// Middleware
const { protect, authorize } = require("../middleware/auth");
const { reqFilter } = require("../middleware/filter");
const { getS3Middleware } = require("../middleware/s3client");
const getUploadMiddleware = require("../middleware/upload");

router
    .route("/")
    .post(
        getUploadMiddleware("uploads/speakers", ["photo"]),
        getS3Middleware(["photo"]),
        createSpeakers
    )
    .get(reqFilter, getSpeakers)
    .put(
        getUploadMiddleware("uploads/speakers", ["photo"]),
        getS3Middleware(["photo"]), updateSpeakers
    )
    .delete(deleteSpeakers);

module.exports = router;
