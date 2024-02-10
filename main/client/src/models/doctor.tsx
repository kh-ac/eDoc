class Doctor {
  // Attributes
  private _id: number;
  private _fullNameEn: string;
  private _fullNameAr: string;
  private _workTime: string;
  private _specialties: string;
  private _wilaya: string;
  private _city: string;
  private _address: string;
  private _email: string;
  private _phone1: string;
  private _phone2: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  // Constructor
  constructor(
    id: number,
    fullNameEn: string,
    fullNameAr: string,
    workTime: string,
    specialties: string,
    wilaya: string,
    city: string,
    address: string,
    email: string,
    phone1: string,
    phone2: string,
    createdAt: Date,
    updatedAt: Date
  ) {
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
  get id(): number {
    return this._id;
  }
  set id(id: number) {
    this._id = id;
  }

  get fullNameEn(): string {
    return this._fullNameEn;
  }
  set fullNameEn(fullNameEn: string) {
    this._fullNameEn = fullNameEn;
  }

  get fullNameAr(): string {
    return this._fullNameAr;
  }
  set fullNameAr(fullNameAr: string) {
    this._fullNameAr = fullNameAr;
  }

  get workTime(): string {
    return this._workTime;
  }
  set workTime(workTime: string) {
    this._workTime = workTime;
  }

  get specialties(): string {
    return this._specialties;
  }
  set specialties(specialties: string) {
    this._specialties = specialties;
  }

  get wilaya(): string {
    return this._wilaya;
  }
  set wilaya(wilaya: string) {
    this._wilaya = wilaya;
  }

  get city(): string {
    return this._city;
  }
  set city(city: string) {
    this._city = city;
  }

  get address(): string {
    return this._address;
  }
  set address(address: string) {
    this._address = address;
  }

  get email(): string {
    return this._email;
  }
  set email(email: string) {
    this._email = email;
  }

  get phone1(): string {
    return this._phone1;
  }
  set phone1(phone1: string) {
    this._phone1 = phone1;
  }

  get phone2(): string {
    return this._phone2;
  }
  set phone2(phone2: string) {
    this._phone2 = phone2;
  }

  get createdAt(): Date {
    return this._createdAt;
  }
  set createdAt(createdAt: Date) {
    this._createdAt = createdAt;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }
  set updatedAt(updatedAt: Date) {
    this._updatedAt = updatedAt;
  }

  // Methods
  public toString(): string {
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
}

export default Doctor;
