class RenderUtil { 
    private static INSTANCE: RenderUtil = new RenderUtil();

    private constructor() { 
        if (RenderUtil.INSTANCE) { 
            throw new Error('Diese Klasse ist ein Singleton. Nutze RenderUtil.get()!');
        }
    }

    public static get(): RenderUtil { 
        return this.INSTANCE;
    }
}

export default RenderUtil;