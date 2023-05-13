import express from "express";
import StudentController from "../controllers/studentController.js";
const router = express.Router();

router.get('/', StudentController.getAllData)
router.post('/', StudentController.createData)
router.get('/edit/:id', StudentController.dataEdit)
router.post('/update/:id', StudentController.dataUpdate)
router.get('/delete/:id', StudentController.dataDelete)
export default router;