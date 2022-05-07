import '../login.css';
import React from 'react';

class Login extends React.Component {
	render() {
		return (

			<section className="vh-100">
				<div className="container-fluid h-custom">
					<div className="row d-flex justify-content-center align-items-center h-100">
						<div className="col-md-9 col-lg-6 col-xl-5">
							<img src="blue icon.png"
								className="image" alt="Sample image" />
						</div>
						<div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
							<form>

								<div className="form-outline mb-4">
								<label className="form-label" htmlFor="form3Example3">Email address</label>
									<input type="email" id="form3Example3" className="form-control form-control-lg"
										placeholder="Enter a valid email address" />
									
								</div>
								<div className="form-outline mb-3">
								<label className="form-label" htmlFor="form3Example4">Password</label>
									<input type="password" id="form3Example4" className="form-control form-control-lg"
										placeholder="Enter password" />
									
								</div>

								<div className="d-flex justify-content-between align-items-center">
									<div className="form-check mb-0">
										<input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
										<label className="form-check-label" htmlFor="form2Example3">
											Remember me
										</label>
									</div>
									<a href="#!" className="color">Forgot password?</a>
								</div>

								<div className="text-center text-lg-start mt-4 pt-2">
									<button type="button" className="btn color-bg btn-lg"
										style={{
											paddingLeft: "2.5rem",
											paddingRight: "2.5rem"
										}}>Login</button>
									<p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
										className="color">Register</a></p>
								</div>
							</form>
						</div>
					</div>
				</div>
				
			</section>
		);
	}
}

export default Login;
