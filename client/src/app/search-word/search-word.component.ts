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

  constructor(private wordService: WordService) { }

  ngOnInit(): void {
  }

  valuechange(newValue) {
    this.wordService.getPartialWord(newValue).subscribe(words => {
      this.words = words;
    })
  }

}

