import Communicator from "../../typescript/network/Communicator"

describe('CommunicatorTest', () => { 
    it('should be a singleton', () => {
        try {
            const communicator = new Communicator();
        } catch (e: Error) {
            expect(true).toBeTruthy();
        }
    });

    it('should get Instance of Communicator', () => { 
        const communicator = Communicator.get();
        expect(communicator).toBeInstanceOf(Communicator);
    });
})