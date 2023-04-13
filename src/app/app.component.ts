import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  taskArray: any[] = [];

  checkboxesArray: any[] = [];

  taskAlert = "block";

  taskQuantity = this.taskArray.length;

  spanStatus = "";

  spanButton = "add"

  inputSize = "";

  originalSize = "dot-icon";

  spanDisplay = "block";

  formDisplay = "none";

  constructor() { }

  ngOnInit(): void { }

  showEmptyArrayText() {

    if (this.taskArray.length >= 1) {

      this.taskAlert = "none";

    } else {

      this.taskAlert = "block";

    }

  }

  appearInput() {

    if (this.spanButton == "add") {

      if (!this.inputSize) {

        setTimeout(() => {

          this.inputSize = "inputSize";

          this.originalSize = "";

          this.formDisplay = "flex";

        }, 1);

        window.addEventListener("click", this.onWindowClick);

        this.spanDisplay = "none";
      }
    } else {

      this.taskArray = this.taskArray.filter(task => !task.checkBox);

      this.showEmptyArrayText();

      this.spanButton = "add";

    }

  }

  // Define click event handler for window clicks
  onWindowClick = (event: Event) => {

    // Check if the clicked element is not a child of .arroz
    if (!(event.target as HTMLElement).closest(".checkclick")) {

      this.inputSize = "";

      this.originalSize = "dot-icon";

      this.spanDisplay = "block";

      this.formDisplay = "none";

      // Remove click event listener on window
      window.removeEventListener("click", this.onWindowClick);

    };

  };

  addTask(element: any) {

    if (element.value) {

      this.taskArray.push({

        id: 1 + this.taskArray.length,

        text: element.value,

        readOnly: false,

        checkBox: false,

      })

      this.showEmptyArrayText();

      element.value = null

    }

  }

  editTask(item: any) {

    if (item.readOnly === false) {

      return "edit";

    } else {

      return "done";

    }

  }

  checkboxCheck(item: any) {

    if (item.checkBox === false) {

      return "check_box_outline_blank";

    } else {

      return "check_box";

    }

  }

  readonlyStatus(item: any) {

    // Alternate code "  item.readOnly = ! item.readOnly "

    if (item.readOnly === false) {

      item.readOnly = true;

    } else {

      item.readOnly = false;

    }

  }

  checkboxRemove(item: any) {

    item.checkBox = !item.checkBox;

    this.checkboxesArray = this.taskArray.filter(item => item.checkBox === true);

    if (this.checkboxesArray.length >= 1) {

      this.spanButton = "delete";

    } else {

      this.spanButton = "add";

    }

  }

}

