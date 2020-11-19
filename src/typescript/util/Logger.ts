import LogLevel from "../interface/LogLevel";

class Logger { 

    private static INSTANCE: Logger = new Logger();
    private logLevel: LogLevel;

    private constructor() { 
        if (Logger.INSTANCE) { 
            throw new Error('Diese Klasse ist ein Singleton. Nutze Logger.get()!');
        }
        // Default Einstellung
        this.logLevel = LogLevel.INFO;
    }

    public static get(): Logger { 
        return this.INSTANCE;
    }

    public debug(...msg: any): void { 
        if (this.logLevel < 2) { 
            // tslint:disable-next-line: no-console
            console.debug(...msg);
        }
    }

    public info(...msg: any): void { 
        if (this.logLevel === 0) {
            // tslint:disable-next-line: no-console
            console.info(...msg);
        }
    }

    public error(...msg: any): void { 
        if (this.logLevel < 3) {
            // tslint:disable-next-line: no-console
            console.error(...msg);
        }
    }

    public warn(...msg: any): void { 
        if (this.logLevel < 3) {
            // tslint:disable-next-line: no-console
            console.warn(...msg);
        }
    }

    public setLogLevel(level: LogLevel): void { 
        this.logLevel = level;
    }

}

export default Logger;