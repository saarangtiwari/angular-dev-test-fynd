import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ImageDataInterface } from "src/app/interfaces/image-data-intf";

@Component({
  selector: "app-image-editor",
  templateUrl: "./image-editor.component.html",
  styleUrls: ["./image-editor.component.scss"]
})
export class ImageEditorComponent {
  @Input() imageData: ImageDataInterface;
  @Output() updateImage = new EventEmitter();
  @Output() closePopup = new EventEmitter();

  newImageSrc: string = "https://via.placeholder.com/300X150";

  setImage(event) {
    var reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);
    
    reader.onload = (event: Event) => {
      this.newImageSrc = reader.result as string;
    };
  }

  confirmUpdateImage() {
    this.imageData.image_url = this.newImageSrc;
    this.updateImage.next(this.imageData);
  }

  close(){
    this.closePopup.next();
  }
}
