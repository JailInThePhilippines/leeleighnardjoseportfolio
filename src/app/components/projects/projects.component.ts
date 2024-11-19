import { Component, ViewChildren, QueryList, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChildren('mediaVideo') videos!: QueryList<ElementRef<HTMLVideoElement>>;

  ngAfterViewInit() {
    //console.log(this.videos.toArray());
  }
  onHoverStart(index: number) {
    const video = this.videos.toArray()[index]?.nativeElement;
    if (video && video.paused) {
      video.play().catch(error => console.error('Video playback failed:', error));
    }
  }
  
  onHoverEnd(index: number) {
    const video = this.videos.toArray()[index]?.nativeElement;
    if (video && !video.paused) {
      video.pause();
    }
  }
  
}
