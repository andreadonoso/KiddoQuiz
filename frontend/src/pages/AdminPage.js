

const Admin = (pb) => {
	return <>
		<h1>Admin</h1>

		<form>
			<fieldset>
				<legend>Questions</legend>
				<div>
					<label htmlFor="username">Username</label>
					<input type="text" id="username" name="username" />
				</div>
			</fieldset>
		</form>
	</>;
};

export default Admin;
