import { Router } from "express"
import { createPage } from "../controllers/Page.controller"

const router = Router()

router.post("/pages", createPage)

export default router
