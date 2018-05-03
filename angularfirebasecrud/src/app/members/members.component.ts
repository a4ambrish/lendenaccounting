import { Component, OnInit } from '@angular/core';
import { MemberService } from './shared/member.service'
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {

  constructor(private memberService : MemberService) { }

  ngOnInit() {
  }

}
