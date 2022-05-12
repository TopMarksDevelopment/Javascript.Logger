# JavaScript Logger

A custom package to log steps/errors throughout your package. There is also a static field that you can use to serialize `catch` errors.

### Links
- [Change log](./CHANGELOG.md)
- [License (MIT)](./LICENSE)

## Usage

Import the package and create a class that extends the `JavascriptLogger` class.
Then provide the body for the two functions and also the 'type' for the `extraDetails` argument (as shown below). _If you don't want a 'type' then just use `object`._

```TS
interface ExtraInfo {
    error?: unknown
}

class MyLogger extends JavascriptLogger<ExtraInfo> {
	logLevel = (): LogLevel => LogLevel.warn;

	logIt = (logLevel: LogLevel, title: string, message?: string | string[], extraDetails: ExtraInfo): void => {
        // consume the information and do stuff
    };
}

const logger = new MyLogger();

// Some code, somewhere
function thisWillAlwaysWork() {
    try
    {
        throw new Error("Whoops, guess not!");
    }
    catch (err)
    {
        logger.logCritical(
            "0x100001 - Critical 1",
            [
                "Oh no, there was a critical error in my program!",
                "The hex above can assist in identifying the location"
            ],
            {
                // Log the error, rather than use properties from it
                error: JSON.parse(JavascriptLogger.convertToJson(err))
            }
        )
    }
}
```

## Functions

### `logLevel`

This specifies the log level to start outputting the messages

**Arguments:** _NONE_  
**Output:** `LogLevel` (_`critical`, `error`, `warn`, `info`, `debug`, `trace`_)

### `logIt`

This is the function that is called when a log occurs that meets the minimum log level specified by `logLevel`

**Arguments:** logLevel: `LogLevel`, title: `string`, message?: `string | string[]`, extraDetails: `T`_(custom type)_  
**Output:** _NONE_

## Built in components

### `JavascriptLogger.convertToJson(object)`
This built in function will convert an object to a JSON string. This feature exists primarily to help with outputting an `Error` (as shown above).

### `ConsoleJavascriptLogger`
This built in class will output straight to the console. You set the log level with it's constructor (as shown below).

```TS
var consoleLogger = new ConsoleJavascriptLogger(LogLevel.info);
```

## Other ideas
**Log to your server:** rather than JS errors being lost to the cosmos with no idea they're happening. Use the logger to send the data to your server! Just remember to secure the access point 😁

**Store the logs:** implement a storage solution that saves all the logs and only outputs certain instances. Then you can have a custom function/command that can process them all to your will at any point! Maybe in a plugin that you can include all the logs when the user wants to raise a GitHub issue 🤷‍♂️