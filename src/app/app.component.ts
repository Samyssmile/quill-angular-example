import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ContentChange, QuillModule} from 'ngx-quill'
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuillModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'quill-angular-example';
  content: string = '';
  quillConfiguration = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],                          // toggled buttons
      ['blockquote', 'code-block'],

      [{'header': 1}, {'header': 2}],                                      // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],                            // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],                                // outdent/indent
      [{'direction': 'rtl'}],                                              // text direction

      [{'size': ['small', false, 'large', 'huge']}],                       // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],

      [{'color': []}, {'background': []}],                                // dropdown with defaults from theme
      [{'font': ['firacode', 'roboto', 'serfi', 'monospace']}],                     // whitelist of fonts
      [{'align': []}],

      ['clean'],                                                          // remove formatting button

      ['link', 'image', 'video']                                          // link and image, video
    ]
  };

  onContentChanged($event: ContentChange) {
    console.log('editor content changed:', $event.content);
  }
}



