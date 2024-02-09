// import { PrismaClient } from '@prisma/client';
// import * as fs from 'fs';
// import * as csv from 'csv-parser';

// const prisma = new PrismaClient();

// async function importCsvToDatabase(filePath: string) {
//   try {
//     // Create an empty array to store CSV data
//     const dataList = [];

//     // Read the CSV file
//     fs.createReadStream(filePath)
//       .pipe(csv())
//       .on('data', (row) => {
//         // Push each row into the data list
//         dataList.push({
//           fullNameEn: row.fullNameEn,
//           fullNameAr: row.fullNameAr,
//           workTime: row.workTime,
//           specialties: row.specialties,
//           wilaya: row.wilaya,
//           city: row.city,
//           email: row.email,
//           address: row.address,
//           phone1: row.phoneNumber1,
//           phone2: row.phoneNumber2,
//         });
//       })
//       .on('end', async () => {
//         try {
//           // Insert all data into the database using Prisma
//           await prisma.doctor.createMany({
//             data: dataList,
//             // Specify optional options if needed
//           });

//           console.log('CSV data successfully imported to the database');
//         } catch (error) {
//           console.error('Error inserting data into the database:', error);
//         } finally {
//           // Disconnect from the database
//           await prisma.$disconnect();
//         }
//       });
//   } catch (error) {
//     console.error('Error importing CSV to database:', error);
//   }
// }

// // Specify the path to your CSV file
// const csvFilePath = './doctors.csv';

// // Call the function to import the CSV file into the database
// importCsvToDatabase(csvFilePath);
