import {Component, OnInit} from '@angular/core';
import {AuthService} from "../shared/services/auth.service";
import {UserService} from "../shared/services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {LineService} from "../shared/services/line.service";
import {v4 as uuid} from 'uuid';
import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'app-addline',
  templateUrl: './addline.component.html',
  styleUrls: ['./addline.component.scss']
})
export class AddlineComponent implements OnInit{
  userId: string = "";
  types: string[] = ["Tram","Bus","Trolley","Metro","SRL"];

  lineForm = new FormGroup({
    type: new FormControl(''),
    linenumber: new FormControl(),
    linestart: new FormControl(''),
    lineend: new FormControl('')
  })

  constructor(private as: AuthService,
              private us: UserService,
              private router: Router,
              private ls: LineService,
              private sb: MatSnackBar) {
  }

  ngOnInit(): void {
    this.as.userLoggedIn().subscribe(curruser => {
      if (curruser != null) {
        this.us.getUserByID(curruser.uid as string).subscribe(curruserr => {
          this.userId = curruserr.id;
        }).unsubscribe();
      }
    }).unsubscribe();
  }

  onSubmit() {
    const l = {
      id: uuid(),
      uploadDate: Date.now(),
      type: this.lineForm.get('type')?.value as string,
      lineNumber: this.lineForm.get('linenumber')?.value as number,
      lineStart: this.lineForm.get('linestart')?.value as string,
      lineEnd: this.lineForm.get('lineend')?.value as string
    }
    this.ls.createOrUpdateLine(l).then(sess => {
      this.lineForm.reset();
      this.sb.open("Járat sikeresen hozzáadva!",``,{duration: 3500});
    }).catch(e => {
      console.error(e);
    })
  }

  back() {
    this.router.navigateByUrl("/menetrend");
  }
}
