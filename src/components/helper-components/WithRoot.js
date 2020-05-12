export default {
	functional: true,
	name: "WithRoot",
	props: {
		if: Boolean
	},
	render(h, context) {
		const {children, props} = context

		return props.if
			? children
			: children
				.map((child) => {
					if (child.children) return child.children
					return child.componentOptions != null ? child.componentOptions.children : null
				})
				.filter((list) => list)
	}
}
