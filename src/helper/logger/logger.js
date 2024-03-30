const winston = require('winston');
const options={
    level:"info",
    transports:[

        new winston.transports.File({filename:'src/helper/logger/error.log',
        level:'info',
        maxFiles:5,
        maxsize:5242880
    
    })
    ]


}

const logger=winston.createLogger(options)
logger.info('Winston logger')