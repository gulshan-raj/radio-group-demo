import { LightningElement,track } from 'lwc';

export default class RadiobuttonDemo extends LightningElement {
  /*Problem : Passing wrong value to radio group*/   
  @track selectedRadioOption;
    @track radioOptions = [
        {
          label: "First",
          value: "1",
        },
        {
          label: "Second",
          value: "2",
        },
    ];

    handleRadioOptionChange(event) {
        if (event.detail.value === "1") {
          this.selectedRadioOption = "First"
        } else{
            this.selectedRadioOption = "Second"
        }
    }

    /*Solution:  Passing correct value to radio group*/
    /*
    handleRadioOptionChange(event) {
        if (event.detail.value === "1") {
          this.selectedRadioOption = "1"
        } else{
            this.selectedRadioOption = "2"
        }
    }
    */


    /*Problem : Passing Boolean values to radio group */
    @track selectedBooleanRadioOption;
    @track radioBooleanOptions = [
      {
        label: "Yes",
        value: true,
      },
      {
        label: "No",
        value: false,
      },
  ];

  handleRadioBooleanOptionChange(event) {
      if (event.detail.value === "Yes") {
        this.selectedRadioOption = true
      } else{
          this.selectedRadioOption = false
      }
  }

  /*Solution: Passing Boolean as String to radio group*/
  /*
  @track selectedBooleanRadioOption;
    @track radioBooleanOptions = [
      {
        label: "Yes",
        value: "true",
      },
      {
        label: "No",
        value: "false",
      },
  ];

  handleRadioBooleanOptionChange(event) {    
      if (event.detail.value === "Yes") {
        this.selectedRadioOption = "true";
      } else{
          this.selectedRadioOption = "false";
      }
  }
  */
}