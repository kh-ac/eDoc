import PrismaClientSingleton from "./prisma-client";
const prisma = PrismaClientSingleton.getInstance();
class Doctor {
    // Constructor
    constructor(id, firstName, lastName, email, phone, address, specialty, createdAt, updatedAt) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._email = email;
        this._phone = phone;
        this._address = address;
        this._specialty = specialty;
        this._createdAt = createdAt;
        this._updatedAt = updatedAt;
    }
    // Getters and Setters
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get phone() {
        return this._phone;
    }
    set phone(value) {
        this._phone = value;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get specialty() {
        return this._specialty;
    }
    set specialty(value) {
        this._specialty = value;
    }
    get createdAt() {
        return this._createdAt;
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    set updatedAt(value) {
        this._updatedAt = value;
    }
    // Methods
    toString() {
        return `${this._id} ${this._firstName} ${this._lastName} ${this._email} ${this._phone} ${this._address} ${this._specialty} ${this._createdAt} ${this._updatedAt}`;
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
}
export default Doctor;
