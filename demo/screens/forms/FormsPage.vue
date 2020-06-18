<template>
	<page>
		<template #header>
			<PageHeader
				title="General Form"
				far icon="copy"
			/>
		</template>
		<div class="row">
			<!-- left column -->
			<div class="col-md-6">
				<!-- general form elements -->
				<card title="Quick Example" is-info>
					<form-input v-model="textValue" type="email" input-id="exampleInputEmail1" placeholder="Enter email" />
					<form-input
						v-model="textValue"
						type="password"
						input-id="exampleInputPassword1"
						label="Password"
						placeholder="Password"
						is-invalid
					>
						<template #invalid-msg>
							Your password must be at least 5 characters long
						</template>
					</form-input>
					<form-input v-model="textValue" type="password" label="Password" placeholder="Password" />
					<div class="form-group">
						<label for="exampleInputFile">File input</label>
						<div class="input-group">
							<div class="custom-file">
								<input type="file" class="custom-file-input" id="exampleInputFile">
								<label class="custom-file-label" for="exampleInputFile">Choose file</label>
							</div>
							<div class="input-group-append">
								<span class="input-group-text" id="">Upload</span>
							</div>
						</div>
					</div>
					<checkbox input-id="exampleCheck1">Check me out</checkbox>

					<template #footer>
						<button type="submit" class="btn btn-primary">Submit</button>
					</template>
				</card>

				<!-- Form Element sizes -->
				<card title="Different Height" is-success>
					<form-input v-model="textValue" placeholder=".form-control-lg" size-large />
					<br>
					<form-input v-model="textValue" placeholder="Default input" />
					<br>
					<form-input v-model="textValue" placeholder=".form-control-sm" is-small />
				</card>

				<card title="Different Width" is-danger>
					<div class="row">
						<div class="col-3">
							<form-input v-model="textValue" placeholder=".col-3" />
						</div>
						<div class="col-4">
							<form-input v-model="textValue" placeholder=".col-4" />
						</div>
						<div class="col-5">
							<form-input v-model="textValue" placeholder=".col-5" />
						</div>
					</div>
				</card>

				<card title="Input Addon" is-info>
					<form-input v-model="textValue" class="mb-3" placeholder="Username">
						<template #prepend>
							<span class="input-group-text">@</span>
						</template>
					</form-input>
					<form-input v-model="textValue" class="mb-3">
						<template #append>
							<span class="input-group-text">.00</span>
						</template>
					</form-input>
					<form-input v-model="textValue" class="mb-3">
						<template #prepend>
							<span class="input-group-text">$</span>
						</template>
						<template #append>
							<span class="input-group-text">.00</span>
						</template>
					</form-input>

					<h4>With icons</h4>
					<form-input v-model="textValue" class="mb-3" type="email" placeholder="Email">
						<template #prepend>
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						</template>
					</form-input>
					<form-input v-model="textValue" class="mb-3">
						<template #append>
							<span class="input-group-text"><i class="fas fa-check"></i></span>
						</template>
					</form-input>
					<form-input v-model="textValue">
						<template #prepend>
							<span class="input-group-text">
								<i class="fas fa-dollar-sign"></i>
							</span>
						</template>
						<template #append>
							<div class="input-group-text"><i class="fas fa-ambulance"></i></div>
						</template>
					</form-input>

					<h5 class="mt-4 mb-2">With checkbox and radio inputs</h5>
					<div class="row">
						<div class="col-lg-6">
							<form-input v-model="textValue">
								<template #prepend>
									<span class="input-group-text">
										<!--<input type="checkbox">-->
										<checkbox :value="true"></checkbox>
									</span>
								</template>
							</form-input>
						</div>
						<!-- /.col-lg-6 -->
						<div class="col-lg-6">
							<form-input v-model="textValue">
								<template #prepend>
									<span class="input-group-text"><input type="radio"></span>
								</template>
							</form-input>
						</div>
						<!-- /.col-lg-6 -->
					</div>
					<!-- /.row -->

					<h5 class="mt-4 mb-2">With buttons</h5>
					<p>Large: <code>.input-group.input-group-lg</code></p>
					<form-input v-model="textValue" is-large>
						<template #prepend>
							<button ref="dropdownToggle" type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
								Action
							</button>
							<ul class="dropdown-menu">
								<li class="dropdown-item"><a href="#">Action</a></li>
								<li class="dropdown-item"><a href="#">Another action</a></li>
								<li class="dropdown-item"><a href="#">Something else here</a></li>
								<li class="dropdown-divider"></li>
								<li class="dropdown-item"><a href="#">Separated link</a></li>
							</ul>
						</template>
					</form-input>

					<p>Normal</p>
					<form-input v-model="textValue" class="mb-3">
						<template #prepend>
							<button type="button" class="btn btn-danger">Action</button>
						</template>
					</form-input>

					<p>Small <code>.input-group.input-group-sm</code></p>
					<form-input v-model="textValue" is-small>
						<template #append>
							<button type="button" class="btn btn-info btn-flat">Go!</button>
						</template>
					</form-input>
				</card>

				<card title="Horizontal Form" is-info>
					<form-input
						v-model="textValue"
						class="row"
						input-id="inputEmail3"
						label="Email"
						placeholder="Email"
						:label-styles="['col-sm-2']"
						:horizontal-styles="['col-sm-10']"
						is-horizontal
					/>
					<form-input
						v-model="textValue"
						class="row"
						input-id="inputPassword3"
						type="password"
						label="Password"
						placeholder="Password"
						:label-styles="['col-sm-2']"
						:horizontal-styles="['col-sm-10']"
						is-horizontal
					/>
					<div class="row form-group">
						<div class="offset-sm-2 col-sm-10">
							<checkbox input-id="exampleCheck2">
								Remember me
							</checkbox>
						</div>
					</div>

					<template #footer>
						<button type="submit" class="btn btn-info">Sign in</button>
						<button type="submit" class="btn btn-default float-right">Cancel</button>
					</template>
				</card>

			</div>
			<!--/.col (left) -->
			<!-- right column -->
			<div class="col-md-6">
				<!-- general form elements disabled -->
				<card title="General Elements" is-warning>
					<form role="form">
						<div class="row">
							<div class="col-sm-6">
								<form-input v-model="textValue" label="Text" placeholder="Enter ..." />
							</div>
							<div class="col-sm-6">
								<form-input v-model="textValue" label="Text Disabled" placeholder="Enter ..." is-disabled />
							</div>
						</div>
						<div class="row">
							<div class="col-sm-6">
								<!-- textarea -->
								<form-input v-model="textValue" label="Textarea" rows="3" placeholder="Enter ..." is-textarea />
							</div>
							<div class="col-sm-6">
								<form-input v-model="textValue"
									label="Textarea Disabled"
									rows="3"
									placeholder="Enter ..."
									is-textarea
									is-disabled />
							</div>
						</div>

						<!-- input states -->
						<form-input
							v-model="textValue"
							label="Input with success"
							fas-icon="check"
							placeholder="Enter ..."
							is-valid
						/>
						<form-input
							v-model="textValue"
							label="Input with warning"
							far-icon="bell"
							placeholder="Enter ..."
							is-warning
						/>
						<form-input
							v-model="textValue"
							label="Input with error"
							far-icon="times-circle"
							placeholder="Enter ..."
							is-invalid
						/>

						<div class="row">
							<div class="col-sm-6">
								<!-- checkbox -->
								<checkbox-group
									:options="checkboxOptions"
									v-model="checkedCheckboxes"
									:get-text="x => x.text"
									:get-value="x => x.value"
									:get-disabled="x => x.disabled"
								/>
							</div>
							<div class="col-sm-6">
								<radio-group
									:options="radioOptions"
									v-model="radioValue"
									:get-text="x => x.text"
									:get-value="x => x.value"
									:get-disabled="x => x.disabled"
								/>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<lte-select label="Select">
									<option>option 1</option>
									<option>option 2</option>
									<option>option 3</option>
									<option>option 4</option>
									<option>option 5</option>
								</lte-select>
							</div>
							<div class="col-sm-6">
								<lte-select label="Select Disabled" is-disabled>
									<option>option 1</option>
									<option>option 2</option>
									<option>option 3</option>
									<option>option 4</option>
									<option>option 5</option>
								</lte-select>
							</div>
						</div>

						<div class="row">
							<div class="col-sm-6">
								<lte-select label="Select Multiple" is-multiple>
									<option>option 1</option>
									<option>option 2</option>
									<option>option 3</option>
									<option>option 4</option>
									<option>option 5</option>
								</lte-select>
							</div>
							<div class="col-sm-6">
								<lte-select label="Select Multiple Disabled" is-multiple is-disabled>
									<option>option 1</option>
									<option>option 2</option>
									<option>option 3</option>
									<option>option 4</option>
									<option>option 5</option>
								</lte-select>
							</div>
						</div>
					</form>
				</card>
				<!-- general form elements disabled -->
				<div class="card card-secondary">
					<div class="card-header">
						<h3 class="card-title">Custom Elements</h3>
					</div>
					<!-- /.card-header -->
					<div class="card-body">
						<form role="form">
							<div class="row">
								<div class="col-sm-6">
									<!-- checkbox -->
									<div class="form-group">
										<div class="custom-control custom-checkbox">
											<input class="custom-control-input" type="checkbox" id="customcheckbox1" value="option1">
											<label for="customcheckbox1" class="custom-control-label">Custom checkbox</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input class="custom-control-input" type="checkbox" id="customcheckbox2" checked>
											<label for="customcheckbox2" class="custom-control-label">Custom checkbox checked</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input class="custom-control-input" type="checkbox" id="customcheckbox3" disabled>
											<label for="customcheckbox3" class="custom-control-label">Custom checkbox disabled</label>
										</div>
									</div>
								</div>
								<div class="col-sm-6">
									<!-- radio -->
									<div class="form-group">
										<div class="custom-control custom-radio">
											<input class="custom-control-input" type="radio" id="customRadio1" name="customRadio">
											<label for="customRadio1" class="custom-control-label">Custom Radio</label>
										</div>
										<div class="custom-control custom-radio">
											<input class="custom-control-input" type="radio" id="customRadio2" name="customRadio" checked>
											<label for="customRadio2" class="custom-control-label">Custom Radio checked</label>
										</div>
										<div class="custom-control custom-radio">
											<input class="custom-control-input" type="radio" id="customRadio3" disabled>
											<label for="customRadio3" class="custom-control-label">Custom Radio disabled</label>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<!-- select -->
									<div class="form-group">
										<label>Custom Select</label>
										<select class="custom-select">
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
											<option>option 5</option>
										</select>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Custom Select Disabled</label>
										<select class="custom-select" disabled>
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
											<option>option 5</option>
										</select>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<!-- Select multiple-->
									<div class="form-group">
										<label>Custom Select Multiple</label>
										<select multiple class="custom-select">
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
											<option>option 5</option>
										</select>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Custom Select Multiple Disabled</label>
										<select multiple class="custom-select" disabled>
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
											<option>option 5</option>
										</select>
									</div>
								</div>
							</div>

							<lte-switch input-id="customSwitch1">
								Toggle this custom switch element
							</lte-switch>
							<lte-switch input-id="customSwitch3" switch-off-color="danger" switch-on-color="success">
								Toggle this custom switch element with custom colors danger/success
							</lte-switch>
							<lte-switch input-id="customSwitch2" is-disabled>
								Disabled custom switch element
							</lte-switch>
							<div class="form-group">
								<label for="customRange1">Custom range</label>
								<input type="range" class="custom-range" id="customRange1">
							</div>
							<div class="form-group">
								<label for="customRange1">Custom range (custom-range-danger)</label>
								<input type="range" class="custom-range custom-range-danger" id="customRange12">
							</div>
							<div class="form-group">
								<label for="customRange1">Custom range (custom-range-teal)</label>
								<input type="range" class="custom-range custom-range-teal" id="customRange13">
							</div>
							<div class="form-group">
								<!-- <label for="customFile">Custom File</label> -->

								<div class="custom-file">
									<input type="file" class="custom-file-input" id="customFile">
									<label class="custom-file-label" for="customFile">Choose file</label>
								</div>
							</div>
							<div class="form-group">
							</div>
						</form>
					</div>
					<!-- /.card-body -->
				</div>
				<!-- /.card -->
			</div>
			<!--/.col (right) -->
		</div>
		<!-- /.row -->
	</page>
</template>

<script>
import {
	Card,
	FormInput,
	LteSelect,
	RadioGroup,
	Checkbox,
	CheckboxGroup,
	Page,
	LteSwitch
} from "../../../src"

export default {
	name: "FormsPage",
	components: {Page, LteSwitch, Card, CheckboxGroup, LteSelect, FormInput, Checkbox, RadioGroup},
	data() {
		return {
			textValue: "",
			checkboxOptions: [
				{
					value: "cb1",
					text: "checkbox"
				},
				{
					value: "cb2",
					text: "checkbox checked"
				},
				{
					value: "cb3",
					text: "checkbox disabled",
					disabled: true
				}
			],
			checkedCheckboxes: ["cb2"],
			radioOptions: [
				{
					value: "r1",
					text: "Radio"
				},
				{
					value: "r2",
					text: "Radio checked"
				},
				{
					value: "r3",
					text: "Radio disabled",
					disabled: true
				}
			],
			radioValue: "r2"
		}
	}
}
</script>
