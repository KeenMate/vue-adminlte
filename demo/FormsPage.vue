<template>
	<Page>
		<template #header>
			<div class="container-fluid">
				<div class="row mb-2">
					<div class="col-sm-6">
						<h1>General Form</h1>
					</div>
					<div class="col-sm-6">
						<ol class="breadcrumb float-sm-right">
							<li class="breadcrumb-item"><a href="#">Home</a></li>
							<li class="breadcrumb-item active">General Form</li>
						</ol>
					</div>
				</div>
			</div>
		</template>
		<div class="row">
			<!-- left column -->
			<div class="col-md-6">
				<!-- general form elements -->
				<Card title="Quick Example" is-info>
					<FormInput type="email" input-id="exampleInputEmail1" placeholder="Enter email" />
					<FormInput
						type="password"
						input-id="exampleInputPassword1"
						label="Password"
						placeholder="Password"
						is-invalid
					>
						<template #invalid-msg>
							Your password must be at least 5 characters long
						</template>
					</FormInput>
					<FormInput type="password" label="Password" placeholder="Password" />
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
					<Checkbox input-id="exampleCheck1">Check me out</Checkbox>

					<template #footer>
						<button type="submit" class="btn btn-primary">Submit</button>
					</template>
				</Card>

				<!-- Form Element sizes -->
				<Card title="Different Height" is-success>
					<FormInput placeholder=".form-control-lg" size-large />
					<br>
					<FormInput placeholder="Default input" />
					<br>
					<FormInput placeholder=".form-control-sm" is-small />
				</Card>

				<Card title="Different Width" is-danger>
					<div class="row">
						<div class="col-3">
							<FormInput placeholder=".col-3" />
						</div>
						<div class="col-4">
							<FormInput placeholder=".col-4" />
						</div>
						<div class="col-5">
							<FormInput placeholder=".col-5" />
						</div>
					</div>
				</Card>

				<Card title="Input Addon" is-info>
					<FormInput class="mb-3" placeholder="Username">
						<template #prepend>
							<span class="input-group-text">@</span>
						</template>
					</FormInput>
					<FormInput class="mb-3">
						<template #append>
							<span class="input-group-text">.00</span>
						</template>
					</FormInput>
					<FormInput class="mb-3">
						<template #prepend>
							<span class="input-group-text">$</span>
						</template>
						<template #append>
							<span class="input-group-text">.00</span>
						</template>
					</FormInput>

					<h4>With icons</h4>
					<FormInput class="mb-3" type="email" placeholder="Email">
						<template #prepend>
							<span class="input-group-text"><i class="fas fa-envelope"></i></span>
						</template>
					</FormInput>
					<FormInput class="mb-3">
						<template #append>
							<span class="input-group-text"><i class="fas fa-check"></i></span>
						</template>
					</FormInput>
					<FormInput>
						<template #prepend>
							<span class="input-group-text">
								<i class="fas fa-dollar-sign"></i>
							</span>
						</template>
						<template #append>
							<div class="input-group-text"><i class="fas fa-ambulance"></i></div>
						</template>
					</FormInput>

					<h5 class="mt-4 mb-2">With checkbox and radio inputs</h5>
					<div class="row">
						<div class="col-lg-6">
							<FormInput>
								<template #prepend>
									<span class="input-group-text">
										<input type="checkbox">
									</span>
								</template>
							</FormInput>
						</div>
						<!-- /.col-lg-6 -->
						<div class="col-lg-6">
							<FormInput>
								<template #prepend>
									<span class="input-group-text"><input type="radio"></span>
								</template>
							</FormInput>
						</div>
						<!-- /.col-lg-6 -->
					</div>
					<!-- /.row -->

					<h5 class="mt-4 mb-2">With buttons</h5>
					<p>Large: <code>.input-group.input-group-lg</code></p>
					<FormInput is-large>
						<template #prepend>
							<button type="button" class="btn btn-warning dropdown-toggle" data-toggle="dropdown">
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
					</FormInput>

					<p>Normal</p>
					<FormInput class="mb-3">
						<template #prepend>
							<button type="button" class="btn btn-danger">Action</button>
						</template>
					</FormInput>

					<p>Small <code>.input-group.input-group-sm</code></p>
					<FormInput is-small>
						<template #append>
							<button type="button" class="btn btn-info btn-flat">Go!</button>
						</template>
					</FormInput>
				</Card>

				<Card title="Horizontal Form" is-info>
					<FormInput class="row"
						input-id="inputEmail3"
						label="Email"
						placeholder="Email"
						:label-styles="['col-sm-2']"
						:input-styles="['col-sm-10']"
					/>
					<FormInput class="row"
						input-id="inputPassword3"
						type="password"
						label="Password"
						placeholder="Password"
						:label-styles="['col-sm-2']"
						:input-styles="['col-sm-10']"
					/>
					<div class="form-group">
						<div class="offset-sm-2 col-sm-10">
							<Checkbox input-id="exampleCheck2">
								Remember me
							</Checkbox>
						</div>
					</div>

					<template #footer>
						<button type="submit" class="btn btn-info">Sign in</button>
						<button type="submit" class="btn btn-default float-right">Cancel</button>
					</template>
				</Card>

			</div>
			<!--/.col (left) -->
			<!-- right column -->
			<div class="col-md-6">
				<!-- general form elements disabled -->
				<div class="card card-warning">
					<div class="card-header">
						<h3 class="card-title">General Elements</h3>
					</div>
					<!-- /.card-header -->
					<div class="card-body">
						<form role="form">
							<div class="row">
								<div class="col-sm-6">
									<!-- text input -->
									<div class="form-group">
										<label>Text</label>
										<input type="text" class="form-control" placeholder="Enter ...">
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Text Disabled</label>
										<input type="text" class="form-control" placeholder="Enter ..." disabled>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-6">
									<!-- textarea -->
									<div class="form-group">
										<label>Textarea</label>
										<textarea class="form-control" rows="3" placeholder="Enter ..."></textarea>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label>Textarea Disabled</label>
										<textarea class="form-control" rows="3" placeholder="Enter ..." disabled></textarea>
									</div>
								</div>
							</div>

							<!-- input states -->
							<div class="form-group">
								<label class="col-form-label" for="inputSuccess"><i class="fas fa-check"></i> Input with
									success</label>
								<input type="text" class="form-control is-valid" id="inputSuccess" placeholder="Enter ...">
							</div>
							<div class="form-group">
								<label class="col-form-label" for="inputWarning"><i class="far fa-bell"></i> Input with
									warning</label>
								<input type="text" class="form-control is-warning" id="inputWarning" placeholder="Enter ...">
							</div>
							<div class="form-group">
								<label class="col-form-label" for="inputError"><i class="far fa-times-circle"></i> Input with
									error</label>
								<input type="text" class="form-control is-invalid" id="inputError" placeholder="Enter ...">
							</div>

							<div class="row">
								<div class="col-sm-6">
									<!-- checkbox -->
									<div class="form-group">
										<div class="form-check">
											<input class="form-check-input" type="checkbox">
											<label class="form-check-label">Checkbox</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" checked>
											<label class="form-check-label">Checkbox checked</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="checkbox" disabled>
											<label class="form-check-label">Checkbox disabled</label>
										</div>
									</div>
								</div>
								<div class="col-sm-6">
									<!-- radio -->
									<div class="form-group">
										<div class="form-check">
											<input class="form-check-input" type="radio" name="radio1">
											<label class="form-check-label">Radio</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" name="radio1" checked>
											<label class="form-check-label">Radio checked</label>
										</div>
										<div class="form-check">
											<input class="form-check-input" type="radio" disabled>
											<label class="form-check-label">Radio disabled</label>
										</div>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<!-- select -->
									<div class="form-group">
										<label>Select</label>
										<select class="form-control">
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
										<label>Select Disabled</label>
										<select class="form-control" disabled>
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
										<label>Select Multiple</label>
										<select multiple class="form-control">
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
										<label>Select Multiple Disabled</label>
										<select multiple class="form-control" disabled>
											<option>option 1</option>
											<option>option 2</option>
											<option>option 3</option>
											<option>option 4</option>
											<option>option 5</option>
										</select>
									</div>
								</div>
							</div>
						</form>
					</div>
					<!-- /.card-body -->
				</div>
				<!-- /.card -->
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
											<input class="custom-control-input" type="checkbox" id="customCheckbox1" value="option1">
											<label for="customCheckbox1" class="custom-control-label">Custom Checkbox</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input class="custom-control-input" type="checkbox" id="customCheckbox2" checked>
											<label for="customCheckbox2" class="custom-control-label">Custom Checkbox checked</label>
										</div>
										<div class="custom-control custom-checkbox">
											<input class="custom-control-input" type="checkbox" id="customCheckbox3" disabled>
											<label for="customCheckbox3" class="custom-control-label">Custom Checkbox disabled</label>
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

							<div class="form-group">
								<div class="custom-control custom-switch">
									<input type="checkbox" class="custom-control-input" id="customSwitch1">
									<label class="custom-control-label" for="customSwitch1">Toggle this custom switch element</label>
								</div>
							</div>
							<div class="form-group">
								<div class="custom-control custom-switch custom-switch-off-danger custom-switch-on-success">
									<input type="checkbox" class="custom-control-input" id="customSwitch3">
									<label class="custom-control-label" for="customSwitch3">Toggle this custom switch element with custom
										colors danger/success</label>
								</div>
							</div>
							<div class="form-group">
								<div class="custom-control custom-switch">
									<input type="checkbox" class="custom-control-input" disabled id="customSwitch2">
									<label class="custom-control-label" for="customSwitch2">Disabled custom switch element</label>
								</div>
							</div>
							<div class="form-group">
								<label for="customRange1">Custom range</label>
								<input type="range" class="custom-range" id="customRange1">
							</div>
							<div class="form-group">
								<label for="customRange1">Custom range (custom-range-danger)</label>
								<input type="range" class="custom-range custom-range-danger" id="customRange1">
							</div>
							<div class="form-group">
								<label for="customRange1">Custom range (custom-range-teal)</label>
								<input type="range" class="custom-range custom-range-teal" id="customRange1">
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
	</Page>
</template>

<script>
import Page from "../src/components/structure/Page"
import FormInput from "../src/components/forms/FormInput"
import Checkbox from "../src/components/forms/Checkbox"

export default {
	name: "FormsPage",
	components: {Checkbox, FormInput, Page}
}
</script>
