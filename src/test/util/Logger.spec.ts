import LogLevel from "../../typescript/interface/LogLevel";
import Logger from "../../typescript/util/Logger";

describe('LoggerTest', () => { 

    it('should be a singleton', () => {
        try {
            const logger = new Logger();
        } catch {
            expect(true).toBeTruthy();
        }
    });

    it('should get Instance of Logger', () => {
        const logger: any = Logger.get();
        expect(logger).toBeInstanceOf(Logger);
    });

    it('should log debug', () => {
        // tslint:disable-next-line: no-console
        console.debug = jest.fn();
        Logger.get().debug('DebugLog');
        // tslint:disable-next-line: no-console
        expect(console.debug.mock.calls[0][0]).toBe('DebugLog');
    });

    it('should log info', () => {
        // tslint:disable-next-line: no-console
        console.info = jest.fn();
        Logger.get().info('InfoLog');
        // tslint:disable-next-line: no-console
        expect(console.info.mock.calls[0][0]).toBe('InfoLog');
    });

    it('should log error', () => {
        // tslint:disable-next-line: no-console
        console.error = jest.fn();
        Logger.get().error('ErrorLog');
        // tslint:disable-next-line: no-console
        expect(console.error.mock.calls[0][0]).toBe('ErrorLog');
    });

    it('should set LogLevel NONE', () => {
        // tslint:disable-next-line: no-console
        console.debug = jest.fn();
        // tslint:disable-next-line: no-console
        console.info = jest.fn();
        // tslint:disable-next-line: no-console
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.NONE);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        // tslint:disable-next-line: no-console
        expect(console.debug.mock.calls).toHaveLength(0);
        // tslint:disable-next-line: no-console
        expect(console.info.mock.calls).toHaveLength(0);
        // tslint:disable-next-line: no-console
        expect(console.error.mock.calls).toHaveLength(0);
    });

    it('should set LogLevel INFO', () => {
        // tslint:disable-next-line: no-console
        console.debug = jest.fn();
        // tslint:disable-next-line: no-console
        console.info = jest.fn();
        // tslint:disable-next-line: no-console
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.INFO);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        // tslint:disable-next-line: no-console
        expect(console.debug.mock.calls).toHaveLength(1);
        // tslint:disable-next-line: no-console
        expect(console.info.mock.calls).toHaveLength(1);
        // tslint:disable-next-line: no-console
        expect(console.error.mock.calls).toHaveLength(1);
    });

    it('should set LogLevel DEBUG', () => {
        // tslint:disable-next-line: no-console
        console.debug = jest.fn();
        // tslint:disable-next-line: no-console
        console.info = jest.fn();
        // tslint:disable-next-line: no-console
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.DEBUG);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        // tslint:disable-next-line: no-console
        expect(console.debug.mock.calls).toHaveLength(1);
        // tslint:disable-next-line: no-console
        expect(console.info.mock.calls).toHaveLength(0);
        // tslint:disable-next-line: no-console
        expect(console.error.mock.calls).toHaveLength(1);
    });

    it('should set LogLevel ERROR', () => {
        // tslint:disable-next-line: no-console
        console.debug = jest.fn();
        // tslint:disable-next-line: no-console
        console.info = jest.fn();
        // tslint:disable-next-line: no-console
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.ERROR);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        // tslint:disable-next-line: no-console
        expect(console.debug.mock.calls).toHaveLength(0);
        // tslint:disable-next-line: no-console
        expect(console.info.mock.calls).toHaveLength(0);
        // tslint:disable-next-line: no-console
        expect(console.error.mock.calls).toHaveLength(1);
    });
})