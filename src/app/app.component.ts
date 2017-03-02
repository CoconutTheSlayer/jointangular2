import { Component, OnInit } from '@angular/core';

import * as joint from 'jointjs/dist/joint.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  graph: any;
  paper: any;

  ngOnInit(){
    this.createGraph();
  }

  private createGraph() {
    this.graph = new joint.dia.Graph();
    this.paper = new joint.dia.Paper({ el: $('body'), width: 500, height: 500, model: this.graph });

    let rect = new joint.shapes.basic.Rect({
      position: { x: 100, y: 100 },
      size: { width: 70, height: 30 },
      attrs: { text: { text: 'my rectangle' } }
    });

    let rect2 = new joint.shapes.basic.Rect({
      position: { x: 250, y: 300 },
      size: { width: 70, height: 30 },
      attrs: { text: { text: 'my rectangle2' } }
    });

    let link = new joint.dia.Link({
      source: { id: rect.id },
      target: { id: rect2.id }
    });

    this.graph.addCells([rect, rect2, link]);
  }

}
