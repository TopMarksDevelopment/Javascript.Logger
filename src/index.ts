import { LogLevel } from './Enumerators/LogLevel';

export abstract class JavascriptLogger<T> {
	abstract logIt(logLevel: LogLevel, title: string, message?: string | string[], extraDetails?: T): void;
	abstract logLevel(): LogLevel;

	log = (logLevel: LogLevel, title: string, message?: string[] | string, extraDetails?: T): void => {
		if (logLevel <= this.logLevel()) {
			this.logIt(logLevel, title, message, extraDetails);
		}
	};

	logCritical = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.critical, title, message, extraDetails);

	logError = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.error, title, message, extraDetails);

	logWarning = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.warn, title, message, extraDetails);

	logInfo = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.info, title, message, extraDetails);

	logDebug = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.debug, title, message, extraDetails);

	logTrace = (title: string, message?: string[] | string, extraDetails?: T): void =>
		this.log(LogLevel.trace, title, message, extraDetails);

	static convertToJson(obj: unknown): string {
		return obj instanceof Error ? JSON.stringify(obj, Object.getOwnPropertyNames(obj)) : JSON.stringify(obj);
	}
}

export { LogLevel } from './Enumerators/LogLevel';
export { ConsoleJavascriptLogger } from './Classes/ConsoleJavascriptLogger';
