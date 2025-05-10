import { Router } from "express";
import tableController from "../controllers/tableController"; // Importando a instância diretamente

const router = Router();

router.post("/records", (req, res) => tableController.createRecord(req, res));
router.get("/records", (req, res) => tableController.getRecords(req, res));
router.put("/records/:id", (req, res) =>
  tableController.updateRecord(req, res)
);
router.delete("/records/:id", (req, res) =>
  tableController.deleteRecord(req, res)
);

export default router;
