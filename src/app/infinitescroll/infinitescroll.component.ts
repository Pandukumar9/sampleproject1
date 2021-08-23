import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinitescroll',
  templateUrl: './infinitescroll.component.html',
  styleUrls: ['./infinitescroll.component.css']
})
export class InfinitescrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // posts = ' '.repeat(100).split('').map((s, i) => i + 1)

  // onScroll() {
  //   const length = this.posts.length
  //   setTimeout(() => {
  //     const p = ' '.repeat(100).split('').map((s, i) => i + 1 + length)

  //     // This approach should be used to avoid creating another memory address to the array
  //     while(p.length) this.posts.push(p.shift())
  //   }, 1000)
  // }

}
