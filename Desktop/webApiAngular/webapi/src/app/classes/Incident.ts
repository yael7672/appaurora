import { ContactGuid } from "./ContactGuid";

export class Incident {

    public ContactGuid: string;
    public Description: string;
    public Subject: string;



    constructor(ContactGuid:string, Description:string, Subject:string) {

       this.ContactGuid = ContactGuid;
       this.Description = Description;
       this.Subject=Subject;

    }
}
