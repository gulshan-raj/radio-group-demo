import { LightningElement,track } from 'lwc';

export default class RadiobuttonDemo extends LightningElement {
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
}