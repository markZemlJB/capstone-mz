import { Member } from './member';

// group === booth
export interface Booth {
  GroupId: 3;
  GroupName: string;
  OrganizationName: string;
  SponsorName: string;
  SponsorPhone: string;
  SponsorEmail: string;
  MaxGroupSize: number;
  Members: Member[];
}
