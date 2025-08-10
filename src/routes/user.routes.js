import { Router } from "express";
const router = Router();
import { registerUser} from "../controllers/users.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

// Route to register a user
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }, 
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
    )

export default router