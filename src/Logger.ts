import { Logger, Container, format, transports } from 'winston';
import moment from 'moment-timezone';

const loggers = new Container();

const appendTimestamp = format((info, opts) => {
  if (opts.tz) {
    { info.timestamp = moment().tz(opts.tz).format(); }
  }
  return info;
});

export function getLogger(category: string, level: string = 'info'): Logger {
  if (!loggers.has(category)) {
    loggers.add(category, {
      level,
      format: format.combine(
        format.label({ label: category }),
        format.splat(),
        appendTimestamp({ tz: 'Asia/Taipei' }),
        format.colorize(),
        format.printf(info => `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`)
      ),
      transports: [
        new transports.Console({ level }),
      ],
    });
  }

  return loggers.get(category);
}
