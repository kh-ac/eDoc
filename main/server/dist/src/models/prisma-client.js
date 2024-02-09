import { PrismaClient } from "@prisma/client";
class PrismaClientSingleton {
    constructor() { }
    static getInstance() {
        if (!PrismaClientSingleton.instance) {
            PrismaClientSingleton.instance = new PrismaClient();
        }
        return PrismaClientSingleton.instance;
    }
}
export default PrismaClientSingleton;
