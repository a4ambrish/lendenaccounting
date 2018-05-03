import { Component, OnInit } from '@angular/core';
import { MemberService } from '../shared/member.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  constructor(private memberService : MemberService) { }

  ngOnInit() {
    this.resetForm();
  }
  onSubmit(form: NgForm) {
    
   
    if (form.value.$memberId == null){
      this.memberService.insertMember(form.value);
     
  }
    else
    {
      this.memberService.updateMember(form.value);
    }
    this.resetForm(form);
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.memberService.selectedMember = {
      $memberId: null,
      memberName: '',
      mobile1: '',
      mobile2: '',
      remarks: '',
      createdBy : 'Ambrish-Testing',
      createdOn : new Date()+'',
      displayOrder : 0,
      isActive : true
    }
  }

  onDelete(form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.memberService.deleteMember(form.value.$memberId);
      this.resetForm(form);
    }
  }
}
