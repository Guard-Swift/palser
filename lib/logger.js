import winston from 'winston'

/**
 * ロガー作成
 */
export default () => {
  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        level: 'debug', // 出力レベル
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.simple(),
          winston.format.printf(info => {
            return `${info.level} - ${info.message}`
          })
        ),
      }),

      new winston.transports.File({
        level: 'error',
        format: winston.format.combine(
          winston.format.timestamp({ format: 'YYYY-MM-DD: HH:mm:ss' }),
          winston.format.errors({ stack: true }),
          winston.format.printf(info => {
            return `${info.timestamp} - ${info.level} - ${info.message}`
          })
        ),
        filename: '../logs/error.log'
      }),
    ]
  })
}