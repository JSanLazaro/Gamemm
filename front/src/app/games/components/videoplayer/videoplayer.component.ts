import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent {
  displayUrl:any;
  @Input() videoUrl!:string;
  @Input() videoTitle!:string;
  constructor(private sanitizer:DomSanitizer){
    
  }
  ngOnInit(){
    this.displayUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
    console.log("VideopalyComponent constructor --> videoUrl " + this.videoUrl);
  }
  playVideo(){
    this.displayUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/tgbNymZ7vqY');
    
  }
  closeVideo(){
    $("#modal_video").modal('hide');
    $("#modal_video").find('iframe').attr("src", "");
  }
}
