import express from 'express';
import MessageController from '../controllers/controller';

const messageRouter = express.Router();

messageRouter.post('/message', handleCreateMessage);
messageRouter.get('/messages', handleGetMessages);
messageRouter.delete('/message/:id', handleDeleteMessage);

async function handleCreateMessage(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const message = await MessageController.createMessage({
      name: req.body.name,
      message: req.body.message,
    });
    res.json(message);
  } catch (error) {
    next(error);
  }
}

async function handleGetMessages(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    const messages = await MessageController.getMessages();
    res.json(messages);
  } catch (error) {
    next(error);
  }
}

async function handleDeleteMessage(req: express.Request, res: express.Response, next: express.NextFunction) {
  try {
    await MessageController.deleteMessage(Number(req.params.id));
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
}

export default messageRouter;
