<template>
	<panel-item :field="field">
		<template slot="value">
			<span v-if="emptyField">
				&mdash;
			</span>
			<span v-else>
				<strong class="font-bold">{{ field.value }} {{ fieldLabel }}</strong> 
			</span>
		</template>
	</panel-item>
</template>

<script>
	import controlFieldLabels from '../mixins';
	export default {
		props: ['resource', 'resourceName', 'resourceId', 'field'],
		mixins:[controlFieldLabels]
	
	}
</script>
