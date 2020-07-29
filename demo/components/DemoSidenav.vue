<template>
	<fragment>
		<template #brand>
			<a href="../../index3.html" class="brand-link">
				<!--<img alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
				<span class="brand-text font-weight-light">AdminLTE 3</span>
			</a>
		</template>
		<sidenav-link to="#/not-implemented" fas-icon="tachometer-alt" nested>
			Dashboard
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">Dashboard v1</sidenav-link>
				<sidenav-link to="#/not-implemented">Dashboard v2</sidenav-link>
				<sidenav-link to="#/not-implemented">Dashboard v3</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented">
			Widgets
			<badge is-danger is-right>New</badge>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="copy" nested>
			Layout Options
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right">6</span>
			<template #sublinks>
				<sidenav-link to="../layout/top-nav.html">Top Navigation</sidenav-link>
				<sidenav-link to="../layout/top-nav-sidebar.html"
					>Top Navigation + Sidebar</sidenav-link
				>
				<sidenav-link to="#/not-implemented">Boxed</sidenav-link>
				<sidenav-link to="../layout/fixed-sidebar.html"
					>Fixed Sidebar</sidenav-link
				>
				<sidenav-link to="../layout/fixed-topnav.html"
					>Fixed Navbar</sidenav-link
				>
				<sidenav-link to="../layout/fixed-footer.html"
					>Fixed Footer</sidenav-link
				>
				<sidenav-link to="../layout/collapsed-sidebar.html"
					>Collapsed Sidebar</sidenav-link
				>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="chart-pie" nested>
			Charts
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">ChartJS</sidenav-link>
				<sidenav-link to="#/not-implemented">Flot</sidenav-link>
				<sidenav-link to="#/not-implemented">Inline</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="tree" nested>
			UI Elements
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">General</sidenav-link>
				<sidenav-link to="#/not-implemented">Icons</sidenav-link>
				<sidenav-link to="#/not-implemented">Buttons</sidenav-link>
				<sidenav-link to="#/not-implemented">Sliders</sidenav-link>
				<sidenav-link to="#/not-implemented">Modals &amp; Alerts</sidenav-link>
				<sidenav-link to="#/not-implemented">Navbar &amp; Tabs</sidenav-link>
				<sidenav-link to="#/not-implemented">Timeline</sidenav-link>
				<sidenav-link to="#/not-implemented">Ribbons</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" nested is-open>
			Forms
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented" is-active
					>General Elements</sidenav-link
				>
				<sidenav-link :to="{ name: 'advanced-elements' }"
					>Advanced Elements</sidenav-link
				>
				<sidenav-link to="#/not-implemented">Editors</sidenav-link>
				<sidenav-link to="#/not-implemented">Validation</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="table" nested>
			Tables
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">Simple Tables</sidenav-link>
				<sidenav-link to="#/not-implemented">DataTables</sidenav-link>
				<sidenav-link to="#/not-implemented">jsGrid</sidenav-link>
			</template>
		</sidenav-link>
		<li class="nav-header">EXAMPLES</li>
		<sidenav-link to="#/not-implemented">
			Callendar
			<span class="badge badge-info right">2</span>
		</sidenav-link>
		<sidenav-link to="#/not-implemented">Gallery</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="envelope" nested>
			Mailbox
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">Inbox</sidenav-link>
				<sidenav-link to="#/not-implemented">Compose</sidenav-link>
				<sidenav-link to="../mailbox/read-mail.html">Read</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="book" nested>
			Pages
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">Invoice</sidenav-link>
				<sidenav-link to="#/not-implemented">Profile</sidenav-link>
				<sidenav-link to="../examples/e-commerce.html">E-commerce</sidenav-link>
				<sidenav-link to="#/not-implemented">Projects</sidenav-link>
				<sidenav-link to="../examples/project-add.html"
					>Project Add</sidenav-link
				>
				<sidenav-link to="../examples/project-edit.html"
					>Project Edit</sidenav-link
				>
				<sidenav-link to="../examples/project-detail.html"
					>Project Detail</sidenav-link
				>
				<sidenav-link to="#/not-implemented">Contacts</sidenav-link>
			</template>
		</sidenav-link>
		<sidenav-link to="#/not-implemented" fas-icon="plus-square" nested>
			Extras
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<sidenav-link to="#/not-implemented">Login</sidenav-link>
				<sidenav-link to="#/not-implemented">Register</sidenav-link>
				<sidenav-link to="../examples/forgot-password.html"
					>Forgot Password</sidenav-link
				>
				<sidenav-link to="../examples/recover-password.html"
					>Recover Password</sidenav-link
				>
				<sidenav-link to="#/not-implemented">Lockscreen</sidenav-link>
				<sidenav-link to="../examples/legacy-user-menu.html"
					>Legacy User Menu</sidenav-link
				>
				<sidenav-link to="../examples/language-menu.html"
					>Language Menu</sidenav-link
				>
				<sidenav-link to="#/not-implemented">Error 404</sidenav-link>
				<sidenav-link to="#/not-implemented">Error 500</sidenav-link>
				<sidenav-link to="#/not-implemented">Pace</sidenav-link>
				<sidenav-link to="#/not-implemented">Blank Page</sidenav-link>
				<sidenav-link to="#/not-implemented">Starter Page</sidenav-link>
			</template>
		</sidenav-link>
		<li class="nav-header">MISCELLANEOUS</li>
		<sidenav-link to="https://adminlte.io/docs/3.0">Documentation</sidenav-link>
		<li class="nav-header">LABELS</li>
		<sidenav-link to="#/not-implemented" fas-icon="circle text-danger"
			>Important</sidenav-link
		>
		<sidenav-link to="#/not-implemented" fas-icon="circle text-warning"
			>Warning</sidenav-link
		>
		<sidenav-link to="#/not-implemented" fas-icon="circle text-info"
			>Informational</sidenav-link
		>
	</fragment>
</template>

<script>
export default {
	name: "DemoSidenav",
}
</script>

<style scoped>
</style>
