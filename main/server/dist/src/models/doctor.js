import PrismaClientSingleton from "./prisma-client";
const prisma = PrismaClientSingleton.getInstance();
class Doctor {
    // Constructor
    constructor(id, fullNameEn, fullNameAr, workTime, specialties, wilaya, city, address, email, phone1, phone2, createdAt, updatedAt) {
        this._id = id;
        this._fullNameEn = fullNameEn;
        this._fullNameAr = fullNameAr;
        this._workTime = workTime;
        this._specialties = specialties;
        this._wilaya = wilaya;
        this._city = city;
        this._address = address;
        this._email = email;
        this._phone1 = phone1;
        this._phone2 = phone2;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    // Getters and Setters
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get fullNameEn() {
        return this._fullNameEn;
    }
    set fullNameEn(fullNameEn) {
        this._fullNameEn = fullNameEn;
    }
    get fullNameAr() {
        return this._fullNameAr;
    }
    set fullNameAr(fullNameAr) {
        this._fullNameAr = fullNameAr;
    }
    get workTime() {
        return this._workTime;
    }
    set workTime(workTime) {
        this._workTime = workTime;
    }
    get specialties() {
        return this._specialties;
    }
    set specialties(specialties) {
        this._specialties = specialties;
    }
    get wilaya() {
        return this._wilaya;
    }
    set wilaya(wilaya) {
        this._wilaya = wilaya;
    }
    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }
    get address() {
        return this._address;
    }
    set address(address) {
        this._address = address;
    }
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get phone1() {
        return this._phone1;
    }
    set phone1(phone1) {
        this._phone1 = phone1;
    }
    get phone2() {
        return this._phone2;
    }
    set phone2(phone2) {
        this._phone2 = phone2;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(createdAt) {
        this._createdAt = createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    set updatedAt(updatedAt) {
        this._updatedAt = updatedAt;
    }
    // Methods
    toString() {
        return `Doctor { id: ${this._id}, fullNameEn: ${this._fullNameEn}, fullNameAr: ${this._fullNameAr}, workTime: ${this._workTime}, specialties: ${this._specialties}, wilaya: ${this._wilaya}, city: ${this._city}, address: ${this._address}, email: ${this._email}, phone1: ${this._phone1}, phone2: ${this._phone2}, createdAt: ${this._createdAt}, updatedAt: ${this._updatedAt} }`;
    }
    //   public static fromJSON(json: any): Doctor {
    //     return new Doctor(
    //       json.id,
    //       json.firstName,
    //       json.lastName,
    //       json.email,
    //       json.phone,
    //       json.address,
    //       json.specialty,
    //       json.createdAt,
    //       json.updatedAt,
    //     );
    //   }
    //   public toJSON(): any {
    //     return {
    //       id: this._id,
    //       firstName: this._firstName,
    //       lastName: this._lastName,
    //       email: this._email,
    //       phone: this._phone,
    //       address: this._address,
    //       specialty: this._specialty,
    //       createdAt: this._createdAt,
    //       updatedAt: this._updatedAt,
    //     };
    //   }
    //   public static fromJSONArray(json: any[]): Doctor[] {
    //     return json.map((item) => Doctor.fromJSON(item));
    //   }
    //   public static toJSONArray(json: Doctor[]): any[] {
    //     return json.map((item) => item.toJSON());
    //   }
    //
    static async getAllDoctors() {
        return await prisma.doctor.findMany();
    }
    //
    static async getDoctors({ wilaya, specialty, offset, limit }) {
        try {
            return await prisma.doctor.findMany({
                skip: offset,
                take: limit,
                where: {
                    wilaya: wilaya,
                    specialties: {
                        contains: specialty,
                    },
                },
            });
        }
        catch (error) {
            console.error("Error finding doctors:", error);
        }
    }
    static async getDoctorsCount({ wilaya, specialty }) {
        try {
            return await prisma.doctor.count({
                where: {
                    wilaya: wilaya,
                    specialties: {
                        contains: specialty,
                    },
                },
            });
        }
        catch (error) {
            console.error("Error finding doctors:", error);
        }
    }
}
export default Doctor;
