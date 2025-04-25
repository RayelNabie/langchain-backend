import { chatStreamService } from '@/services/chat/chatStreamService';
import type { Request, Response } from 'express';

export const handleChatStream = async (req: Request, res: Response): Promise<void> => {
  try {
    res.json({ status: 'success', data: { output: await chatStreamService(req.body.input) } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Chat stream failed' });
  }
};
