import { LogLevel } from '../Enumerators/LogLevel';
import { JavascriptLogger } from '../index';

export class ConsoleJavascriptLogger extends JavascriptLogger<object> {
	_minimumLevel: LogLevel;

	constructor(logLevel?: LogLevel) {
		super();

		this._minimumLevel = logLevel ?? LogLevel.warn;
	}

	logLevel = (_extraDetails?: object): LogLevel => this._minimumLevel;

	logIt = (logLevel: LogLevel, title: string, message?: string | string[], extraDetails?: object): void => {
		switch (logLevel) {
			case LogLevel.critical:
				console.error(createMessage(`[CRITICAL] ${title}`), extraDetails);
				break;

			case LogLevel.error:
				console.error(createMessage(), extraDetails);
				break;

			case LogLevel.warn:
				console.warn(createMessage(), extraDetails);
				break;

			case LogLevel.info:
				console.info(createMessage(), extraDetails);
				break;

			case LogLevel.debug:
				console.debug(createMessage(), extraDetails);
				break;

			default:
				console.log(createMessage(), extraDetails);
				break;
		}

		function createMessage(customTitle?: string) {
			let sB = customTitle ?? title;

			if (message !== undefined) {
				if (Array.isArray(message)) {
					message.forEach((line) => {
						sB += `\n${line}`;
					});
				} else {
					sB += `\n${message}`;
				}
			}

			return sB;
		}
	};
}
