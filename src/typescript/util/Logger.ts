import LogLevel from "../interface/LogLevel";

class Logger { 

    private static INSTANCE: Logger;
    private logLevel: LogLevel;

    private constructor() { 
        // Default Einstellung
        this.logLevel = LogLevel.INFO;
    }

    public static get(): Logger { 
        if (!this.INSTANCE) { 
            this.INSTANCE = new Logger();
        }
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

    public setLogLevel(level: LogLevel): void { 
        this.logLevel = level;
    }

}

export default Logger;