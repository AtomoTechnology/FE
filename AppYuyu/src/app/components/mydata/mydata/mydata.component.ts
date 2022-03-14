import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiController } from 'src/app/controller/ApiController';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-mydata',
  templateUrl: './mydata.component.html',
  styleUrls: ['./mydata.component.css'],
})
export class MydataComponent implements OnInit {
  private ctrl = new ApiController();
  public user: any = null;
  constructor(private gen: GenericService, private actRoute: ActivatedRoute) {
    var idStr = this.actRoute.snapshot.paramMap.get('id')!;
    var id = parseInt(idStr);
    this.getById(id);
  }

  ngOnInit(): void {}
  getById(id: number) {
    this.gen.GetById(id, this.ctrl.user).subscribe((data: any) => {
      this.user = data.data;
    });
  }
}
