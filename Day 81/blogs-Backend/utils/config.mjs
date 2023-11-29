import dotenv from 'dotenv';
const result=dotenv.config();

if (result.error) {
    console.error(result.error);
    throw result.error;
  }


export const MONGOURI=process.env.MONGO_URI;
console.log(`got mongo uri: ${MONGOURI}`);
export const PORT=process.env.PORT;

