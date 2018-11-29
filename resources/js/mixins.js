export default {
	computed: {
		emptyField() {
			return this.field.value == 0 || this.field.value == null;
		},


		fieldLabel() {
			if (! this.field.plural || ! this.field.singular) {
				return ' - ' + this.field.name;
			}

			return  this.field.value > 1 ?  ' - '  +this.field.plural : ' - '  + this.field.singular;
		}
	}
}
