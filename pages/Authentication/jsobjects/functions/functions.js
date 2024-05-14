export default {

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

	signIn: async () => {
		try{
			const result = await Login.run();
			const token = result.data.access_token;

			storeValue('token', token)
				.then(() => showAlert('Login Success', 'success'))
			 .then(()=>{
				setTimeout(navigateTo("Tasks"),5000)
			})
		}
		catch(e){
			showAlert(`Error while login`, 'error')
		}
	},
}