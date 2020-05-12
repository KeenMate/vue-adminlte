export default {
	functional: true,
	props: {
		if: Boolean
	},
	render(h, context) {
		const {children, props} = context

		if (props.if) {
			return children
		} else {
			return children
				.map((child) => {
					if (child.children) return child.children
					return child.componentOptions != null ? child.componentOptions.children : null
				})
				.filter((list) => list) // remove any null and void
		}
	}
}
