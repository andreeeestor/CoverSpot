import jwt from 'jsonwebtoken';
const JWT_SECRET = "sua_chave_secreta_aqui"; 

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido' });
    }

    const token = authHeader.split(' ')[1];
    
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    req.userType = decoded.tipo;
    
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};

export default authMiddleware;