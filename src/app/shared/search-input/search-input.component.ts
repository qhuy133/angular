import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  faSearch = faSearch
  @Input() search: string = '';
  @Input() placeholder: string = '';
  @Output() getInputValue = new EventEmitter();
  inputFormControl = new FormControl('');


  ngOnInit() {
    this.inputFormControl.valueChanges
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((inputValue: string) => of(inputValue))
      )
      .subscribe((inputValue: string) => {
        this.getInputValue.emit({
          inputValue,
          key: 'param',
        });
      });
  }

  clear() {
    this.search = ''
  }

}
