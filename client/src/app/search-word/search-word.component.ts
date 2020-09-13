import { Component, OnInit } from '@angular/core';
import { Word } from '../classes/word';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { WordService } from "../services/word.service";

@Component({
  selector: 'app-search-word',
  templateUrl: './search-word.component.html',
  styleUrls: ['./search-word.component.css']
})
export class SearchWordComponent implements OnInit {
  words: Word[];
  hidden : boolean;

  constructor(private wordService: WordService) {
    this.hidden = true;
  }

  ngOnInit(): void {
  }

  valuechange(newValue) {
    if(newValue.length) {
      this.hidden = false;
      this.wordService.getPartialWord(newValue).subscribe(words => {
        this.words = words;
        this.hidden = true;
      })
    }
    else{
      this.words = [];
    }
  }

}

