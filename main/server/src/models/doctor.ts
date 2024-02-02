import PrismaClientSingleton from "./prisma-client";

const prisma = PrismaClientSingleton.getInstance();

class Doctor {
  // Attributes
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _email: string;
  private _phone: string;
  private _address: string;
  private _specialty: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  // Constructor
  constructor(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    specialty: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
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
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }
  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(value: string) {
    this._lastName = value;
  }

  get email(): string {
    return this._email;
  }
  set email(value: string) {
    this._email = value;
  }

  get phone(): string {
    return this._phone;
  }
  set phone(value: string) {
    this._phone = value;
  }

  get address(): string {
    return this._address;
  }
  set address(value: string) {
    this._address = value;
  }

  get specialty(): string {
    return this._specialty;
  }
  set specialty(value: string) {
    this._specialty = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
  set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  // Methods
  public toString(): string {
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
  public static async getAllDoctors() {
    return await prisma.doctor.findMany();
  }
}

export default Doctor;
