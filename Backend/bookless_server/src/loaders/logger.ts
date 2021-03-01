import winston, { config, transports } from "winston";

const LoggerInstance = winston.createLogger({
    levels: config.npm.levels,
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
    
      winston.format.errors({ stack: true }),
      winston.format.simple(),
    ),
    transports: [new transports.Console()],
  });
  
  export default LoggerInstance;