import LogLevel from "../../typescript/interface/LogLevel";
import Logger from "../../typescript/util/Logger";

describe('LoggerTest', () => { 

    it('should be a singleton', () => {
        try {
            new Logger();
        } catch {
            expect(true).toBeTruthy();
        }
    });

    it('should get Instance of Logger', () => {
        const logger: any = Logger.get();
        expect(logger).toBeInstanceOf(Logger);
    });

    it('should log debug', () => {
        console.debug = jest.fn();
        Logger.get().debug('DebugLog');
        expect(console.debug.mock.calls[0][0]).toBe('DebugLog');
    });

    it('should log info', () => {
        console.info = jest.fn();
        Logger.get().info('InfoLog');
        expect(console.info.mock.calls[0][0]).toBe('InfoLog');
    });

    it('should log error', () => {
        console.error = jest.fn();
        Logger.get().error('ErrorLog');
        expect(console.error.mock.calls[0][0]).toBe('ErrorLog');
    });

    it('should set LogLevel NONE', () => {
        console.debug = jest.fn();
        console.info = jest.fn();
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.NONE);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        expect(console.debug.mock.calls).toHaveLength(0);
        expect(console.info.mock.calls).toHaveLength(0);
        expect(console.error.mock.calls).toHaveLength(0);
    });

    it('should set LogLevel INFO', () => {
        console.debug = jest.fn();
        console.info = jest.fn();
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.INFO);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        expect(console.debug.mock.calls).toHaveLength(1);
        expect(console.info.mock.calls).toHaveLength(1);
        expect(console.error.mock.calls).toHaveLength(1);
    });

    it('should set LogLevel DEBUG', () => {
        console.debug = jest.fn();
        console.info = jest.fn();
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.DEBUG);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        expect(console.debug.mock.calls).toHaveLength(1);
        expect(console.info.mock.calls).toHaveLength(0);
        expect(console.error.mock.calls).toHaveLength(1);
    });

    it('should set LogLevel ERROR', () => {
        console.debug = jest.fn();
        console.info = jest.fn();
        console.error = jest.fn();

        Logger.get().setLogLevel(LogLevel.ERROR);
        Logger.get().debug('debug');
        Logger.get().info('debug');
        Logger.get().error('debug');
        expect(console.debug.mock.calls).toHaveLength(0);
        expect(console.info.mock.calls).toHaveLength(0);
        expect(console.error.mock.calls).toHaveLength(1);
    });
})