<template>
	<Sidenav>
		<SidenavLink link="#" fas-icon="tachometer-alt" nested>
			Dashboard
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<SidenavLink link="../../index.html">
					Dashboard v1
				</SidenavLink>
				<SidenavLink link="../../index2.html">
					Dashboard v2
				</SidenavLink>
				<SidenavLink link="../../index3.html">
					Dashboard v3
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="../widgets.html">
			Widgets
			<span class="right badge badge-danger">New</span>
		</SidenavLink>
		<SidenavLink link="#" fas-icon="copy" nested>
			Layout Options
			<i class="fas fa-angle-left right"></i><span class="badge badge-info right">6</span>
			<template #sublinks>
				<SidenavLink link="../layout/top-nav.html">
					Top Navigation
				</SidenavLink>
				<SidenavLink link="../layout/top-nav-sidebar.html">
					Top Navigation + Sidebar
				</SidenavLink>
				<SidenavLink link="../layout/boxed.html">
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
		<SidenavLink link="#" fas-icon="chart-pie" nested>
			Charts
			<i class="right fas fa-angle-left"></i>
			<template #sublinks>
				<SidenavLink link="../charts/chartjs.html">
					ChartJS
				</SidenavLink>
				<SidenavLink link="../charts/flot.html">
					Flot
				</SidenavLink>
				<SidenavLink link="../charts/inline.html">
					Inline
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#" fas-icon="tree" nested>
			UI Elements
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../UI/general.html">
					General
				</SidenavLink>
				<SidenavLink link="../UI/icons.html">
					Icons
				</SidenavLink>
				<SidenavLink link="../UI/buttons.html">
					Buttons
				</SidenavLink>
				<SidenavLink link="../UI/sliders.html">
					Sliders
				</SidenavLink>
				<SidenavLink link="../UI/modals.html">
					Modals &amp; Alerts
				</SidenavLink>
				<SidenavLink link="../UI/navbar.html">
					Navbar &amp; Tabs
				</SidenavLink>
				<SidenavLink link="../UI/timeline.html">
					Timeline
				</SidenavLink>
				<SidenavLink link="../UI/ribbons.html">
					Ribbons
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#" nested isOpen>
			Forms
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../forms/general.html" isActive>
					General Elements
				</SidenavLink>
				<SidenavLink link="../forms/advanced.html">
					Advanced Elements
				</SidenavLink>
				<SidenavLink link="../forms/editors.html">
					Editors
				</SidenavLink>
				<SidenavLink link="../forms/validation.html">
					Validation
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#" fas-icon="table" nested>
			Tables
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../tables/simple.html">
					Simple Tables
				</SidenavLink>
				<SidenavLink link="../tables/data.html">
					DataTables
				</SidenavLink>
				<SidenavLink link="../tables/jsgrid.html">
					jsGrid
				</SidenavLink>
			</template>
		</SidenavLink>
		<li class="nav-header">EXAMPLES</li>
		<SidenavLink link="../calendar.html">
			Callendar
			<span class="badge badge-info right">2</span></SidenavLink>
		<SidenavLink link="../gallery.html">
			Gallery
		</SidenavLink>
		<SidenavLink link="#" fas-icon="envelope" nested>
			Mailbox
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../mailbox/mailbox.html">
					Inbox
				</SidenavLink>
				<SidenavLink link="../mailbox/compose.html">
					Compose
				</SidenavLink>
				<SidenavLink link="../mailbox/read-mail.html">
					Read
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#" fas-icon="book" nested>
			Pages
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../examples/invoice.html">
					Invoice
				</SidenavLink>
				<SidenavLink link="../examples/profile.html">
					Profile
				</SidenavLink>
				<SidenavLink link="../examples/e-commerce.html">
					E-commerce
				</SidenavLink>
				<SidenavLink link="../examples/projects.html">
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
				<SidenavLink link="../examples/contacts.html">
					Contacts
				</SidenavLink>
			</template>
		</SidenavLink>
		<SidenavLink link="#" fas-icon="plus-square" nested>
			Extras
			<i class="fas fa-angle-left right"></i>
			<template #sublinks>
				<SidenavLink link="../examples/login.html">
					Login
				</SidenavLink>
				<SidenavLink link="../examples/register.html">
					Register
				</SidenavLink>
				<SidenavLink link="../examples/forgot-password.html">
					Forgot Password
				</SidenavLink>
				<SidenavLink link="../examples/recover-password.html">
					Recover Password
				</SidenavLink>
				<SidenavLink link="../examples/lockscreen.html">
					Lockscreen
				</SidenavLink>
				<SidenavLink link="../examples/legacy-user-menu.html">
					Legacy User Menu
				</SidenavLink>
				<SidenavLink link="../examples/language-menu.html">
					Language Menu
				</SidenavLink>
				<SidenavLink link="../examples/404.html">
					Error 404
				</SidenavLink>
				<SidenavLink link="../examples/500.html">
					Error 500
				</SidenavLink>
				<SidenavLink link="../examples/pace.html">
					Pace
				</SidenavLink>
				<SidenavLink link="../examples/blank.html">
					Blank Page
				</SidenavLink>
				<SidenavLink link="../../starter.html">
					Starter Page
				</SidenavLink>
			</template>
		</SidenavLink>
		<li class="nav-header">MISCELLANEOUS</li>
		<SidenavLink link="https://adminlte.io/docs/3.0">
			Documentation
		</SidenavLink>
		<li class="nav-header">LABELS</li>
		<SidenavLink link="#" fas-icon="circle text-danger">
			Important
		</SidenavLink>
		<SidenavLink link="#" fas-icon="circle text-warning">
			Warning
		</SidenavLink>
		<SidenavLink link="#" fas-icon="circle text-info">
			InformationalInformational
		</SidenavLink>
	</Sidenav>
</template>

<script>
import Sidenav from "../src/components/navigation/Sidenav"
import SidenavLink from "../src/components/navigation/SidenavLink"

export default {
	name: "DemoSidenav",
	components: {SidenavLink, Sidenav}
}
</script>

<style scoped>

</style>
