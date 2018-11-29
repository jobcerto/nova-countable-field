<template>
	<span v-if="emptyField">
		&mdash;
	</span>
	<span v-else>
		<strong class="font-bold">{{ field.value }} {{ fieldLabel }}</strong> 
	</span>
</template>

<script>
	import controlFieldLabels from '../mixins';
	export default {
		props: ['resourceName', 'field'],
		mixins:[controlFieldLabels]
	}
</script>
