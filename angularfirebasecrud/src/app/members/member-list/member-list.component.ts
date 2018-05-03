import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service'

import { Member } from '../shared/member.model';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  memberlist: Member[];
  constructor(private memberService : MemberService) { }

  ngOnInit() {

    var x = this.memberService.getData();
    x.snapshotChanges().subscribe(item => {
      this.memberlist = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y["$memberId"] = element.key;
        this.memberlist.push(y as Member);
      });
    });
  }
  onItemClick(member : Member){
    this.memberService.selectedMember = Object.assign({},member);
  }
}
