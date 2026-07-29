import winston from "winston";

export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || "info",

  defaultMeta: {
    service: process.env.SERVICE_NAME,
  },

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),

  transports: [
    new winston.transports.Console(),

    new winston.transports.Http({
      host: "logstash",
      port: 5050,
      path: "/",
      ssl: false,
    }),
  ],
});