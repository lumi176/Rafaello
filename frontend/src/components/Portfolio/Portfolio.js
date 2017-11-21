import React, { Component } from 'react';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
 
        	<section id="work">
				<div className="gallery-section white-bg  section-padding">


					<div className="top-angle"></div>
						<div className="container">
								<div className="section-head">
									<h2 className="title">	Portfolio</h2>
									<p className="subtitle">
										dgdfgdfgfdgfdg
									</p>
								</div>



								<div className="galleryFilter">
										<a href="#" data-filter="">All</a>
										<a href="#" className="btnfirst">Presentation sites</a>
										<a href="#" className="btnsecond">Virtual shops</a>
										<a href="#" className="btnthird">Complex sites</a>
										<a href="#" className="btnforth">Android apps</a>
										<a href="#" className="btnfifth" >Logos</a>
									</div> 
								<div id="gallery-container" className="gallery-container">
									

									<div className="gallery-item element-from-bottom">
										<figure className="item cat-3 cat-4 btnfirst">
											<img src="images/gallery-images/thumb/pr-image-1.jpg" alt="Item 3"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-1.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-2 cat-5">
											<img src="images/gallery-images/thumb/pr-image-2.jpg" alt="Item 4"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-2.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-1 cat-2 btnfirst">
											<img src="images/gallery-images/thumb/pr-image-3.jpg" alt="Item 1"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-3.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-1 cat-5">
											<img src="images/gallery-images/thumb/pr-image-4.jpg" alt="Item 2"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-4.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-3 cat-1">
											<img src="images/gallery-images/thumb/pr-image-5.jpg" alt="Item 5"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-5.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-4 cat-1 cat-5">
											<img src="images/gallery-images/thumb/pr-image-6.jpg" alt="Item 6"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-6.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-3 cat-1 cat-4">
											<img src="images/gallery-images/thumb/pr-image-7.jpg" alt="Item 7"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-7.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>

										<figure className="item cat-4 cat-2 cat-5">
											<img src="images/gallery-images/thumb/pr-image-8.jpg" alt="Item 7"/>
											<div className="item-link">
												<a className="link-hex"href="images/gallery-images/pr-image-8.jpg" data-rel="prettyPhoto">
													<span>
														<i className="fa fa-plus"></i>
													</span>
												</a>
											</div>
											<figcaption className="item-description">
												<h4 className="item-title">
													Title Here
												</h4>
												<p className="gallery-item-description">
													Some text about the photo will go here as photo description
												</p>
											</figcaption>
										</figure>
									</div>
								</div>
						</div>
							
			</div>
		
		</section>
    );
  }
}

export default Portfolio;
