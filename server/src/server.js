import express from 'express';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import sequelize from './config/db.js';
import estabelecimentoRoutes from "./routes/estabelecimentoRoutes.js"
import bandaCoverRoutes from "./routes/bandaRoutes.js"
import authRoutes from './routes/authRoutes.js';
import Mensagem from './models/Mensagem.js'; // Create this model

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Adjust in production
    methods: ["GET", "POST"]
  }
});

app.use(cors());
app.use(express.json());

app.use('/api', estabelecimentoRoutes);
app.use('/api', bandaCoverRoutes);
app.use('/api/auth', authRoutes);

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // Join a specific room (chat)
  socket.on('join_chat', async (chatInfo) => {
    const { chatId, userId } = chatInfo;
    socket.join(chatId);

    // Fetch previous messages
    const mensagens = await Mensagem.findAll({
      where: { chatId },
      order: [['createdAt', 'ASC']],
      limit: 50
    });
    socket.emit('previous_messages', mensagens);
  });

  // Sending a message
  socket.on('send_message', async (messageData) => {
    try {
      const novaMensagem = await Mensagem.create({
        chatId: messageData.chatId,
        remetanteId: messageData.userId,
        conteudo: messageData.message,
        tipo: messageData.userType // 'estabelecimento' or 'banda'
      });

      // Broadcast message to the specific chat room
      io.to(messageData.chatId).emit('receive_message', novaMensagem);
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Banco de dados sincronizado');
    const PORT = process.env.PORT || 3000;
    server.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });

export default app;