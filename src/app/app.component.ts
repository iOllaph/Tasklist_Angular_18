import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  inputText = "";

  expand = "";

  diminish = "dot-icon";

  spanDisplay = "block";

  formDisplay = "none";

  constructor() { }



  ngOnInit(): void { }




  appearInput() {
    if (!this.expand) {

      setTimeout(() => {

        this.expand = "expand";

        this.diminish = "";

        this.formDisplay = "flex";

      }, 1);

      window.addEventListener("click", this.onWindowClick);

      this.spanDisplay = "none";


    }


  }




  // Define click event handler for window clicks
  onWindowClick = (event: Event) => {

    // Check if the clicked element is not a child of .arroz

    if (!(event.target as HTMLElement).closest(".checkclick")) {

      this.expand = "";

      this.diminish = "dot-icon";

      this.spanDisplay = "block";

      this.formDisplay = "none";

      // Remove click event listener on window
      window.removeEventListener("click", this.onWindowClick);
    };
  };


  addTask(e: Event) {
    e.preventDefault()



  }



}
