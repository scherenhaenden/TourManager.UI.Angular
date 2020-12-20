import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contacts-service';
import { ContactModel } from '../../../models/contact-model';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {

  public listOfEntites: ContactModel[] = [];
  public rowEntered = null;

  public showExtendedMenu = false;
  public selectedIrems: ContactModel[] = [];

  private timerSelectionInitiated: number;

  constructor(private contactService: ContactService
            , private router: Router) {

  }

  ngOnInit(): void {
    this.loadData();
  }


  public async loadData(): Promise<void>  {

    const value = await this.contactService.getEntites<ContactModel[]>(50, 1);
    this.listOfEntites = value;

  }

  public addNew(): void {

    this.router.navigate(['./contacts/summary/']);

  }


  public mouseEnterRow(rowIndex: number): void{

    this.rowEntered = rowIndex;
  }

  public mouseLeaveRow(rowIndex: number): void {

    if (this.rowEntered === rowIndex) {
    this.rowEntered = null;
    }
  }


  public selectItemStartTimerEitherToEditOrToShowMenu(item: ContactModel, event: Event): void {

    this.timerSelectionInitiated = Date.now();
  }

  public itemMouseRelease(item: ContactModel, event: Event): void{

    const newTime = Date.now();

    if (!this.showExtendedMenu) {
      const result = newTime - this.timerSelectionInitiated;
      if (result < 1000){
        this.selectVenewToEdit(item);
        return;
      }
      this.showDeleteMenu();
    }

    this.selectedIrems.push(item);

  }

  public selectVenewToEdit(item: ContactModel): void {

    const itemToEdit = this.listOfEntites
                  .filter(x => x.firstName === item.firstName)[0];

    const valueId = itemToEdit.id;
    this.router.navigate(['./contacts/summary/' + valueId]);
  }

  public showDeleteMenu(): void {
    this.showExtendedMenu = true;

  }


}
