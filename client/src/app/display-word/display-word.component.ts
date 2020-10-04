import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Word } from '../classes/word';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-display-word',
  templateUrl: './display-word.component.html',
  styleUrls: ['./display-word.component.css']
})
export class DisplayWordComponent implements OnInit {
  word : Word;

  constructor(private route: ActivatedRoute, private wordService: WordService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.wordService.getById(params['id']).subscribe(word => {
        this.word = word;
      })
    });
  }

}
