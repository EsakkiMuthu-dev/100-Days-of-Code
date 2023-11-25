import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('656198bcd88c98dc78c4');

export const account = new Account(client);
export { ID } from 'appwrite';
