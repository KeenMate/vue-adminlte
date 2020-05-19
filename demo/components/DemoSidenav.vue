<template>
	<Sidenav>
		<template #brand>
			<a href="../../index3.html" class="brand-link">
				<!--<img alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
				<span class="brand-text font-weight-light">AdminLTE 3</span>
			</a>
		</template>
		<SidenavLink link="#/not-implemented" fas-icon="tachometer-alt" nested>
			Dashboard
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					Dashboard v1
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Dashboard v2
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Dashboard v3
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented">
			Widgets
			<Badge is-danger is-right>New</Badge>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="copy" nested>
			Layout Options
			<i class="fas fa-angle-left right"></i><span class="badge badge-info right">6</span>
			<template #sublinks>
				<SidenavLink link="../layout/top-nav.html">
					Top Navigation
				</SidenavLink>
				<SidenavLink link="../layout/top-nav-sidebar.html">
					Top Navigation + Sidebar
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Boxed
				</SidenavLink>
				<SidenavLink link="../layout/fixed-sidebar.html">
					Fixed Sidebar
				</SidenavLink>
				<SidenavLink link="../layout/fixed-topnav.html">
					Fixed Navbar
				</SidenavLink>
				<SidenavLink link="../layout/fixed-footer.html">
					Fixed Footer
				</SidenavLink>
				<SidenavLink link="../layout/collapsed-sidebar.html">
					Collapsed Sidebar
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="chart-pie" nested>
			Charts
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					ChartJS
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Flot
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Inline
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="tree" nested>
			UI Elements
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					General
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Icons
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Buttons
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Sliders
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Modals &amp; Alerts
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Navbar &amp; Tabs
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Timeline
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Ribbons
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" nested is-open>
			Forms
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented" is-active>
					General Elements
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Advanced Elements
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Editors
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Validation
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="table" nested>
			Tables
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					Simple Tables
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					DataTables
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					jsGrid
				</SidenavLink>
			</template>
		</SidenavLink>
		<li class="nav-header">EXAMPLES</li>
		<SidenavLink link="#/not-implemented">
			Callendar
			<span class="badge badge-info right">2</span></SidenavLink>
		<SidenavLink link="#/not-implemented">
			Gallery
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="envelope" nested>
			Mailbox
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					Inbox
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Compose
				</SidenavLink>
				<SidenavLink link="../mailbox/read-mail.html">
					Read
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="book" nested>
			Pages
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					Invoice
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Profile
				</SidenavLink>
				<SidenavLink link="../examples/e-commerce.html">
					E-commerce
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Projects
				</SidenavLink>
				<SidenavLink link="../examples/project-add.html">
					Project Add
				</SidenavLink>
				<SidenavLink link="../examples/project-edit.html">
					Project Edit
				</SidenavLink>
				<SidenavLink link="../examples/project-detail.html">
					Project Detail
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Contacts
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="plus-square" nested>
			Extras
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="#/not-implemented">
					Login
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Register
				</SidenavLink>
				<SidenavLink link="../examples/forgot-password.html">
					Forgot Password
				</SidenavLink>
				<SidenavLink link="../examples/recover-password.html">
					Recover Password
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Lockscreen
				</SidenavLink>
				<SidenavLink link="../examples/legacy-user-menu.html">
					Legacy User Menu
				</SidenavLink>
				<SidenavLink link="../examples/language-menu.html">
					Language Menu
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Error 404
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Error 500
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Pace
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Blank Page
				</SidenavLink>
				<SidenavLink link="#/not-implemented">
					Starter Page
				</SidenavLink>
			</template>
		</SidenavLink>
		<li class="nav-header">MISCELLANEOUS</li>
		<SidenavLink link="https://adminlte.io/docs/3.0">
			Documentation
		</SidenavLink>
		<li class="nav-header">LABELS</li>
		<SidenavLink link="#/not-implemented" fas-icon="circle text-danger">
			Important
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="circle text-warning">
			Warning
		</SidenavLink>
		<SidenavLink link="#/not-implemented" fas-icon="circle text-info">
			InformationalInformational
		</SidenavLink>
	</Sidenav>
</template>

<script>
export default {
	name: "DemoSidenav"
}
</script>

<style scoped>

</style>
