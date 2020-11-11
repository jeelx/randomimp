class Communicator { 
    private static INSTANCE: Communicator = new Communicator();

    private constructor() {
        if (Communicator.INSTANCE) { 
            throw new Error('Diese Klasse ist ein Singleton. Nutze Communicator.get()!');
        }
     }

    public static get(): Communicator { 
        return this.INSTANCE;
    }
}

export default Communicator;