class Communicator { 
    private static INSTANCE: Communicator;

    private constructor() { }

    public static get(): Communicator { 
        if (!this.INSTANCE) { 
            this.INSTANCE = new Communicator();
        }
        return this.INSTANCE;
    }
}

export default Communicator;