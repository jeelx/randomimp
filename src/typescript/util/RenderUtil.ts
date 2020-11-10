class RenderUtil { 
    private static INSTANCE: RenderUtil;

    private constructor() {}

    public static get(): RenderUtil { 
        if (!this.INSTANCE) { 
            this.INSTANCE = new RenderUtil();
        }
        return this.INSTANCE;
    }
}

export default RenderUtil;