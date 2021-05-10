import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { AffiliateService } from '../../../AppModule/Services/affiliate.service';
import { Subject } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { ShowAffiliate } from 'src/app/AppModule/Entities/affiliate/ShowAffiliate.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-affiliates',
  templateUrl: './show-affiliates.component.html',
  styleUrls: ['./show-affiliates.component.css'],
  providers:[DatePipe]
})

export class ShowAffiliatesComponent implements AfterViewInit 
{

  public displayedColumns: string[] = ['identificationCard', 'name', 'lastName',
    'dateTime', 'nacionality', 'sex', 'socialSecurityNumber',
    'registrationDate', 'amountConsumed', 'status', 'planName',
    'coverageAmount', 'inactivate', 'update'];
  
  public dataSource: MatTableDataSource<ShowAffiliate> = new MatTableDataSource<ShowAffiliate>();
  public showComponentVerificate: boolean = false;

  private showAffiliate: ShowAffiliate[];
  private deleteSubject : Subject<Boolean>;
  private navigationExtras: NavigationExtras;

  @ViewChild(MatPaginator) paginator : MatPaginator;

  @ViewChild(MatSort) sort : MatSort;

  constructor( private affiliateService: AffiliateService, private router : Router ) 
  {
    this.showAffiliate = this.affiliateService.getAllAffiliatePrueva();

    this.dataSource = new MatTableDataSource(this.showAffiliate);

   /*this.affiliateService.GetAllAffiliate().subscribe(observer => {

      debugger;

      this.showAffiliate = observer;  

      this.dataSource = new MatTableDataSource(this.showAffiliate);
    }, error => console.log(error)) */
  }


  VerificateChangeStatusRegister(respost: boolean) {

    this.showComponentVerificate = false;

    this.deleteSubject.next(respost);

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  
  ChangeStatusRegister(identity:string) {
    
    this.showComponentVerificate = true;

    this.deleteSubject.subscribe(observer => {

      this.showComponentVerificate = false;

      if (observer) 
      {
        this.affiliateService.ChangeStatus(identity,false).subscribe(observer => 
        {
            alert("Registro desactivado");
        }, error => alert("Error al desactivar este registro."));

      }
    })
  
  }
 

  Update(id: number)
  {
    this.Navegate(id, 'afiliados/actualizar');
  }


  Navegate(id: number, url: string)
  {
    for(var i = 0; i < this.showAffiliate.length; i++) 
    { 
      var affiliate : ShowAffiliate = this.showAffiliate[i];

      if(affiliate.id == id)
      {
        this.navigationExtras = {
          state: {
           showAffiliate: affiliate
          }
        }
    
        this.router.navigate([url], this.navigationExtras);

        break;
      }
    }
  }


}
