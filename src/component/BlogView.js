import React from 'react'

class BlogView extends Component {
    render() {
        return (
            <div>
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                            <div class="modal-body text-center pb-5">
                                <div class="container">
                                    <div class="row justify-content-center">
                                        <div class="col-lg-8">
                                            <div key={index}>
                                                <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                                                    {post.title}
                                                </h2>
                                                {/* <!-- Icon Divider--> */}
                                                <div class="divider-custom">
                                                    <div class="divider-custom-line"></div>
                                                    <div class="divider-custom-icon">
                                                        <i class="fas fa-star"></i>
                                                    </div>
                                                    <div class="divider-custom-line"></div>
                                                </div>
                                                {/* <!-- Portfolio Modal - Image--> */}
                                                <img
                                                    class="img-fluid rounded mb-5"
                                                    src="assets/img/portfolio/cabin.png"
                                                    alt="..."
                                                />
                                                {/* <!-- Portfolio Modal - Text--> */}
                                                <p class="mb-4"> {post.body}</p>
                                            </div>
                                            <button class="btn btn-primary" href="#!" data-bs-dismiss="modal">
                                                <i class="fas fa-times fa-fw"></i>
                                                Close Window
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BlogView
