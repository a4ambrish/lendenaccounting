import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Member } from './member.model';

@Injectable()
export class MemberService {
  memberList: AngularFireList<any>;
  selectedMember: Member = new Member();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.memberList = this.firebase.list('members');
    return this.memberList;
  }

  insertMember(member: Member) {
   
    this.memberList.push({
      memberName: member.memberName,
      mobile1: member.mobile1,
      mobile2: member.mobile2,
      remarks : member.remarks,
      createdOn : member.createdOn,
      createdBy : member.createdBy,
      isActive : member.isActive,
      displayOrder : member.displayOrder
          });
  }

  updateMember(member: Member){
     this.memberList.update(member.$memberId,{
      memberName: member.memberName,
      mobile1: member.mobile1,
      mobile2: member.mobile2,
      remarks : member.remarks,
      createdOn : member.createdOn,
      createdBy : member.createdBy,
      isActive : member.isActive,
      displayOrder : member.displayOrder
     })
  }

  deleteMember(key : string){
    this.memberList.remove(key);
  }

}
