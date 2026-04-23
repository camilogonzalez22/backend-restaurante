import { Router } from "express";
import UserRouter from "../../modules/users/users.routes";
import AuthRouter from "../../modules/auth/auth.routes";
import ProjectsRouter from "../../modules/projects/projects.routes";
import TasksRouter from "../../modules/tasks/tasks.routes";
import CommentsRouter from "../../modules/comments/comments.routes";
import ClientsRouter from "../../modules/clients/clients.routes";
import SalesRouter from "../../modules/sales/sales.routes";

const router = Router();

router.use('/auth', AuthRouter);
router.use('/users', UserRouter);
router.use('/projects', ProjectsRouter);
router.use('/tasks', TasksRouter);
router.use('/comments', CommentsRouter); 
router.use('/clients', ClientsRouter);
router.use('/sales', SalesRouter);



export default router;