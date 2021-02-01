import React, { useState } from 'react';
import differenceBy from 'lodash/differenceBy';
import Navigation from './Navigation';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Services = (props) => {

	const programs = props.location.state.programs;

	const services = props.location.state.services;
	
	const [checked, setChecked] = useState(false);
	
	
	const selectedProgramType = props.location.state.programType;
	//console.log({ selectedProgramType });
	
	
	
	

	const programDefaultServices = programs.find(
		(program) =>  program.type===selectedProgramType).services
		
	
	const programDefaultPrice = programDefaultServices.reduce((result,current)=>result+current.price,0);
	const [totPrice, SetTotPrice] = useState(programDefaultPrice);

	let extraServices = differenceBy(services, programDefaultServices, 'id');
	console.log({ services, programDefaultServices, extraServices });
		
	const handlePrice = (price, checked) => {
		checked ? SetTotPrice(totPrice + price) :  SetTotPrice(totPrice - price) ;
	}
	return (
		<section id="extra">
			<Navigation />
				<div className="container" style={{height: '60vh'}}>
					<div className="row h-100 d-flex justify-content-center align-middle align-items-center">
						<div className="col d-flex justify-content-center align-middle">
						<div>
			<h4>Extra Services</h4>
			<form>
				<ul className='list-unstyled'>
					{services.map((service) => {
						return (
							<li key={service.id}>
								<div class='form-check'>
									<label class='form-check-label' for='exampleCheck1'>
										<input
											type='checkbox'
											class='form-check-input'
											id='exampleCheck1'
											checked={checked}
											onChange={() => {
												setChecked(!checked);
												handlePrice(service.price,!checked);
											}}
											
										/>

										{`${service.name} for $${service.price}`}
									</label>
								</div>
							</li>
						);
					})}
				</ul>
				<h4>Total: $ <u>{totPrice}</u></h4>
				<Link
					to={{
						pathname: `/checkout`,
						state: {		
							totalAmount: totPrice,						
						},
					}}
				>
					<button type='submit' class='btn btn-primary'>
						Check Out
					</button>
				</Link>
			</form>
		</div>
						</div>
					</div>
				</div>
			<Footer />
		</section>
	);
};
export default Services;
